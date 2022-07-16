import { ThemeProvider } from "@emotion/react";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import {
    createTheme,
    IconButton,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../../context/ThemeProvider";
import styles from "./form.module.css";

export default function CreateForm({ title, inputs }) {
    const [file, setFile] = useState(null);

    const { darkMode } = useTheme();

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });
    const lightTheme = createTheme({
        palette: {
            mode: "light",
        },
    });

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <div className={styles.form}>
                <div className={styles.top}>
                    <h4>{title}</h4>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <div className={styles.imgWrapper}>
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfmvrE4fMo2cd8esc7mDZPtFSJThAujddMPkRtti1_ij6u-jp"
                                }
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <form>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                            >
                                <Typography>Image :</Typography>
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="label"
                                >
                                    <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                        onChange={(e) => {
                                            setFile(e.target.files[0]);
                                        }}
                                    />
                                    <DriveFileMoveIcon />
                                </IconButton>
                            </Stack>
                            {inputs.map((input) => (
                                <TextField
                                    key={input.id}
                                    id="standard-basic"
                                    label={input.label}
                                    variant="filled"
                                    placeholder={input.placeholder}
                                />
                            ))}
                        </form>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
