import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";
import { userColumns, userRows } from "../../datatablesource";
import styles from "./datatable.module.css";

export default function DataTable() {
    const { darkMode } = useTheme();

    const location = useLocation();
    const path = location.pathname;
    const trimmed = location.pathname.replace("/", "");

    const actionColumn = [
        {
            feild: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className={styles.cellButton}>
                        <div className={styles.view}>View</div>
                        <div className={styles.delete}>Delete</div>
                    </div>
                );
            },
        },
    ];

    return (
        <div
            style={{ height: 400 }}
            className={`${styles.datatable} ${darkMode && styles.dark}`}
        >
            <Link to={`${path}/new`}>Create new {trimmed}</Link>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
