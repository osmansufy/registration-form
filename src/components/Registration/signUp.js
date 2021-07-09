import React from "react";
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
const SignUp = ({
  user,
  handleChange,
  values,
  handleMouseDownPassword,
  onSubmit,
  handleClickShowPassword,
}) => {
  return (
    <div className="registration">
      <h3>Registration Form</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          value={user.name}
          onChange={handleChange}
          name="name"
          label="Name"
        />
        <TextField
          value={user.email}
          onChange={handleChange}
          name="email"
          label="Email"
        />
        <TextField
          value={user.phone}
          onChange={handleChange}
          name="phone"
          label="phone"
        />
        <FormControl>
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
        <FormControl>
          <InputLabel htmlFor="standard-adornment-password">
            Confirm Password
          </InputLabel>
          <Input
            name="confirmPassword"
            type={values.confirmPassword ? "text" : "password"}
            value={user.confirmPassword}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword("confirmPassword")}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.confirmPassword ? <Visibility /> : <VisibilityOff />}
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
          type="submit"
          onClick={onSubmit}
          // className={classes.margin}
        >
          Create an account
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
