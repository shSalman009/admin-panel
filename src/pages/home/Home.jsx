import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ListTable from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import { useTheme } from "../../context/ThemeProvider";
import styles from "./Home.module.css";
export default function Home() {
    const { darkMode } = useTheme();

    return (
        <div className={`${styles.home} ${darkMode && styles.dark}`}>
            <Sidebar />
            <div className={styles.right}>
                <Navbar />
                <Widget />
                <div className={styles.wrightBottom}>
                    <Featured />
                    <Chart aspect={2 / 1} />
                </div>
                <div className={styles.listContainer}>
                    <ListTable title="latest transactions" />
                </div>
            </div>
        </div>
    );
}
