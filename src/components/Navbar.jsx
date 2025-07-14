import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { navbar } from "../constant/navbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import DrawerCom from "./DrawerCom";

function Navbar() {
  const [selectTab, setSelectTab] = useState(navbar[0].id);
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const changeTab = (id) => {
    setSelectTab(id);
  };

  return (
    <AppBar>
      <Box
        sx={{
          display: "flex",
          height: "90px",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#C62828",
        }}
      >
        <Box sx={{ height: "90px", width: "100px" }}>
          <img src="/images/logo.png" alt="" className=" h-full w-full " />
        </Box>

        {sm ? (
          <DrawerCom isOpen={isOpen} setIsOpen={setIsOpen} />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              textColor: "black",
            }}
          >
            <Tabs
              value={selectTab}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              sx={{
                "& .MuiTabs-flexContainer": {
                  gap: `${md ? "5px" : "60px"}`,
                },
              }}
            >
              {navbar.map((item) => (
                <Tab
                  value={item.id}
                  onClick={() => changeTab(item.id)}
                  label={<strong>{item.title}</strong>}
                  key={item.id}
                  sx={{
                    fontSize: `${md ? "15px" : "17px"}`,
                    "&.Mui-selected": {
                      color: "black",
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
        )}

        <Box sx={{ marginRight: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <i className="fa-solid fa-moon text-[22px] "></i>
            {sm ? (
              <i
                className="fa-solid fa-bars-staggered"
                onClick={() => setIsOpen(!isOpen)}
              ></i>
            ) : (
              <button className=" text-[18px] ">Login</button>
            )}
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Navbar;
