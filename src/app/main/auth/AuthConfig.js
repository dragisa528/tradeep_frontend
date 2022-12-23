import ForgetPasswordConfig from "./forgetPassword/ForgetPasswordConfig";
import LoginConfig from "./login/LoginConfig";
import RegisterConfig from "./register/RegisterConfig";
import LogoutConfig from "./logout/LogoutConfig";
import ResetPasswordConfig from "./resetPassword/ResetPasswordConfig";

const authConfigs = [
  ForgetPasswordConfig,
  ResetPasswordConfig,
  LoginConfig,
  RegisterConfig,
  LogoutConfig,
];

export default authConfigs;
