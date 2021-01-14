import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import lcs from './algorithms/lcs';
import scs from './algorithms/scs';
import lis from './algorithms/lis';
import lvd from './algorithms/lvd';
import mcm from './algorithms/mcm';
import ks01 from './algorithms/ks01';
import partition from './algorithms/partition';
import rc from './algorithms/rc';
import coin from './algorithms/coin';
import wb from './algorithms/wb';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
  
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs({updateLogs, flushLogs, updateRun, updateOutput}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let [files, setFiles] = React.useState({});

  function updateFiles(algo) {
    for(let i = 0; i < 10; i++) {
      fetch(`/${algo}_input/${algo}-${i}.json`).then(res => {
        return res.json();
      }).then(data => {
        data = data.data;
        files[`${algo}-${i}.json`] = data;
        files = {...files};
        setFiles(files);
      }).catch(err => console.log(err));
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //update choose hua wa algo
    //get its input files
    //if newValue == 0
    files = [];
    updateFiles(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Longest Common Subsequence" {...a11yProps(0)} />
        <Tab style={{flex:3}} label="Shortest Common Supersequence" {...a11yProps(1)} />
        <Tab label="Longest Increasing Subsequence" {...a11yProps(2)} />
        <Tab label="The Levenshtein Distance" {...a11yProps(3)} />
        <Tab label="Matrix Chain Multiplication" {...a11yProps(4)} />
        <Tab label="0–1 Knapsack Problem" {...a11yProps(5)} />
        <Tab label="Partition Problem" {...a11yProps(6)} />
        <Tab label="Rod Cutting" {...a11yProps(7)} />
        <Tab label="Coin Change Problem" {...a11yProps(8)} />
        <Tab label="Word Break Problem" {...a11yProps(9)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <List component="nav" aria-label="select algorithm">
          {Object.keys(files).map(file => {
            return (
                <ListItem button onClick={() => {
                  let str1 = files[file][0];
                  let str2 = files[file][1];
                  flushLogs();
                  updateLogs("Selecting input...");
                  updateLogs(`String 1: ${str1}`);
                  updateLogs(`String 2: ${str2}`);
                  updateLogs("");
                  updateRun(() => lcs(str1, str2, updateLogs, updateOutput));
                }}>
                  <ListItemText primary={file} />
                </ListItem>
            );
          })}
        </List>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <List component="nav" aria-label="select algorithm">
          {Object.keys(files).map(file => {
            return (
                <ListItem button onClick={() => {
                  let str1 = files[file][0];
                  let str2 = files[file][1];
                  flushLogs();
                  updateLogs("Selecting input...");
                  updateLogs(`String 1: ${str1}`);
                  updateLogs(`String 2: ${str2}`);
                  updateLogs("");
                  updateRun(() => scs(str1, str2, updateLogs, updateOutput))
                }}>
                  <ListItemText primary={file} />
                </ListItem>
            );
          })}
        </List>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <List component="nav" aria-label="select algorithm">
          {Object.keys(files).map(file => {
            return (
                <ListItem button onClick={() => {
                  let arr = files[file];
                  flushLogs();
                  updateLogs("Selecting input...");
                  updateLogs(`Array: ${arr.join(",")}`);
                  updateLogs("");
                  updateRun(() => lis(arr, updateLogs, updateOutput))
                }}>
                  <ListItemText primary={file} />
                </ListItem>
            );
          })}
        </List>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <List component="nav" aria-label="select algorithm">
          {Object.keys(files).map(file => {
            return (
                <ListItem button onClick={() => {
                  let str1 = files[file][0];
                  let str2 = files[file][1];
                  flushLogs();
                  updateLogs("Selecting input...");
                  updateLogs(`String 1: ${str1}`);
                  updateLogs(`String 2: ${str2}`);
                  updateLogs("");
                  updateRun(() => lvd(str1, str2, updateLogs, updateOutput))
                }}>
                  <ListItemText primary={file} />
                </ListItem>
            );
          })}
        </List>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <List component="nav" aria-label="select algorithm">
          {Object.keys(files).map(file => {
            return (
                <ListItem button onClick={() => {
                  let arr = files[file];
                  flushLogs();
                  updateLogs("Selecting input...");
                  updateLogs(`Array: ${arr.join(",")}`);
                  updateLogs("");
                  updateRun(() => mcm(arr, updateLogs, updateOutput))
                }}>
                  <ListItemText primary={file} />
                </ListItem>
            );
          })}

        </List>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <List component="nav" aria-label="select algorithm">
          {Object.keys(files).map(file => {
            return (
                <ListItem button onClick={() => {
                  let {n, w, v, W} = files[file];
                  flushLogs();
                  updateLogs("Selecting input...");
                  updateLogs(`n: ${n}`);
                  updateLogs(`W: ${W}`);
                  updateLogs(`v: ${v.join(",")}`);
                  updateLogs(`w: ${w.join(",")}`);
                  updateLogs("");
                  updateRun(() => ks01(n, W, w, v, updateLogs, updateOutput))
                }}>
                  <ListItemText primary={file} />
                </ListItem>
            );
          })}
        </List>
      </TabPanel>

      <TabPanel value={value} index={6}>
        <List component="nav" aria-label="select algorithm">
          {Object.keys(files).map(file => {
            return (
                <ListItem button onClick={() => {
                  let arr = files[file];
                  flushLogs();
                  updateLogs("Selecting input...");
                  updateLogs(`Array: ${arr.join(",")}`);
                  updateLogs("");
                  updateRun(() => partition(arr, updateLogs, updateOutput))
                }}>
                  <ListItemText primary={file} />
                </ListItem>
            );
          })}
        </List>
      </TabPanel>

      <TabPanel value={value} index={7}>
        <List component="nav" aria-label="select algorithm">
          {Object.keys(files).map(file => {
            return (
                <ListItem button onClick={() => {
                  let {l, p, L} = files[file];
                  flushLogs();
                  updateLogs("Selecting input...");
                  updateLogs(`Rod length: ${L}`);
                  updateLogs(`prices: ${p.join(",")}`);
                  updateLogs(`lengths: ${l.join(",")}`);
                  updateLogs("");
                  updateRun(() => rc(p, L, updateLogs, updateOutput))
                }}>
                  <ListItemText primary={file} />
                </ListItem>
            );
          })}
        </List>
      </TabPanel>

      <TabPanel value={value} index={8}>
        <List component="nav" aria-label="select algorithm">
          {Object.keys(files).map(file => {
            return (
                <ListItem button onClick={() => {
                  let {coins, money} = files[file];
                  flushLogs();
                  updateLogs("Selecting input...");
                  updateLogs(`Available Coins: ${coins}`);
                  updateLogs(`Change Required: ${money}`);
                  updateLogs("");
                  updateRun(() => coin(coins, money, updateLogs, updateOutput))
                }}>
                  <ListItemText primary={file} />
                </ListItem>
            );
          })}
        </List>
      </TabPanel>

      <TabPanel value={value} index={9}>
        <List component="nav" aria-label="select algorithm">
          {Object.keys(files).map(file => {
            return (
                <ListItem button onClick={() => {
                  let {s, wordDict} = files[file];
                  flushLogs();
                  updateLogs("Selecting input...");
                  updateLogs(`Name: ${s}`);
                  updateLogs(`Dictionary: ${wordDict}`);
                  updateLogs("");
                  updateRun(() => wb(s, wordDict, updateLogs, updateOutput))
                }}>
                  <ListItemText primary={file} />
                </ListItem>
            );
          })}
        </List>
      </TabPanel>
    </div>
  );
}