import React from "react";
import CreateForm from "../../components/form/Form";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useTheme } from "../../context/ThemeProvider";
import styles from "./New.module.css";

export default function New({ title, inputs }) {
    const { darkMode } = useTheme();

    return (
        <div className={`${styles.new} ${darkMode && styles.dark}`}>
            <Sidebar />
            <div className={styles.newContainer}>
                <Navbar />
                <CreateForm title={title} inputs={inputs} />
            </div>
        </div>
    );
}
