import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWith: 1200,
      margin: 'auto',
    },
    paper: {
      maxWith: 350,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }))

export default function CenteredGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Weather weather lang</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Weather weather lang</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Weather weather lang</Paper>
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