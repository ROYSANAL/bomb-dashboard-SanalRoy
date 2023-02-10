import React from 'react';
import { Button, Grid, Paper } from '@material-ui/core';

const Bonds = () => {
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
            <h3>BBond = 6.2872 BTCB</h3>
          </Grid>
          <Grid sm={3}>
            <div>Available to redeem:</div>
            <h3>456</h3>
          </Grid>
          <Grid sm={6}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div>Purchase Bond</div>
                <div>Bomb is over peg</div>
              </div>
              <Button variant="outlined" style={{ borderColor: 'white', width: '30%' }}>
                Puchase
              </Button>
            </div>
            <hr />
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>Redemm Bomb</div>
              <Button variant="outlined" style={{ borderColor: 'white', width: '30%' }}>
                Redeem
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Bonds;
