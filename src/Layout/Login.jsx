import React from 'react';

const Login = () => {
    return (
         <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      {/* Card container (replicates gradient, radius, border, shadow) */}
      <div className="
        max-w-sm w-full
        rounded-[40px] p-6
        border-[5px] border-white
        shadow-[0_30px_30px_-20px_rgba(133,189,215,0.88)]
        bg-white
        bg-gradient-to-b from-white to-[#F4F7FB]
      ">
        {/* Heading */}
        <div className="text-center font-black text-3xl text-sky-600">
          Sign In
        </div>

        {/* Form */}
        <form className="mt-5">
          {/* Email */}
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="
              input input-bordered w-full
              bg-white
              rounded-2xl
              mt-4
              shadow-[0_10px_10px_-5px_#cff0ff]
              focus:outline-none focus:ring-2 focus:ring-cyan-500/70 focus:border-cyan-500
            "
          />

          {/* Password */}
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="
              input input-bordered w-full
              bg-white
              rounded-2xl
              mt-4
              shadow-[0_10px_10px_-5px_#cff0ff]
              focus:outline-none focus:ring-2 focus:ring-cyan-500/70 focus:border-cyan-500
            "
          />

          {/* Forgot password */}
          <span className="block mt-2 ml-2">
            <a className="text-[11px] text-sky-500 hover:underline" href="#">
              Forgot Password ?
            </a>
          </span>

          {/* Sign In button */}
          <button
            type="button"
            className="
              btn w-full mt-5
              rounded-2xl font-bold text-white
              border-0
              bg-[linear-gradient(45deg,rgb(16,137,211)_0%,rgb(18,177,209)_100%)]
              shadow-[0_20px_10px_-15px_rgba(133,189,215,0.88)]
              transition-transform duration-200 ease-in-out
              hover:scale-[1.03] hover:shadow-[0_23px_10px_-20px_rgba(133,189,215,0.88)]
              active:scale-95 active:shadow-[0_15px_10px_-10px_rgba(133,189,215,0.88)]
            "
          >
            Sign In
          </button>
        </form>

        {/* Social sign-in */}
        <div className="mt-6">
          <span className="block text-center text-[10px] text-neutral-400">
            Or Sign in with
          </span>

          <div className="mt-2 w-full flex justify-center gap-4">
            {/* Google */}
            <button
              type="button"
              aria-label="Sign in with Google"
              className="
                grid place-content-center
                w-10 aspect-square rounded-full
                border-[5px] border-white
                shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)]
                transition-transform duration-200 ease-in-out
                hover:scale-110 active:scale-90
                bg-[linear-gradient(45deg,#000_0%,#707070_100%)]
              "
            >
              <svg
                className="w-4 h-4 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </button>

            {/* Apple */}
            <button
              type="button"
              aria-label="Sign in with Apple"
              className="
                grid place-content-center
                w-10 aspect-square rounded-full
                border-[5px] border-white
                shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)]
                transition-transform duration-200 ease-in-out
                hover:scale-110 active:scale-90
                bg-[linear-gradient(45deg,#000_0%,#707070_100%)]
              "
            >
              <svg
                className="w-4 h-4 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
            </button>

            {/* Twitter / X */}
            <button
              type="button"
              aria-label="Sign in with X"
              className="
                grid place-content-center
                w-10 aspect-square rounded-full
                border-[5px] border-white
                shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)]
                transition-transform duration-200 ease-in-out
                hover:scale-110 active:scale-90
                bg-[linear-gradient(45deg,#000_0%,#707070_100%)]
              "
            >
              <svg
                className="w-4 h-4 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Agreement link */}
        <span className="block text-center mt-4">
          <a className="text-sky-500 text-[9px] hover:underline" href="#">
            Learn user licence agreement
          </a>
        </span>
      </div>
    </div>
    );
};

export default Login;