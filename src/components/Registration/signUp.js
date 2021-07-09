import React from "react";
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
import clsx from "clsx";
const SignUp = ({
  user,
  handleChange,
  values,
  handleMouseDownPassword,
  onSubmit,
  handleClickShowPassword,
  loading,
  classes,
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
          className={clsx(classes.inputField)}
        />
        <TextField
          value={user.email}
          onChange={handleChange}
          name="email"
          label="Email"
          className={clsx(classes.inputField)}
        />
        <TextField
          value={user.phone}
          onChange={handleChange}
          name="phone"
          label="phone"
          className={clsx(classes.inputField)}
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
        <FormControl className={clsx(classes.inputField)}>
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
          onClick={onSubmit}
        >
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            "Create an account"
          )}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
