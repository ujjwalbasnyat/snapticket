import LoginForm from "./components/loginForm";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
<<<<<<< HEAD
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
=======
	return (
		<div className="flex my-10 justify-center items-center">
			<div className="bg-background flex  h-formheight w-formwidth rounded-md border">
				<div className="flex flex-col bg-primary items-center w-1/3 text-background h-full justify-center rounded-tl-md rounded-bl-md ">
					<p className="text-md font-semibold">SnapTicket</p>
					<p className=" font-normal">Your journey starts here</p>
				</div>
				<div className="m-10">
					<p className="font-semibold text-md ">Login</p>
					<div className="mt-5">
						<LoginForm />
						<div className="flex flex-col items-center gap-5 mt-5">
							<div className="justify-center items-center">
								<p className="">or</p>
							</div>
							<div className="flex gap-2 items-center">
								<FcGoogle />
								<a href="#" className="hover:text-primary hover:underline">
									Login with Google
								</a>
							</div>
							<p>
								Are you new?{" "}
								<a href="#" className="underline text-primary hover:text-hover">
									Create an Account
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
>>>>>>> 10327e3adc3ca4e1342f3d732f33fe86488e3fe9
}
