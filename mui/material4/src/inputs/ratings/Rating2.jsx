import { Rating, Typography } from "@mui/material";
import * as React from "react";

function Rating2() {
    return (
        <center>
            <div>
                <h1 style={{ color: "green" }}>GeeksforGeeks</h1>
                <h2>React MUI Rating input</h2>
            </div>
            <div style={{ width: "50%" }}>
                <Typography>Rate our course</Typography>
                <Rating name="rate" defaultValue={3} size="small" />
                <Typography>Rate our course</Typography>
                <Rating name="rate" defaultValue={3} />
                <Typography>Rate our course</Typography>
                <Rating name="rate" defaultValue={3} size="large" />
            </div>
        </center>
    );
}

export default Rating2;