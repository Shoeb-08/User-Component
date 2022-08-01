import { Grid } from "@mui/material";
import React from "react";
import TextTypography from "../../atoms/TextTypography";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

type TradeTabsProps = {
  icon: React.ReactNode;
  name: string;
  ticker: string;
  price: string;
  change: string;
  marketCap: string;
  watch: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const TradeTabs = (props: TradeTabsProps) => {
  return (
    <div>
      <Grid container sx={props.style}>
        <Grid item>
          <TextTypography children={props.price} />
        </Grid>
        <Grid item>
          <TextTypography children={props.change} />
        </Grid>
        <Grid item>
          <TextTypography children={props.marketCap} />
        </Grid>
        <Grid item>{props.watch ? <StarIcon /> : <StarBorderIcon />}</Grid>
      </Grid>
    </div>
  );
};

export default TradeTabs;
