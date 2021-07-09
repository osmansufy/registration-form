import {
  Button,
  CircularProgress,
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
import clsx from "clsx";
const Login = ({
  user,
  handleChange,
  values,
  handleMouseDownPassword,
  signInUser,
  handleClickShowPassword,
  loading,
  classes,
}) => {
  return (
    <div>
      <h3>Login Form</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          value={user.email}
          onChange={handleChange}
          className={clsx(classes.inputField)}
          name="email"
          label="Email"
        />
        <FormControl className={clsx(classes.inputField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            name="password"
            type={values.showPassword ? "text" : "password"}
            value={user.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end" style={{ marginBottom: "10px" }}>
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
        {user.error ? (
          <p style={{ color: "red", fontWeight: "bold" }}>{user.error}</p>
        ) : (
          ""
        )}
        <Button
          variant="contained"
          size="large"
          type="submit"
          color="secondary"
          onClick={signInUser}
        >
          {loading ? <CircularProgress color="secondary" /> : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
