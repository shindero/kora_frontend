import React from "react";

import { Box, Button, CircularProgress, styled, Typography } from "@mui/material";
import EmailInput from "components/inputs/EmailInput";
import InputUtil from "components/inputs/InputUtil";
import { Form } from "react-final-form";
import { ILoginValues } from "store/users/types";
import { useAppThunkDispatch } from "store/store";
import { login } from "store/users/actions";
import { toast } from "react-toastify";
import { Toast } from "components/others/Toast";
import { getErrorMessage } from "utils/error";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";

export const LoginForm = () => {
  const dispatch = useAppThunkDispatch();
  const navigate = useNavigate();

  const validate = (values: ILoginValues) => {
    const errors: ILoginValues = {
      email: "",
      password: "",
    };
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return Object.values(errors).filter(Boolean).length ? errors : {};
  };

  const onSubmit = async (values: ILoginValues) => {
    try {
      await dispatch(login(values)).unwrap();
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      toast.error(<Toast message={getErrorMessage(error)} />)
    }
  };
  return (
    <Box width="100%" maxWidth="30rem">
      <Typography fontSize="3rem" mb="1rem" align="center">
        Login
      </Typography>
      <Form
        validate={validate}
        validateOnBlur={false}
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, values }) => (
          <form
            style={{ width: "100%" }}
            onSubmit={handleSubmit}
            id="loginForm"
          >
            <Box display="flex" flexDirection="column" gap="1rem">
              <EmailInput disabled={submitting} id="login__email" />
              <InputUtil
                label="Password"
                id="password-input"
                name="password"
                type="password"
                disabled={submitting}
              />
              <Button
                disabled={submitting}
                color="primary"
                type="submit"
                variant="contained"
              >
                <Box gap="0.5rem" alignItems="center" display="flex">
                  <Typography>Login</Typography>
                  {submitting && <StyledLoader />}
                </Box>
              </Button>
            </Box>
          </form>
        )}
      ></Form>
    </Box>
  );
};

const StyledLoader = styled(CircularProgress)({
  width: '1rem !important',
  height: '1rem !important',
})