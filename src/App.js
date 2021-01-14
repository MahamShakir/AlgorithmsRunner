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
  let [logs, setLogs] = useState([]);
  let [onRun, setOnRun] = useState({"fn": () => alert("Please Select an Algorithm First")});
  let [output, setOutput] = useState();

  function flushLogs() {
    setLogs([]);
    setOutput();
  }

  function updateLogs(item) {
    setLogs(logs => [...logs, item]);
  }

  function updateRun(fn) {
    setOnRun({fn});
  }

  function handleRun() {
    onRun["fn"]();
  }

  function updateOutput(output) {
    setOutput(output);
  }

  return (
    <div style={{height: "100%"}}>
      <Grid container style={{height: "100%"}}>
        <Grid item xs={8} style={{textAlign: "center", padding: 20}}>
          <Typography variant="h2">Algorithms Project</Typography>
          <Button variant="contained" color="secondary" style={{float: "right"}} size="large" startIcon={<PlayCircleFilledWhiteIcon />} onClick={handleRun}>
            Run
          </Button>
          <div style={{clear: "both"}}></div>
          <br/><Divider /><br/>
          <VerticalTabs updateLogs={updateLogs} flushLogs={flushLogs} updateRun={updateRun} updateOutput={updateOutput} />
          <br/><Divider /><br/>
          <div style={{textAlign: "left"}}>
            <Typography variant="h5">Final Output:</Typography>
            <Typography>{output}</Typography>
          </div>
        </Grid>
        <Grid item xs={4} zeroMinWidth style={{padding: 20, backgroundColor: "#333", color: "#fff", whiteSpace: "nowrap", overflowX: "scroll", maxWidth: "100", maxHeight: "100%"}}>
          <Typography variant="h5">Logs..</Typography>
          {logs.map(log => <Typography style={{fontFamily: "Source Code Pro"}}>{log}</Typography>)}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
