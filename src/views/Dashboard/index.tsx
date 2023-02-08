import { Box } from '@material-ui/core';
import React from 'react';
import Page from '../../components/Page';

const Dashboard:React.FC = () => {
    return (
        <Page>
            <Box style={{border: '1px solid red'}}>
                This is dashboard
            </Box>
        </Page>
    )
}

export default Dashboard;