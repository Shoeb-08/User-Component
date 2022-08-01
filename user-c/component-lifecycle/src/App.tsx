import { Grid, Rating, Skeleton, TextField, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import Fields from './components/Inputs';
import background from "/home/shoebs/Desktop/user-story-components-master/component-lifecycle/src/photo/small-baby.jpeg"
function App() {
  return (
     
    <div className="App" >
      <Fields/>
      <Grid
      container
        sx={{
          marginTop: "0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
          alignContent: "right",
          gap: "0px",
      }}>
        <Skeleton
  sx={{ bgcolor: 'grey' }}
  variant="text"
  width={210}
  height={118}
  >  hi welcome</Skeleton>

      </Grid>
      </div>
      
    
  );
}

export default App;
