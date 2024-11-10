import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const Image = styled("img")({
  width: "100%",
});

export default function Loading() {
  return (
    <div>
      <Skeleton
        variant="rectangular"
        width="70%"
        height={"400px"}
        sx={{ margin: "40px auto " }}
      >
        <div style={{ paddingTop: "57%" }} />
      </Skeleton>
    </div>
  );
}
