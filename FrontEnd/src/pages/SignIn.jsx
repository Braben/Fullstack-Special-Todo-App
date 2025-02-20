import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Import icons

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import AppleIcon from "@mui/icons-material/Apple";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-green-400 to-yellow-500">
      <div className="bg-green-800 rounded-lg shadow-lg p-8 flex flex-row content-between gap-4">
        <div
          className="h-screen bg-cover w-[400px] bg-center rounded-l-lg"
          style={{ backgroundImage: "url('/signup.jpg')" }}
        >
          <h1 className="text-white text-3xl font-bold">Welcome!</h1>
        </div>

        {/* signup component */}
        <div className="bg-inherit text-white">
          <Card color="transparent" shadow={true} className="p-8 bg-white">
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <div className="relative">
                  <Input
                    size="lg"
                    placeholder="John Doe"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 pl-10"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faUser}
                    className="absolute left-3 top-3 text-gray-500"
                  />
                </div>

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <div className="relative">
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 pl-10"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-3 top-3 text-gray-500"
                  />
                </div>

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <div className="relative">
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 pl-10"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faLock}
                    className="absolute left-3 top-3 text-gray-500"
                  />
                </div>
              </div>

              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree to the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />

              <Button className="mt-6" fullWidth>
                Sign Up
              </Button>

              <div className="flex flex-col items-center justify-center gap-4 bg-light-green-700 p-4 mt-5 rounded-lg shadow-md">
                <Typography
                  color="white"
                  className="mt-4 text-center font-normal"
                >
                  Or sign up with
                </Typography>
                <div className="flex items-center justify-center gap-4">
                  <FacebookIcon className="text-white text-2xl cursor-pointer" />

                  <GoogleIcon className="text-white text-2xl cursor-pointer" />
                  <XIcon className="text-white text-2xl cursor-pointer" />
                  <AppleIcon className="text-white text-2xl cursor-pointer" />
                </div>
              </div>

              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a href="#" className="font-medium text-gray-900">
                  Sign In
                </a>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
