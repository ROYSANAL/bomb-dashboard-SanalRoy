import React, { useMemo } from 'react';

import { Grid, Paper, Button } from '@material-ui/core';
import useTokenBalance from '../../../hooks/useTokenBalance';
import useBombFinance from '../../../hooks/useBombFinance';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';
import useClaimRewardCheck from '../../../hooks/boardroom/useClaimRewardCheck';
import useStakeToBoardroom from '../../../hooks/useStakeToBoardroom';
import useWithdrawFromBoardroom from '../../../hooks/useWithdrawFromBoardroom';
import useHarvestFromBoardroom from '../../../hooks/useHarvestFromBoardroom';
import useModal from '../../../hooks/useModal';
import WithdrawModal from '../../Boardroom/components/WithdrawModal';
import DepositModal from '../../Boardroom/components/DepositModal';

import { getDisplayBalance } from '../../../utils/formatBalance';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import useFetchBoardroomAPR from '../../../hooks/useFetchBoardroomAPR';
import useBombStats from '../../../hooks/useBombStats';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';

const Boardroom = () => {
  const bombFinance = useBombFinance();
  const [approveStatus, approve] = useApprove(bombFinance.BSHARE, bombFinance.contracts.Boardroom.address);

  const bombStats = useBombStats();

  const earnings = useEarningsOnBoardroom();
  const canClaimReward = useClaimRewardCheck();

  const earnedTokenPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );

  const earnedInDollars = (Number(earnedTokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);

  const tokenBalance = useTokenBalance(bombFinance.BSHARE);
  const stakedBalance = useStakedBalanceOnBoardroom();
  const boardroomAPR = useFetchBoardroomAPR();

  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('BSHARE', bombFinance.BSHARE);
  const tokenPriceInDollars = useMemo(
    () =>
      stakedTokenPriceInDollars
        ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString()
        : null,
    [stakedTokenPriceInDollars, stakedBalance],
  );

  const yourStake = getDisplayBalance(stakedBalance);
  const earned = getDisplayBalance(earnings);

  const { onStake } = useStakeToBoardroom();
  const { onWithdraw } = useWithdrawFromBoardroom();
  const { onReward } = useHarvestFromBoardroom();

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={(value) => {
        onStake(value);
        onDismissDeposit();
      }}
      tokenName={'BShare'}
    />,
  );

  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={(value) => {
        onWithdraw(value);
        onDismissWithdraw();
      }}
      tokenName={'BShare'}
    />,
  );

  const totalStaked = useTotalStakedOnBoardroom();
  const tvl = getDisplayBalance(totalStaked);
  const tvlInDollars = useMemo(
    () =>
      stakedTokenPriceInDollars
        ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(totalStaked))).toFixed(2).toString()
        : null,
    [stakedTokenPriceInDollars, totalStaked],
  );

  return (
    <Paper style={{ width: '100%', margin: '0 1rem 0.3rem 0' }}>
      <Grid container>
        <Grid sm={8}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '5px', margin: '0.5rem' }}>
            <h3>Boardroom</h3>
            <span style={{ padding: '3px', color: 'white', background: 'green', fontSize: '12px' }}>Recommended</span>
          </div>
          <div style={{ margin: '0 0.5rem', fontSize: '0.9rem' }}>Stake BSHARE and earn BOMB every epoch</div>
        </Grid>
        <Grid
          sm={4}
          style={{
            textAlign: 'end',
            verticalAlign: 'bottom',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          <div style={{ padding: '0 0.5rem' }}> TVL: ${tvlInDollars}</div>
          <div style={{ padding: '0 0.5rem' }}> Total Staked: {tvl}</div>
        </Grid>
        <hr color="white" style={{ width: '98%' }} />
      </Grid>
      <Grid container style={{ padding: '0.5rem' }}>
        <Grid sm={3}>
          <div>Daily Returns</div>
          <h4>{boardroomAPR.toFixed(2)}%</h4>
        </Grid>
        <Grid sm={3}>
          <div>Your Stake</div>
          <h4>{yourStake}</h4>
          <div>=${tokenPriceInDollars}</div>
        </Grid>
        <Grid sm={2}>
          <div>Earned</div>
          <h4>{earned}</h4>
          <div>=${earnedInDollars}</div>
        </Grid>
        <Grid sm={4}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {approveStatus !== ApprovalState.APPROVED ? (
              <Button
                disabled={approveStatus !== ApprovalState.NOT_APPROVED}
                className={approveStatus === ApprovalState.NOT_APPROVED ? 'shinyButton' : 'shinyButtonDisabled'}
                // style={{ marginTop: '20px' }}
                variant="outlined"
                style={{ width: '47%', borderColor: 'white' }}
                onClick={approve}
              >
                Approve BSHARE
              </Button>
            ) : (
              <Button onClick={onPresentDeposit} variant="outlined" style={{ width: '47%', borderColor: 'white' }}>
                {' '}
                Deposit
              </Button>
            )}

            <Button onClick={onPresentWithdraw} variant="outlined" style={{ width: '47%', borderColor: 'white' }}>
              {' '}
              Withdraw
            </Button>
          </div>
          <Button
            onClick={onReward}
            className={earnings.eq(0) || !canClaimReward ? 'shinyButtonDisabled' : 'shinyButton'}
            disabled={earnings.eq(0) || !canClaimReward}
            variant="outlined"
            style={{ width: '100%', borderColor: 'white', marginTop: '0.5rem' }}
          >
            {' '}
            Claim Rewards
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Boardroom;
