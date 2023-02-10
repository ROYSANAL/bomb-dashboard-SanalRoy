import React from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import Bank from './Bank';
import useWallet from 'use-wallet';
import UnlockWallet from '../../../../components/UnlockWallet';

const Farms = () => {
  const activeBankIds = ['BombBtcbLPBShareRewardPool', 'BshareBnbLPBShareRewardPool'];
  const { account } = useWallet();

  return (
    <Grid>
      <Paper style={{ width: '100%', margin: '0 1rem 0.3rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ padding: '0.5rem' }}>
            <h2>Bomb Farms</h2>
            <div style={{ margin: '0', fontSize: '0.9rem' }}>
              Stake your LP tokens in our farms to start earning $BSHARE{' '}
            </div>
          </div>
          <Button variant="outlined" style={{ borderColor: 'white', marginRight: '0.5rem', marginTop: '0.5rem' }}>
            {' '}
            Claim All
          </Button>
        </div>

        {account ? (
          activeBankIds.map((bankId) => {
            return <Bank key={bankId} bankId={bankId} />;
          })
        ) : (
          <UnlockWallet />
        )}
      </Paper>
    </Grid>
  );
};

export default Farms;
