import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Featured.module.css";

export default function Featured() {
    return (
        <div className={styles.featured}>
            <div className={styles.top}>
                <h4>Total Revenue</h4>
                <MoreVertIcon />
            </div>
            <div className={styles.progress}>
                <div>
                    <CircularProgressbar
                        value={75}
                        text={`75%`}
                        strokeWidth={5}
                    />
                </div>
            </div>
            <div className={styles.bottom}>
                <h4>Total sales made today</h4>
                <h2>$420</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, eos!
                </p>
                <div className={styles.summery}>
                    <div className={styles.item}>
                        <p>Target</p>
                        <div>
                            <ExpandMoreIcon />
                            <span>$18.4k</span>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <p>Last Week</p>
                        <div>
                            <KeyboardArrowUpIcon />
                            <span>$18.4k</span>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <p>Last Month</p>
                        <div>
                            <KeyboardArrowUpIcon />
                            <span>$18.4k</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
