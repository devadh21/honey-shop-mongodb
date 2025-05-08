"use client";
import React from "react";
import { useRouter } from "next/navigation";

import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { useEffect, useState } from "react";
import { BuiltInProviderType } from "next-auth/providers/index";

export default function Login() {
  interface IFormData {
    email?: string;
    password?: string;
  }
  const router = useRouter();
  const [error, setError] = useState("");
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);
  const [formData, setFormData] = useState<IFormData | null>(null);


  // google provider
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    // credentials provider
    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const data = await signIn("credentials", {
          redirect: false,
          email: formData!.email,
          password:formData!.password,
        });
        data?.ok ? router.replace("/") : setError("Email or Password incorrect");
      } catch (er) {
        // setError(er);
        console.log(error);
      }
    };

  return (
    <div className="bg-bg-color2-light dark:bg-bg-color2 full-screen dark:text-color-text text-color-text-light full-screen ">
      <div className="container flex justify-center ">
        <div className="main_section_style">
          <div className=" dark:bg-bg-color bg-bg-color-light p-[35px] flex flex-col  justify-center gap-2  sm:flex-row   ">
            {/* ----------call me--------------- */}
            <div className="w-full p-5 flex justify-center items-center bg-[url('/img/login.jpg')] ">
              <p className=" font-bold text-[26px] capitalize ">
                Login to your account
              </p>

              {/* <Image src={hero} alt="About img" priority className="  " /> */}
            </div>
            {/* ----------form--------------- */}
            <div className="   w-full p-[35px]  bg-bg-color2-light dark:bg-bg-color2  ">
              <div className=" my-6 ">
                {error && (
                  <div className="text-red-500 p-2 text-center animate-bounce">
                    {error}
                  </div>
                )}
                <h1 className="style-h1 -mt-[12px] text-center ">Login </h1>
                <hr className="my-2 h-1  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-25 dark:opacity-100" />
              </div>
              <form
                  onSubmit={loginHandler}
                className="my-5"
              >
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    id="email_adress"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 focus:border peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email_adress"
                    className="peer-focus:font-medium absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0 peer-focus:text-color-text-light peer-focus:dark:text-color-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 focus:border peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0 peer-focus:text-color-text-light peer-focus:dark:text-color-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>

                <button type="submit" className="style-btn  ">
                  Login
                </button>
              </form>
              <div className="text-center">
                <span className=" bg-bg-color2-light dark:bg-bg-color2 absolute -mt-[14px]  px-2">
                  or
                </span>
                <hr className="my-2 h-1  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-25 dark:opacity-100" />
              </div>

              {providers?.google && (
                <button
                  className=" flex justify-center items-center gap-1 text-medium capitalize bg-bg-color-light dark:bg-bg-color hover:border-primary hover:border hover:shadow-sm hover:shadow-primary border p-4 w-full my-4  "
                  onClick={() => {
                    signIn(providers.google.id, {
                      callbackUrl: "/", // Redirect to home page after login
                    });
                  }}
                >
                  <span>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      viewBox="-3 0 262 262"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                    >
                      <path
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                        fill="#4285F4"
                      />
                      <path
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                        fill="#34A853"
                      />
                      <path
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                        fill="#FBBC05"
                      />
                      <path
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                        fill="#EB4335"
                      />
                    </svg>
                  </span>
                  <span className=" text-sm">Continue with Google</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
