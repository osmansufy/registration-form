import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React from "react";

const Login = ({
  user,
  handleChange,
  values,
  handleMouseDownPassword,
  signInUser,
  handleClickShowPassword,
}) => {
  return (
    <div>
      <h3>Login Form</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          value={user.email}
          onChange={handleChange}
          //   className={clsx(classes.margin, classes.textField)}
          name="email"
          label="Username/Email"
        />
        <FormControl
        //   className={clsx(classes.margin, classes.textField)}
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            name="password"
            type={values.showPassword ? "text" : "password"}
            value={user.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword("password")}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          variant="contained"
          size="large"
          type="submit"
          color="secondary"
          type="submit"
          onClick={signInUser}
          //   className={classes.margin}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
