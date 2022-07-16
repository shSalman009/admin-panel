import React from "react";
import Chart from "../chart/Chart";
import styles from "./userinfo.module.css";

export default function Userinfo() {
    return (
        <div className={styles.userinfo}>
            <div className={styles.left}>
                <h4>user information</h4>
                <div className={styles.leftBody}>
                    <div className={styles.imgWrapper}>
                        <img
                            src="https://images.assetsdelivery.com/compings_v2/metelsky/metelsky1809/metelsky180900220.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.information}>
                        <h2>Jhon Snow</h2>
                        <div>
                            <span>Email</span>
                            <p>jhon@gmail.com</p>
                        </div>
                        <div>
                            <span>Phone</span>
                            <p>+23454354235</p>
                        </div>
                        <div>
                            <span>Address</span>
                            <p>H-Road 33434</p>
                        </div>
                        <div>
                            <span>Country</span>
                            <p>Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>

            <Chart aspect={4 / 1} />
        </div>
    );
}
