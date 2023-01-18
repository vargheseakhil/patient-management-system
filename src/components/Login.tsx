import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Avatar,
  Box,
  Container,
  createTheme,
  CssBaseline,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  Alert,
} from "@mui/material";
import { LoginResponse } from "../constants/typings";
import loginUser from "../services/login";
import { COMMON_ERROR, EMPTY_ERROR, LOGIN_LABEL, SIGN_IN_TITLE } from "../constants/strings";
import { Footer } from "./Footer";

const theme = createTheme();

export default function LoginContainer() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [userNameError, setUserNameError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const navigate = useNavigate();

  const validateLoginForm = (username: FormDataEntryValue | null, password: FormDataEntryValue | null) => {
    if(!username && !password) {
        setUserNameError(EMPTY_ERROR)
        setPasswordError(EMPTY_ERROR)
        return true;
    }
    if(!username) {
        setUserNameError(EMPTY_ERROR);
        return true;
    }
    if(!password) {
        setPasswordError(EMPTY_ERROR);
        return true;
    }
    return false;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage(null);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");
    if(validateLoginForm(username, password)) return;
    setLoading(true);
    loginUser(username, password)
      .then((res: LoginResponse) => {
        setLoading(false);
        if (res?.httpStatusCode === 401) {
          setErrorMessage(res?.errorMessage);
        } else {
          console.log(res.sessionToken);
          navigate("/");
        }
      })
      .catch(() => {
        setLoading(false);
        setErrorMessage(COMMON_ERROR);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {SIGN_IN_TITLE}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              helperText={userNameError}
              error={!!userNameError}
              onChange={() => setUserNameError('')}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              helperText={passwordError}
              error={!!passwordError}
              onChange={() => setPasswordError('')}
            />
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={loading}
            >
              {LOGIN_LABEL}
            </LoadingButton>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
