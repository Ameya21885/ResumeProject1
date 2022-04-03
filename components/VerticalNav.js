import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Form from "./Form"

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 600,
        width: "160%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          border: "2px solid black",
          backgroundColor: "aliceblue",
        }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        {/* Item one */}
        <Two />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Item Two */}
        <Three />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Item Three */}
        <Five heading="Enter the text to analyze below" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
        <Form/>
      </TabPanel>
    </Box>
  );
}
