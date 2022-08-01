import { Grid } from "@mui/material";
import React from "react";
import TextTypography from "../../atoms/TextTypography";

export interface WalletTransactionProps {
  date: string;
  icon: object[];
  coinName: string;
  sender: string;
  transactionStatus: boolean;
  transactionType: boolean;
  amount: string;
  style?: React.CSSProperties;
}

const WalletTransaction = (props: WalletTransactionProps) => {
  return (
    <div>
      <Grid container sx={props.style}>
        <Grid item>
          <>
            <TextTypography>{props.date}</TextTypography>
            {props.transactionStatus ? props.icon[0] : props.icon[1]}
          </>
        </Grid>
        <Grid item direction={"column"}>
          <TextTypography>{props.coinName}</TextTypography>
          <Grid item>
            b <TextTypography>{props.sender}</TextTypography>
          </Grid>
        </Grid>
        <Grid item direction={"column"}>
          <TextTypography>{props.amount}</TextTypography>
        </Grid>
      </Grid>
    </div>
  );
};

export default WalletTransaction;
