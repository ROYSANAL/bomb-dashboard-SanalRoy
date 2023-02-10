import React, { useMemo } from 'react';

import { Grid, Box, Button } from '@material-ui/core';
import useBank from '../../../../hooks/useBank';
import useStatsForPool from '../../../../hooks/useStatsForPool';
import useApprove, { ApprovalState } from '../../../../hooks/useApprove';
import { getDisplayBalance } from '../../../../utils/formatBalance';
import useTokenBalance from '../../../../hooks/useTokenBalance';
import useStakedBalance from '../../../../hooks/useStakedBalance';
import useStakedTokenPriceInDollars from '../../../../hooks/useStakedTokenPriceInDollars';
import useStake from '../../../../hooks/useStake';
import useWithdraw from '../../../../hooks/useWithdraw';
import useModal from '../../../../hooks/useModal';
import DepositModal from '../../../Bank/components/DepositModal';
import WithdrawModal from '../../../Bank/components/WithdrawModal';
import useEarnings from '../../../../hooks/useEarnings';
import useBombStats from '../../../../hooks/useBombStats';
import useShareStats from '../../../../hooks/usetShareStats';
import useHarvest from '../../../../hooks/useHarvest';

const Bank = ({ bankId }) => {
  const bank = useBank(bankId);

  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);

  const { onReward } = useHarvest(bank);

  let statsOnPool = useStatsForPool(bank);

  const [approveStatus, approve] = useApprove(bank.depositToken, bank.address);

  const tokenBalance = useTokenBalance(bank.depositToken);
  const stakedBalance = useStakedBalance(bank.contract, bank.poolId);
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);
  const tokenPriceInDollars = useMemo(
    () => (stakedTokenPriceInDollars ? stakedTokenPriceInDollars : null),
    [stakedTokenPriceInDollars],
  );
  const earnedInDollars = (
    Number(tokenPriceInDollars) * Number(getDisplayBalance(stakedBalance, bank.depositToken.decimal))
  ).toFixed(2);

  const yourStake = getDisplayBalance(stakedBalance, bank.depositToken.decimal);

  const bombStats = useBombStats();
  const tShareStats = useShareStats();

  const tokenStats = bank.earnTokenName === 'BSHARE' ? tShareStats : bombStats;
  const tokenPriceInDollars1 = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInDollars1 = (Number(tokenPriceInDollars1) * Number(getDisplayBalance(earnings))).toFixed(2);

  const earned = getDisplayBalance(earnings);

  const { onStake } = useStake(bank);
  const { onWithdraw } = useWithdraw(bank);

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      decimals={bank.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onStake(amount);
        onDismissDeposit();
      }}
      tokenName={bank.depositTokenName}
    />,
  );

  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      decimals={bank.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onWithdraw(amount);
        onDismissWithdraw();
      }}
      tokenName={bank.depositTokenName}
    />,
  );

  return (
    <Box style={{ margin: '0rem 1rem' }}>
      <Grid container>
        <Grid sm={8}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '5px', margin: '0.5rem' }}>
            <h3>
              {/* BOMB-BTCB */}
              {bank?.depositTokenName}
            </h3>
            <span style={{ padding: '3px', color: 'white', background: 'green', fontSize: '12px' }}>Recommended</span>
          </div>
        </Grid>
        <Grid
          sm={4}
          style={{
            textAlign: 'end',
            verticalAlign: 'bottom',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <div style={{ padding: '0 0.5rem' }}> TVL: ${statsOnPool?.TVL}</div>
        </Grid>
        <hr color="white" style={{ width: '98%' }} />
      </Grid>
      <Grid container style={{ padding: '0.5rem' }}>
        <Grid sm={2}>
          <div>Daily Returns</div>
          <h4>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</h4>
        </Grid>
        <Grid sm={2}>
          <div>Your Stake</div>
          <h4>{yourStake}</h4>
          <div>=${earnedInDollars}</div>
        </Grid>
        <Grid sm={2}>
          <div>Earned</div>
          <h4>{earned}</h4>
          <div>=${earnedInDollars1}</div>
        </Grid>
        <Grid sm={6} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          {approveStatus !== ApprovalState.APPROVED && false ? (
            <Button
              disabled={
                bank.closedForStaking ||
                approveStatus === ApprovalState.PENDING ||
                approveStatus === ApprovalState.UNKNOWN
              }
              onClick={approve}
              className={
                bank.closedForStaking ||
                approveStatus === ApprovalState.PENDING ||
                approveStatus === ApprovalState.UNKNOWN
                  ? 'shinyButtonDisabled'
                  : 'shinyButton'
              }
              style={{ marginTop: '20px' }}
            >
              {`Approve ${bank.depositTokenName}`}
            </Button>
          ) : (
            <Button
              disabled={bank.closedForStaking}
              onClick={() => (bank.closedForStaking ? null : onPresentDeposit())}
              variant="outlined"
              style={{ width: '20%', borderColor: 'white' }}
            >
              {' '}
              Deposit
            </Button>
          )}

          <Button onClick={onPresentWithdraw} variant="outlined" style={{ width: '20%', borderColor: 'white' }}>
            {' '}
            Withdraw
          </Button>

          <Button
            onClick={onReward}
            disabled={earnings.eq(0)}
            className={earnings.eq(0) ? 'shinyButtonDisabled' : 'shinyButton'}
            variant="outlined"
            style={{ width: '40%', borderColor: 'white' }}
          >
            {' '}
            Claim Rewards
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Bank;
