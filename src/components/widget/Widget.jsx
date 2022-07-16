import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import React from "react";
import styles from "./Widget.module.css";

export default function Widget() {
    const data = [
        {
            title: "users",
            isMoney: false,
            link: "See all users",
            avatar: <PersonIcon />,
        },
        {
            title: "products",
            isMoney: false,
            link: "View all products",
            avatar: <ProductionQuantityLimitsIcon />,
        },
        {
            title: "earnings",
            isMoney: true,
            link: "View net earning",
            avatar: <AttachMoneyIcon />,
        },
        {
            title: "balance",
            isMoney: true,
            link: "See details",
            avatar: <AccountBalanceWalletIcon />,
        },
    ];

    return (
        <div className={styles.widget}>
            <div className={styles.items}>
                {data.map((item, i) => (
                    <div key={i} className={styles.item}>
                        <div className={styles.top}>
                            <h4>{item.title}</h4>
                            <div>
                                <KeyboardArrowUpIcon /> <span>20%</span>
                            </div>
                        </div>
                        <h3>{item.isMoney ? "100" : "$100"}</h3>
                        <div className={styles.bottom}>
                            <p>{item.link}</p>
                            {item.avatar}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
