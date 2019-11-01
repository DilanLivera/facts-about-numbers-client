import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function LoginForm() {
  return (
    <Grid container justify='center'>
      <Grid item xs={12} md={4}>
        <Button variant='contained' color='primary' href='http://localhost:3000/api/login'>
          Login With GitHub
        </Button>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
