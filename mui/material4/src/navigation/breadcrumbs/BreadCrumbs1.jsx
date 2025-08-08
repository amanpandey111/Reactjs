import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function BreadCrumbs1() {
    return (
        <div>
            <div style={{ textAlign: "center", 
                          color: "green" }}>
                <h1>GeeksforGeeks</h1>
                <h2>React MUI Breadcrumb Navigation</h2>
            </div>
            <div style={{ marginLeft: 40 }}>
                <div>
                    <Breadcrumbs aria-label="breadcrumb" 
                                 separator="›">
                        <Link underline="hover" 
                              color="inherit" 
                              href="/">
                            Home
                        </Link>
                        <Link underline="hover"
                              color="inherit"
                              href="/dsa/">
                            Data Structures
                        </Link>
                        <Link
                            underline="hover"
                            color="text.primary"
                            href="/dsa/array"
                            aria-current="page"
                        >
                            Array
                        </Link>
                    </Breadcrumbs>
                </div>
                <div>
                    <Breadcrumbs aria-label="breadcrumb" 
                                 separator="-">
                        <Link underline="hover"
                            color="inherit" href="/">
                            Home
                        </Link>
                        <Link underline="hover"
                            color="inherit" href="/dsa/">
                            Data Structures
                        </Link>
                        <Link
                            underline="hover"
                            color="text.primary"
                            href="/dsa/array"
                            aria-current="page"
                        >
                            Array
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumbs1;