import React, { useState } from "react";
import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Login from "./login";
import SignUp from "./signUp";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },

  inputField: {
    marginTop: theme.spacing(3),
  },
}));

const Registration = () => {
  const is_valid_email = (email) => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
  const classes = useStyles();
  const [user, setUser] = useState({
    newAccount: true,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    error: "",
  });
  const [values, setValues] = React.useState({
    showPassword: false,
    confirmPassword: false,
  });
  const [loading, setloading] = useState(false);
  const handleClickShowPassword = (change) => {
    if (change == "password") {
      setValues({ ...values, showPassword: !values.showPassword });
    } else if (change == "confirmPassword") {
      setValues({ ...values, confirmPassword: !values.confirmPassword });
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (e) => {
    const newUserInfo = {
      ...user,
    };
    //debugger;
    // perform validation
    let isValid = true;
    let formError = "";
    if (e.target.name === "email") {
      isValid = is_valid_email(e.target.value);
      if (!isValid) {
        formError = "Email Should be valid";
      } else {
        formError = "";
      }
    }
    if (e.target.name === "password") {
      isValid = e.target.value.length > 6;
      if (!isValid) {
        formError = "Password Should be more than  6 characters";
      } else {
        formError = "";
      }
    }
    if (e.target.name === "confirmPassword") {
      isValid = e.target.value === user.password;
      console.log(e.target.value, user.password, isValid);
      if (!isValid) {
        formError = "Password Should be match with confirm password";
      } else {
        formError = "";
      }
    }

    newUserInfo[e.target.name] = e.target.value;
    newUserInfo.isValid = isValid;
    newUserInfo.error = formError;
    setUser(newUserInfo);
  };

  const onSubmit = () => {
    console.log(user);
    if (user.newAccount) {
      const sendInfo = {
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.confirmPassword,
        phone: user.phone,
      };
      if (user.isValid) {
        setloading(true);
        axios
          .post(
            "https://backend.imentalhealth.net/api/register/student",
            sendInfo
          )
          .then((res) => {
            toast.success("Registration Successful", {
              position: toast.POSITION.TOP_RIGHT,
            });
            console.log(res);
            setloading(false);
          })
          .catch((err) => {
            console.log(sendInfo);
            console.log(err);
            toast.error("Registration Not completed", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setloading(false);
          });
      }
    }
  };
  const signUphandle = () => {
    console.log(user);
    setUser({ ...user, newAccount: !user.newAccount });
  };

  const signInUser = () => {
    const sendInfo = {
      email: user.email,
      password: user.password,
    };

    if (user.isValid) {
      setloading(true);
      axios
        .post("https://backend.imentalhealth.net/api/login/student", sendInfo)
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log(res);
          setloading(false);
        })
        .catch((err) => {
          console.log(sendInfo);
          console.log(err);
          toast.error("Login Not Successful", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setloading(false);
        });
    }
  };
  console.log(user);
  return (
    <div>
      <Container maxWidth="sm">
        <div className="signUp">
          {user?.newAccount ? (
            <SignUp
              user={user}
              handleChange={handleChange}
              values={values}
              handleMouseDownPassword={handleMouseDownPassword}
              onSubmit={onSubmit}
              handleClickShowPassword={handleClickShowPassword}
              loading={loading}
              classes={classes}
            />
          ) : (
            <Login
              user={user}
              handleChange={handleChange}
              values={values}
              handleMouseDownPassword={handleMouseDownPassword}
              signInUser={signInUser}
              handleClickShowPassword={handleClickShowPassword}
              loading={loading}
              classes={classes}
            />
          )}
          <h4 style={{ textAlign: "center" }}>
            {!user?.newAccount ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span>Do you have an account?</span>
                <a onClick={signUphandle} style={{ color: "#FF6E40" }}>
                  Create Account
                </a>
              </div>
            ) : (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span>Already have an account?</span>
                <a onClick={signUphandle} style={{ color: "#FF6E40" }}>
                  Login
                </a>
              </div>
            )}
          </h4>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
