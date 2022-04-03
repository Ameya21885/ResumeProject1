import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Search from "./Search";
import UserDetails from "./UserDetails";
import DataTable1 from "./DataTable1";
import Profile from "./Profile";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              border: "2px solid black",
              padding: "1%",
              backgroundColor: "#8abdc7",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Search" {...a11yProps(0)} />
              <Tab label="Customer Details" {...a11yProps(1)} />
              <Tab label="Customer Search" {...a11yProps(2)} />
              <Tab label="Profile" {...a11yProps(3)} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            {/* Item One */}
            <Search />
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* Item Two */}
            <UserDetails />
          </TabPanel>
          <TabPanel value={value} index={2}>
            {/* Item Fourth */}
            <DataTable1 />
          </TabPanel>
          <TabPanel value={value} index={3}>
            {/* Item Fifth */}
            <Profile />
          </TabPanel>
        </Box>
      </div>
    </>
  );
}
