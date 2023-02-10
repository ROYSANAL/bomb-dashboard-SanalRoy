import React from 'react';
import { Box, Button, Grid, Paper } from '@material-ui/core';

const Farms = () => {
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

        <Box style={{ margin: '0rem 1rem' }}>
          <Grid container>
            <Grid sm={8}>
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '5px', margin: '0.5rem' }}>
                <h3>BOMB-BTCB</h3>
                <span style={{ padding: '3px', color: 'white', background: 'green', fontSize: '12px' }}>
                  Recommended
                </span>
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
              <div style={{ padding: '0 0.5rem' }}> TVL: $1,0008,430</div>
            </Grid>
            <hr color="white" style={{ width: '98%' }} />
          </Grid>
          <Grid container style={{ padding: '0.5rem' }}>
            <Grid sm={2}>
              <div>Daily Returns</div>
              <h4>2%</h4>
            </Grid>
            <Grid sm={2}>
              <div>Your Stake</div>
              <h4>124.21</h4>
              <div>=$1171.62</div>
            </Grid>
            <Grid sm={2}>
              <div>Earned</div>
              <h4>124.21</h4>
              <div>=$1171.62</div>
            </Grid>
            <Grid sm={6} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <Button variant="outlined" style={{ width: '20%', borderColor: 'white' }}>
                {' '}
                Deposit
              </Button>
              <Button variant="outlined" style={{ width: '20%', borderColor: 'white' }}>
                {' '}
                Withdraw
              </Button>

              <Button variant="outlined" style={{ width: '40%', borderColor: 'white' }}>
                {' '}
                Claim Rewards
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ margin: '0rem 1rem' }}>
          <Grid container>
            <Grid sm={8}>
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '5px', margin: '0.5rem' }}>
                <h3>BSHARE-BNB</h3>
                <span style={{ padding: '3px', color: 'white', background: 'green', fontSize: '12px' }}>
                  Recommended
                </span>
              </div>
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
              <div style={{ padding: '0 0.5rem' }}> TVL: $1,0008,430</div>
            </Grid>
            <hr color="white" style={{ width: '98%' }} />
          </Grid>
          <Grid container style={{ padding: '0.5rem' }}>
            <Grid sm={2}>
              <div>Daily Returns</div>
              <h4>2%</h4>
            </Grid>
            <Grid sm={2}>
              <div>Your Stake</div>
              <h4>124.21</h4>
              <div>=$1171.62</div>
            </Grid>
            <Grid sm={2}>
              <div>Earned</div>
              <h4>124.21</h4>
              <div>=$1171.62</div>
            </Grid>
            <Grid sm={6} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <Button variant="outlined" style={{ width: '20%', borderColor: 'white' }}>
                {' '}
                Deposit
              </Button>
              <Button variant="outlined" style={{ width: '20%', borderColor: 'white' }}>
                {' '}
                Withdraw
              </Button>

              <Button variant="outlined" style={{ width: '40%', borderColor: 'white' }}>
                {' '}
                Claim Rewards
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Farms;
