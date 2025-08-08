import { Rating, Typography } from "@mui/material";
import * as React from "react";

function Rating1() {
    return (
        <center>
            <div>
                <h1 style={{ color: "green" }}>GeeksforGeeks</h1>
                <h2>React MUI Rating input</h2>
            </div>
            <div style={{ width: "50%" }}>
                <Typography>Rate our course</Typography>
                <Rating name="half" defaultValue={3.5} 
                        precision={0.5} size="large" />
            </div>
        </center>
    );
}

export default Rating1;