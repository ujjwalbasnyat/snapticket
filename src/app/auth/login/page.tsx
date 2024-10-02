import LoginForm from "./components/loginForm";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div>
      Welcome Login!.
      <LoginForm />
      <p>or</p>
      <div>
        <FcGoogle />
        <a href="#">Login with Google</a>
      </div>
      <p>
        Are you new? <a href="#">Create an Account</a>
      </p>
    </div>
  );
}
