import React, { useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import VerticalTabs from './VerticalTabs';
import Table from './Table';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

function App() {
  return (
    <div style={{height: "100%"}}>
      <Grid container style={{height: "100%"}}>
        <Grid item xs={8} style={{textAlign: "center", padding: 20}}>
          <Typography variant="h2">Algorithms Project</Typography>
          <Button variant="contained" color="secondary" style={{float: "right"}} size="large" startIcon={<PlayCircleFilledWhiteIcon />}>
            Run
          </Button>
          <div style={{clear: "both"}}></div>
          <br/><Divider /><br/>
          <VerticalTabs />
          <br/><Divider /><br/>
          <div style={{textAlign: "left"}}>
            <Typography variant="h6">Final Output:</Typography>
          </div>
        </Grid>
        <Grid item xs={4} style={{padding: 20, backgroundColor: "#333", color: "#fff"}}>
          <Typography variant="h4">Logs</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
