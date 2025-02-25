import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

import XIcon from "@mui/icons-material/X";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons"; // Import icons
import { Link } from "react-router-dom";
import cover from "../assets/cover.png";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  return (
    <div className="grid grid-cols-2 gap-4 container mx-auto items-center">
      <div className="grid text-center h-screen items-center border border-r-green-700">
        <img src={cover} alt="logo" className="mx-auto max-w-[18rem]" />
      </div>
      <section className="grid text-center h-screen items-center p-8">
        <div>
          <Typography variant="h3" color="green" className="mb-2">
            Create an account
          </Typography>
          <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
            Glad to see you here! Enter your details to create an account
          </Typography>
          <form action="#" className="mx-auto max-w-[24rem] text-left">
            <div className="mb-6">
              <label htmlFor="email">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-green-900"
                >
                  Full Name
                </Typography>
              </label>
              <div className="relative">
                <Input
                  id="name"
                  color="gray"
                  size="lg"
                  type="email"
                  name="name"
                  placeholder="Full Name"
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 pl-10"
                  labelProps={{
                    className: "hidden",
                  }}
                />
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-3 top-3 text-green-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Your Email
                </Typography>
              </label>

              <div className="relative">
                <Input
                  id="email"
                  color="gray"
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="name@mail.com"
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 pl-10"
                  labelProps={{
                    className: "hidden",
                  }}
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-3 top-3 text-green-500 "
                  size="lg"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="password">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Password
                </Typography>
              </label>
              <div className="relative">
                <Input
                  size="lg"
                  placeholder="********"
                  labelProps={{
                    className: "hidden",
                  }}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 pl-10"
                  type={passwordShown ? "text" : "password"}
                  icon={
                    <i onClick={togglePasswordVisiblity}>
                      {passwordShown ? (
                        <EyeIcon className="h-5 w-5" />
                      ) : (
                        <EyeSlashIcon className="h-5 w-5" />
                      )}
                    </i>
                  }
                />
                <FontAwesomeIcon
                  icon={faLock}
                  className="absolute left-3 top-3 text-green-500 "
                />
              </div>
            </div>
            <Button color="green" size="lg" className="mt-6" fullWidth>
              Create Account
            </Button>
            <div className="!mt-4 flex justify-end">
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                variant="small"
                className="font-medium"
                relative
              >
                Forgot password
              </Typography>
            </div>
            <Button
              variant="outlined"
              size="lg"
              className="mt-6 flex h-12 items-center justify-center gap-2"
              fullWidth
            >
              <img
                src={`https://www.material-tailwind.com/logos/logo-google.png`}
                alt="google"
                className="h-6 w-6"
              />{" "}
              sign Up with google
            </Button>
            <Button
              variant="outlined"
              size="lg"
              className="mt-6 flex h-12 items-center justify-center gap-2"
              fullWidth
            >
              <XIcon className="text-black text-2xl cursor-pointer" />
              sign Up with X
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="!mt-4 text-center font-normal mb-5"
            >
              Already have an account?
              {/* <a href="#" className="font-medium text-green-900 pl-2">
                Sign In
              </a> */}
              <Link to="/SignIn" className="font-medium text-green-900 pl-2">
                SignIn
              </Link>
            </Typography>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
