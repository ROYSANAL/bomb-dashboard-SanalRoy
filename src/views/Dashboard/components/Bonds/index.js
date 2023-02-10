import React, { useCallback, useMemo } from 'react';
import { Grid, Paper } from '@material-ui/core';
import useBombFinance from '../../../../hooks/useBombFinance';
import { useTransactionAdder } from '../../../../state/transactions/hooks';
import useBondStats from '../../../../hooks/useBondStats';
import useCashPriceInLastTWAP from '../../../../hooks/useCashPriceInLastTWAP';
import useBondsPurchasable from '../../../../hooks/useBondsPurchasable';
import useTokenBalance from '../../../../hooks/useTokenBalance';
import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN } from '../../../../bomb-finance/constants';
import { getDisplayBalance } from '../../../../utils/formatBalance';
import ExchangeCard from './ExchangeCard';

const Bonds = () => {
  const bombFinance = useBombFinance();

  const addTransaction = useTransactionAdder();
  const bondStat = useBondStats();

  //const bombStat = useBombStats();
  const cashPrice = useCashPriceInLastTWAP();

  const bondsPurchasable = useBondsPurchasable();

  const bondBalance = useTokenBalance(bombFinance?.BBOND);
  //const scalingFactor = useMemo(() => (cashPrice ? Number(cashPrice) : null), [cashPrice]);

  const handleBuyBonds = useCallback(
    async (amount) => {
      const tx = await bombFinance.buyBonds(amount);
      addTransaction(tx, {
        summary: `Buy ${Number(amount).toFixed(2)} BBOND with ${amount} BOMB`,
      });
    },
    [bombFinance, addTransaction],
  );

  const handleRedeemBonds = useCallback(
    async (amount) => {
      const tx = await bombFinance.redeemBonds(amount);
      addTransaction(tx, { summary: `Redeem ${amount} BBOND` });
    },
    [bombFinance, addTransaction],
  );
  const isBondRedeemable = useMemo(() => cashPrice.gt(BOND_REDEEM_PRICE_BN), [cashPrice]);
  const isBondPurchasable = useMemo(() => Number(bondStat?.tokenInFtm) < 1.01, [bondStat]);

  const availableToRedeem = getDisplayBalance(bondBalance);

  return (
    <Grid>
      <Paper style={{ width: '100%', marginTop: '1rem' }}>
        <Grid sm={12} style={{ padding: '0.5rem' }}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '5px', margin: '0.5rem' }}>
            <h3>Bonds </h3>
          </div>
          <div style={{ margin: '0 0.5rem', fontSize: '0.9rem' }}>
            BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1
          </div>
        </Grid>
        <Grid container style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <Grid sm={3}>
            <div>Current Price (Bomb)^2</div>
            <h3>10,000 BBOND = {Number(bondStat?.tokenInFtm).toFixed(4) || '-'} BTCB</h3>
          </Grid>
          <Grid sm={3}>
            <div>Available to redeem:</div>
            <h3>{availableToRedeem} BBOND</h3>
          </Grid>
          <Grid sm={6}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <ExchangeCard
                action="Purchase"
                fromToken={bombFinance.BOMB}
                fromTokenName="BOMB"
                toToken={bombFinance.BBOND}
                toTokenName="BBOND"
                priceDesc={
                  !isBondPurchasable
                    ? 'BOMB is over peg'
                    : getDisplayBalance(bondsPurchasable, 18, 4) + ' BBOND available for purchase'
                }
                onExchange={handleBuyBonds}
                disabled={!bondStat || isBondRedeemable}
              />
            </div>
            <hr />
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* <Button variant="outlined" style={{ borderColor: 'white', width: '30%' }}>
                Redeem
              </Button> */}

              <ExchangeCard
                action="Redeem"
                fromToken={bombFinance.BBOND}
                fromTokenName="BBOND"
                toToken={bombFinance.BOMB}
                toTokenName="BOMB"
                priceDesc={`${getDisplayBalance(bondBalance)} BBOND Available in wallet`}
                onExchange={handleRedeemBonds}
                disabled={!bondStat || bondBalance.eq(0) || !isBondRedeemable}
                disabledDescription={!isBondRedeemable ? `Enabled when 10,000 BOMB > ${BOND_REDEEM_PRICE}BTC` : null}
              />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Bonds;
