import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ListTable from "../../components/table/Table";
import Userinfo from "../../components/userinfo/Userinfo";
import { useTheme } from "../../context/ThemeProvider";
import styles from "./Single.module.css";

export default function Single() {
    const { darkMode } = useTheme();

    return (
        <div className={`${styles.single} ${darkMode && styles.dark}`}>
            <Sidebar />
            <div className={styles.singleContainer}>
                <Navbar />
                <Userinfo />
                <ListTable title="last transactions" />
            </div>
        </div>
    );
}
