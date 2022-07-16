import React from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import styles from "./Chart.module.css";

export default function Chart({ aspect }) {
    const data = [
        { month: "January", total: 2200 },
        { month: "February", total: 2100 },
        { month: "March", total: 1700 },
        { month: "April", total: 1200 },
        { month: "May", total: 2800 },
        { month: "June", total: 3000 },
    ];

    return (
        <div className={styles.chart}>
            <h4>Last 6 month (Revenue)</h4>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
