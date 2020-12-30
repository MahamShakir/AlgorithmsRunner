import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


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
  
  export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
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
          <Tab label="Shortest Common Supersequence" {...a11yProps(1)} />
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
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={7}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={8}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={9}>
          Item Seven
        </TabPanel>
      </div>
    );
  }