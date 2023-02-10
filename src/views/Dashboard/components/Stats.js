import React from 'react';

import { Box, Button, Grid, Paper } from '@material-ui/core';

import useBombStats from '../../../hooks/useBombStats';
import useBondStats from '../../../hooks/useBondStats';
import useShareStats from '../../../hooks/usebShareStats';
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';
import useTreasuryAllocationTimes from '../../../hooks/useTreasuryAllocationTimes';
import ProgressCountdown from '../../Boardroom/components/ProgressCountdown';
import moment from 'moment';

const Stats = () => {
  const currentEpoch = useCurrentEpoch();
  const { to } = useTreasuryAllocationTimes();
  const bombStat = useBombStats();
  const bShareStat = useShareStats();
  const bBondStat = useBondStats();

  return (
    <Grid container style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle', overflow: 'hidden' }}>
      <Paper style={{ width: '100%', padding: '1rem' }}>
        <h2 style={{ textAlign: 'center' }}>Bomb Finance Summary</h2>
        <hr style={{ width: '95%' }} />
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Grid container spacing={1} sm={8}>
            <Grid container item spacing={1}>
              <Grid item sm={3}></Grid>
              <Grid item sm={3}>
                Current Supply
              </Grid>
              <Grid item sm={3}>
                Total Supply
              </Grid>
              <Grid item sm={3}>
                Price
              </Grid>
            </Grid>
            <hr style={{ width: '80%' }} />

            <Grid container item spacing={1}>
              <Grid item sm={3}>
                $BOMB
              </Grid>
              <Grid item sm={3}>
                {/* 8.66M */}
                {bombStat?.circulatingSupply}
              </Grid>
              <Grid item sm={3}>
                {/* 60.9K */}
                {bombStat?.totalSupply}
              </Grid>
              <Grid item sm={3}>
                <div>${bombStat?.priceInDollars}</div>
                <div>1.05BTCB</div>
              </Grid>
            </Grid>
            <hr style={{ width: '80%' }} />

            <Grid container item spacing={1}>
              <Grid item sm={3}>
                $BSHARE
              </Grid>
              <Grid item sm={3}>
                {bShareStat?.circulatingSupply}
              </Grid>
              <Grid item sm={3}>
                {bShareStat?.totalSupply}
              </Grid>
              <Grid item sm={3}>
                <div>${bShareStat?.priceInDollars}</div>
                <div>1.05BTCB</div>
              </Grid>
            </Grid>
            <hr style={{ width: '80%' }} />

            <Grid container item spacing={1}>
              <Grid item sm={3}>
                $BBOND
              </Grid>
              <Grid item sm={3}>
                {bBondStat?.circulatingSupply}
              </Grid>
              <Grid item sm={3}>
                {bBondStat?.totalSupply}
              </Grid>
              <Grid item sm={3}>
                <div>${bBondStat?.priceInDollars}</div>
                <div>1.05BTCB</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm={4}>
            <div>
              <h3>Current Epoch</h3>
              <h1>{currentEpoch.toString()}</h1>
            </div>
            <hr />
            <div>
              <h1>
                <ProgressCountdown
                  className="Bfs_number"
                  base={moment().toDate()}
                  hideBar={true}
                  deadline={to}
                  description="Next Epoch"
                  style={{ textAlign: 'left !important' }}
                />
              </h1>

              <h3>Next Epoch in</h3>
            </div>
            <hr />
            <div>
              <div>
                Live TWAP: <span>1.52</span>
              </div>
              <div>
                TVL: <span>$5002,412</span>{' '}
              </div>
              <div>
                Last Epoc TWAP: <span>1.22</span>{' '}
              </div>
            </div>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Stats;
