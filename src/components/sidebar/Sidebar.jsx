import { ThemeProvider } from "@emotion/react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import StoreIcon from "@mui/icons-material/Store";
import { createTheme, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
    const { dispatch, darkMode } = useTheme();

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });
    const lightTheme = createTheme({
        palette: {
            mode: "light",
        },
    });

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <div className={`${styles.sidebar} ${darkMode && styles.dark}`}>
                <Typography variant="h5" sx={{ mx: "16px", mt: "10px" }}>
                    Admin Panel
                </Typography>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 200,
                        bgcolor: "background.paper",
                    }}
                >
                    <ListSubheader component="div" id="nested-list-subheader">
                        MAIN
                    </ListSubheader>
                    <Link to="/">
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </Link>
                    <ListSubheader component="div" id="nested-list-subheader">
                        LISTS
                    </ListSubheader>

                    <Link to="/users">
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonOutlineIcon />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItemButton>
                    </Link>
                    <Link to="/products">
                        <ListItemButton>
                            <ListItemIcon>
                                <StoreIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItemButton>
                    </Link>

                    <ListItemButton>
                        <ListItemIcon>
                            <CreditCardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <LocalShippingIcon />
                        </ListItemIcon>
                        <ListItemText primary="Delivery" />
                    </ListItemButton>

                    <ListSubheader component="div" id="nested-list-subheader">
                        USEFUL
                    </ListSubheader>

                    <ListItemButton>
                        <ListItemIcon>
                            <InsertChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Statu" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <NotificationsNoneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notification" />
                    </ListItemButton>

                    <ListSubheader component="div" id="nested-list-subheader">
                        SERVICE
                    </ListSubheader>

                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsSystemDaydreamOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="System Health" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <PsychologyOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logs" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsApplicationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Setting" />
                    </ListItemButton>

                    <ListSubheader component="div" id="nested-list-subheader">
                        USERS
                    </ListSubheader>

                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </List>
                <div className={styles.bottom}>
                    <div
                        className={styles.light}
                        onClick={() => {
                            dispatch({ type: "LIGHT" });
                        }}
                    ></div>
                    <div
                        onClick={() => {
                            dispatch({ type: "DARK" });
                        }}
                        className={styles.dark}
                    ></div>
                </div>
            </div>
        </ThemeProvider>
    );
}
