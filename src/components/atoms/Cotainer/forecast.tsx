import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 1200,
      margin: 'auto',
    },
    paper: {
      height: 200,
      padding: theme.spacing(10),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      variant: "h3",
          
    },
  }))

export default function CenteredGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Yesterday</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Today</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Tomorrow</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles((theme: Theme) =>  ({
//       root: {
//       flexWrap: 1,
//       margin: 'auto',
//       maxWidth: 1200,
      
//     }
//     paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//             },
//       }))

// export default function CenteredGrid() {
//   const classes = useStyles()

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>Weather weather lang</Paper>
//       <Paper className={classes.paper}>Weather weather lang</Paper>
//       <Paper className={classes.paper}>Weather weather lang</Paper> 
//     </div>
//   );
// }