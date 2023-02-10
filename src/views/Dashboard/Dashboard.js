import React from 'react'
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import { Box, Button, Card, CardContent, Grid, Paper } from '@material-ui/core';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import ProgressCountdown from '../Boardroom/components/ProgressCountdown';
import moment from 'moment';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import useBombStats from '../../hooks/useBombStats';



import HomeImage from '../../assets/img/background.jpg';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const Dashboard = () => {
     let currentEpoch = useCurrentEpoch();
     let { to } = useTreasuryAllocationTimes();
     let bombStat = useBombStats();
     console.log(bombStat);
     
     return (
          <Page>
               <BackgroundImage />
               <Grid container
                    style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle', overflow: 'hidden' }}
               >
                    <Paper style={{width:"100%", padding:"1rem"}}>
                         <h2 style={{ textAlign:"center", }}>Bomb Finance Summary</h2>
                         <hr style={{width:"95%"}}/>
                         <Box style={{display:"flex", alignItems:'center', justifyContent:'space-around'}}>
                              <Grid container spacing={1} sm={8} >
                                   <Grid container item spacing={1} >
                                        <Grid item sm={3} ></Grid>
                                        <Grid item sm={3} >Current Supply</ Grid>
                                        <Grid item sm={3} >Total Supply</Grid>
                                        <Grid item sm={3} >Price</Grid>
                                   </Grid>
                                   <hr style={{width:"80%"}}/>

                                   
                                    <Grid container item spacing={1}>
                                        <Grid item sm={3} >$BOMB</Grid>
                                        <Grid item sm={3} >8.66M</Grid>
                                        <Grid item sm={3} >60.9K</ Grid>
                                        <Grid item sm={3} >
                                             <div>$0.24</div>
                                             <div>1.05BTCB</div>
                                        </Grid>
                                   </Grid>
                                   <hr style={{width:"80%"}}/>


                                    <Grid container item spacing={1}>
                                        <Grid item sm={3} >$BSHARE</Grid>
                                          <Grid item sm={3}>8.66M</Grid>
                                        <Grid item sm={3} >60.9K</ Grid>
                                        <Grid item sm={3} >
                                             <div>$0.24</div>
                                             <div>1.05BTCB</div>
                                        </Grid>
                                   </Grid>
                                   <hr style={{width:"80%"}}/>

                                    <Grid container item spacing={1}>
                                        <Grid item sm={3} >$BBOND</Grid>
                                         <Grid item sm={3} >8.66M</Grid>
                                        <Grid item sm={3} >60.9K</ Grid>
                                        <Grid item sm={3} >
                                             <div>$0.24</div>
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
              style={{textAlign:"left !important"}}
            />
            </h1>
                                      
                                        <h3>Next Epoch in</h3>
                                        </div>
                                        <hr />
                                        <div>
                                             <div>Live TWAP: <span>1.52</span></div>
                                             <div>TVL: <span>$5002,412</span> </div>
                                             <div>Last Epoc TWAP: <span>1.22</span> </div>
                                        </div>
                              </Grid>
                         </Box>
                    </Paper>
               </Grid>
               <Grid container
                    style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden',  margin:"1rem 0" }}
                >
                    <Grid container sm={8}   >
                         <a href="#" style={{width:"100%", padding:"0 1rem", textAlign:"right"}}>Read Investement Strategy &gt;</a>
                         <Button variant='contained' style={{background:'rgb(135, 206, 235)', width:"100%", margin:"0.5rem 1rem 0.3rem 0"}}>Invest Now</Button>
                         <div style={{width:"100%", margin:"0rem 1rem 0.5rem 0", display:"flex", alignItems:"center", justifyContent: "space-between"}}>
                         <Button variant='contained' style={{ flex:"1", margin:"0.5rem 0.5rem 0.5rem 0"}}>Chat on Discord</Button>
                         <Button variant='contained' style={{ flex:"1", margin:"0.5rem 0 0.5rem 0"}}>Read Docs</Button>
                         </div>
                         <Paper style={{ width:"100%", margin:"0 1rem 0.3rem 0"}}>
                              <Grid container>
                                   <Grid sm={8}>
                                        <div style={{ width:"100%", display:"flex", alignItems:"center", gap:"5px", margin:"0.5rem"}}>
                                        <h3>Boardroom </h3>
                                             <span style={{padding:"3px", color:"white", background:"green", fontSize:"12px"}}>Recommanded</span>
                                        </div>
                                        <div style={{margin:"0 0.5rem", fontSize:"0.9rem"}}>Stake BSHARE and earn BOMB every epoch</div>
                                   </Grid>
                                   <Grid sm={4} style={{textAlign:"end", verticalAlign:"bottom", display:'flex', alignItems:"flex-end", justifyContent:"flex-end"}} > 
                                   <div  style={{padding:"0 0.5rem"}}> TVL: $1,0008,430
                                        </div>
                                   </Grid>
                                   <hr color='white' style={{width:"98%"}} />
                              </Grid>
                              <Grid container style={{padding:"0.5rem"}}>
                                   <Grid sm={3}>
                                        <div>Daily Returns</div>
                                        <h4>2%</h4>
                                   </Grid>
                                   <Grid sm={3}>
                                        <div>Your Stake</div>
                                        <h4>124.21</h4>
                                        <div>=$1171.62</div>
                                   </Grid>
                                   <Grid sm={2}>
                                        <div>Earned</div>
                                        <h4>124.21</h4>
                                        <div>=$1171.62</div>
                                   </Grid>
                                   <Grid sm={4}>
                                        <div style={{width:"100%", display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                                        <Button variant='outlined' style={{width:"47%",  borderColor:"white"}}> Deposit</Button>
                                        <Button variant='outlined'  style={{width:"47%",  borderColor:"white"}}> Withdraw</Button>
                                        </div>
                                        <Button variant='outlined' 
     
                                         style={{width:"100%" , borderColor:"white" , marginTop:"0.5rem"}}
                                        > Claim Rewards</Button>
                                   </Grid>
                              </Grid>
                         </Paper>
                    </Grid>
                    <Grid container sm={4}>
                         <Paper style={{width:"100%", height:"100%", padding:"0.5rem"}}>
                         <h2>
                          Latest News
                         </h2>
                         </Paper>
                    </Grid>
                    

               </Grid>
               <Grid>
                    <Paper style={{ width:"100%", margin:"0 1rem 0.3rem 0"}}>
                         <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                         <div style={{padding:"0.5rem"}}>
                              <h2>Bomb Farms</h2>
                              <div style={{margin:"0", fontSize:"0.9rem"}}>Stake your LP tokens in our farms to start earning $BSHARE </div>
                         </div>
                         <Button
                         variant='outlined' style={{ borderColor:"white" ,marginRight:'0.5rem',  marginTop:"0.5rem"}}
                         > Claim All</Button>
                         </div>


                         <Box style={{margin:"0rem 1rem"}}>
                              <Grid container>
                                   <Grid sm={8}>
                                        <div style={{ width:"100%", display:"flex", alignItems:"center", gap:"5px", margin:"0.5rem"}}>
                                        <h3>BOMB-BTCB</h3>
                                             <span style={{padding:"3px", color:"white", background:"green", fontSize:"12px"}}>Recommanded</span>
                                        </div>
                                   </Grid>
                                   <Grid sm={4} style={{textAlign:"end", verticalAlign:"bottom", display:'flex', alignItems:"center", justifyContent:"flex-end"}} > 
                                   <div  style={{padding:"0 0.5rem"}}> TVL: $1,0008,430
                                        </div>
                                   </Grid>
                                   <hr color='white' style={{width:"98%"}} />
                              </Grid>
                              <Grid container style={{padding:"0.5rem"}}>
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
                                   <Grid sm={6} style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between"}} >
                                        <Button variant='outlined' style={{width:"20%",  borderColor:"white"}}> Deposit</Button>
                                        <Button variant='outlined'  style={{width:"20%",  borderColor:"white"}}> Withdraw</Button>
                                      
                                        <Button variant='outlined' 
     
                                         style={{width:"40%" , borderColor:"white" }}
                                        > Claim Rewards</Button>
                                   </Grid>
                              </Grid>
                         </Box>     
                            <Box style={{margin:"0rem 1rem"}}>
                              <Grid container>
                                     <Grid sm={8}>
                                        <div style={{ width:"100%", display:"flex", alignItems:"center", gap:"5px", margin:"0.5rem"}}>
                                        <h3>BSHARE-BNB</h3>
                                             <span style={{padding:"3px", color:"white", background:"green", fontSize:"12px"}}>Recommanded</span>
                                        </div>
                                   </Grid>
                                   <Grid sm={4} style={{textAlign:"end", verticalAlign:"bottom", display:'flex', alignItems:"flex-end", justifyContent:"flex-end"}} > 
                                   <div  style={{padding:"0 0.5rem"}}> TVL: $1,0008,430
                                        </div>
                                   </Grid>
                                   <hr color='white' style={{width:"98%"}} />
                              </Grid>
                              <Grid container style={{padding:"0.5rem"}}>
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
                                   <Grid sm={6} style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between"}} >
                                        <Button variant='outlined' style={{width:"20%",  borderColor:"white"}}> Deposit</Button>
                                        <Button variant='outlined'  style={{width:"20%",  borderColor:"white"}}> Withdraw</Button>
                                      
                                        <Button variant='outlined' 
     
                                         style={{width:"40%" , borderColor:"white" }}
                                        > Claim Rewards</Button>
                                   </Grid>
                              </Grid>
 
                         </Box>     
                    </Paper>
               </Grid>
               <Grid>
                    <Paper style={{ width:"100%", marginTop:"1rem"}}>
                         
                        <Grid sm={12} style={{padding:'0.5rem'}}>
                                        <div style={{ width:"100%", display:"flex", alignItems:"center", gap:"5px", margin:"0.5rem"}}>
                                        <h3>Bonds </h3>
                                        </div>
                                        <div style={{margin:"0 0.5rem", fontSize:"0.9rem"}}>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</div>
                                   </Grid>
                                   <Grid container style={{  display:"flex", alignItems:"center", padding:"1rem"}}>
                                        <Grid sm={3}>
                                             <div>Current Price (Bomb)^2</div>
                                             <h3>BBond = 6.2872 BTCB</h3>
                                        </Grid>
                                        <Grid sm={3}>
                                                <div>Available to redeem:</div>
                                                  <h3>456</h3>
                                        </Grid>
                                        <Grid sm={6}  >
                                             <div style={{width:"100%", display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                                  <div> 
                                                       <div>Purchase Bond</div>
                                                       <div>Bomb is over peg</div>
                                                  </div>
                                                  <Button variant='outlined'style={{ borderColor:"white",  width:"30%" }} >
                                                       Puchase
                                                  </Button>
                                             </div>
                                             <hr />
                                             <div style={{width:"100%", display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                                  <div>Redemm Bomb</div>
                                                    <Button variant='outlined'style={{ borderColor:"white" , width:"30%"}} >
                                                       Redeem
                                                  </Button>
                                             </div>

                                        </Grid>

                                   </Grid>

                    </Paper>
               </Grid>


          </Page>
     )
}


export default Dashboard