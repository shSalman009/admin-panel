import React from "react";
import DataTable from "../../components/datatable/DataTable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useTheme } from "../../context/ThemeProvider";
import styles from "./List.module.css";

export default function List() {
    const { darkMode } = useTheme();
    return (
        <div className={styles.list}>
            <Sidebar />
            <div
                className={`${styles.listContainer} ${darkMode && styles.dark}`}
            >
                <Navbar />
                <DataTable />
            </div>
        </div>
    );
}
