import { Grid } from '@mui/material'
import React from 'react'
//import BooksThumbnail from '../../atoms/Booksthumbnails'
import TextTypography from '../../atoms/Typography'

interface BannerProps {
    text: React.ReactNode;
    style?: React.CSSProperties;
    src: string;
};

const Banner = (props: BannerProps) => {
  return (
    <div>
        <Grid container style={props.style}>
            <Grid item>
                <TextTypography variant='h3'>{props.text}</TextTypography>
            </Grid>
            <Grid item>
            </Grid>
        </Grid>
    </div>
  )
}

export default Banner