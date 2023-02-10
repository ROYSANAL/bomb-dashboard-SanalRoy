import React from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import { Button, Grid, Paper } from '@material-ui/core';
import HomeImage from '../../assets/img/background.jpg';

import Boardroom from './components/Boardroom';
import Stats from './components/Stats';
import Farms from './components/Farms';
import Bonds from './components/Bonds';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const Dashboard = () => {
  return (
    <Page>
      <BackgroundImage />
      <Stats />
      <Grid container style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden', margin: '1rem 0' }}>
        <Grid container sm={8}>
          <a href="#" style={{ width: '100%', padding: '0 1rem', textAlign: 'right' }}>
            Read Investement Strategy &gt;
          </a>
          <Button
            variant="contained"
            style={{ background: 'rgb(135, 206, 235)', width: '100%', margin: '0.5rem 1rem 0.3rem 0' }}
          >
            Invest Now
          </Button>
          <div
            style={{
              width: '100%',
              margin: '0rem 1rem 0.5rem 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Button variant="contained" style={{ flex: '1', margin: '0.5rem 0.5rem 0.5rem 0' }}>
              Chat on Discord
            </Button>
            <Button variant="contained" style={{ flex: '1', margin: '0.5rem 0 0.5rem 0' }}>
              Read Docs
            </Button>
          </div>
          <Boardroom />
        </Grid>
        <Grid container sm={4}>
          <Paper style={{ width: '100%', height: '100%', padding: '0.5rem' }}>
            <h2>Latest News</h2>
          </Paper>
        </Grid>
      </Grid>
      <Farms />
      <Bonds />
    </Page>
  );
};

export default Dashboard;
