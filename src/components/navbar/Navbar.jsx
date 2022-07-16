import Brightness4Icon from "@mui/icons-material/Brightness4";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "../../context/ThemeProvider";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const { darkMode, dispatch } = useTheme();

    return (
        <div className={`${styles.navbar} ${darkMode && styles.dark}`}>
            <div className={styles.left}>
                <div className={styles.search}>
                    <input type="text" placeholder="Search..." />
                    <SearchIcon />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.items}>
                    <div>
                        <LanguageIcon />
                        <p>Language</p>
                    </div>
                    <div
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            dispatch({
                                type: "TOGGLE",
                            });
                        }}
                    >
                        <Brightness4Icon />
                    </div>
                    <div>
                        <FullscreenExitOutlinedIcon />
                    </div>
                    <Stack spacing={2} direction="row">
                        <Badge badgeContent={4} color="primary">
                            <NotificationsNoneIcon />
                        </Badge>
                        <Badge badgeContent={4} color="primary">
                            <ChatBubbleOutlineOutlinedIcon />
                        </Badge>
                    </Stack>
                </div>
            </div>
        </div>
    );
}
