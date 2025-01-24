import React, { Component } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true, // Tracks whether the form is in Login or Signup mode
    };
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
  };

  render() {
    const { isLogin } = this.state;
    
    // Styles for the box
    const boxStyles = {
      backgroundColor: 'lightblue',
      width: '25%',
      height: 'auto',
      marginTop: '100px',
      borderRadius: '10%',
      boxShadow: '5px 5px 10px rgb(54, 51, 51)',
      transform: 'translate(0px, 50px)',
      marginBottom: '15%',
      padding: '2%',
    };

    return (
      <Box sx={boxStyles}>
        <Button
          onClick={this.toggleForm}
          variant="text"
          color="primary"
          sx={{ mb: 2 }}
        >
          Switch to {isLogin ? 'Signup' : 'Login'}
        </Button>
        <Typography variant="h4" align="center" gutterBottom>
          {isLogin ? 'Login' : 'Signup'}
        </Typography>
        <form >
          {!isLogin && (
            <>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                name="name"
              />
              <TextField
                fullWidth
                label="Phone No."
                variant="outlined"
                margin="normal"
                name="phone"
              />
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                margin="normal"
                name="city"
              />
            </>
          )}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            name="email"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            name="password"
          />
          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 3 }}
            >
              {isLogin ? 'Login' : 'Signup'}
            </Button>
          </Box>
        </form>
      </Box>
    );
  }
}

export default Auth;
