import React from "react";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button sx={{bgcolor:"#C3073F",color :"white"}}  onClick={() => loginWithRedirect()}>
      LogIn/ sign up
    </Button>
  );
};

export default LoginButton;
