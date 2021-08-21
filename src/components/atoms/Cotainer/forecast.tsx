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
    },
    paperSpacer: {
        height: 50,
        textAlign: 'center',
        color: theme.palette.text.secondary,     
      },
  }))

export default function CenteredGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root} >
         <Grid>
            <Paper className={classes.paperSpacer}> </Paper>
        </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={2}>Yesterday</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={2}>Today</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={2}>Tomorrow</Paper>
        </Grid>
      </Grid>
    </div>
  );
}