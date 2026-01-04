import React, { useContext, useState } from 'react';
import { AunthContext } from '../Auth/AuthProvider';
import { NavLink, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Loader from '../Component/Loader';

const Login = () => {
  const { setUser, handleGoogleSignIn, handleSignIn } = useContext(AunthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = (email, password) => {
    const nextErrors = {};
    if (!email) nextErrors.email = "Email is required.";
    if (!password) nextErrors.password = "Password is required.";
    if (password && password.length < 6) nextErrors.password = "Password must be at least 6 characters.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!validate(email, password)) {
      setLoading(false);
      return;
    }

          handleSignIn(email, password)
      .then((res) => {
        if (res.user) {
          Swal.fire({
      position: "top-end",
            icon: "success",
            title: "Login Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
          setUser(res.user);
          setStatus("Signed in successfully.");
          setErrors({});
          if (location.state) {
            navigate(`${location.state}`);
            return <Loader />;
          } else {
            navigate("/");
            return <Loader />;
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login Fail.Recheck Your Info",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        setErrors({ general: error.message });
      })
      .finally(() => setLoading(false));
  }

     function googleSignIN() {
    setLoading(true);
    handleGoogleSignIn()
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        setUser(res.user);
        setStatus("Signed in successfully via Google.");
        setErrors({});
        if (location.state) {
          navigate(`${location.state}`);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login Fail.Recheck Your Info",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        setErrors({ general: error.message });
      })
      .finally(() => setLoading(false));
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-6 app-shell">
      {/* Card container (replicates gradient, radius, border, shadow) */}
        <div
        className="
        max-w-sm w-full
        rounded-[32px] p-6
        border border-[var(--card-border)]
        shadow-[0_30px_30px_-20px_rgba(133,189,215,0.88)]
        bg-[var(--card-bg)]
      "
      >
        {/* Heading */}
        <div className="text-center font-black text-3xl text-[var(--text-strong)]">
          Login to AI Model Inventory Manager
        </div>


  {status && (
          <div
            className="mt-4 p-3 rounded-xl border border-emerald-400/40 bg-emerald-500/10 text-emerald-400 text-sm"
            aria-live="polite"
          >
            {status}
          </div>
        )}
        {Object.values(errors).length > 0 && (
          <div
            className="mt-4 p-3 rounded-xl border border-red-400/40 bg-red-500/10 text-red-200 text-sm"
            aria-live="assertive"
          >
            {Object.values(errors)[0]}
          </div>
        )}
        {loading && (
          <div className="mt-4 space-y-2" aria-hidden="true">
            <div className="h-3 rounded-full skeleton"></div>
            <div className="h-3 rounded-full skeleton w-2/3"></div>
          </div>
        )}


        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5">
          {/* Email */}
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="
              input input-bordered w-full
                  bg-[color-mix(in_srgb,var(--card-bg)_90%,transparent)]
              rounded-2xl
              mt-4
              shadow-[0_10px_10px_-5px_#cff0ff]
              focus:outline-none focus:ring-2 focus:ring-cyan-500/70 focus:border-cyan-500 text-[var(--text-strong)]
            "
               aria-invalid={Boolean(errors.email)}
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
               bg-[color-mix(in_srgb,var(--card-bg)_90%,transparent)]
              rounded-2xl
              mt-4
              shadow-[0_10px_10px_-5px_#cff0ff]
              focus:outline-none focus:ring-2 focus:ring-cyan-500/70 focus:border-cyan-500 text-[var(--text-strong)]
            "
              aria-invalid={Boolean(errors.password)}
          />

          {/* Forgot password */}
          <span className="block mt-2 ml-2">
            <a className="text-[11px] text-sky-500 hover:underline" href="#">
              Forgot Password ?
            </a>
          </span>

          {/* Sign In button */}
          <button
            type="submit"
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
               disabled={loading}
          >
              {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Social sign-in */}
        <div className="mt-6">
          <span className="block text-center text-[10px] text-soft">
            Or Sign in with
          </span>

          <div className="mt-2 w-full flex justify-center gap-4">
            {/* Google */}
            <button
            onClick={googleSignIN}
              type="button"
              aria-label="Sign in with Google"
              className="
                grid place-content-center
                w-10 aspect-square rounded-full
                     border-[5px] border-[var(--card-border)]
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

          

           
          </div>
        </div>

        {/* Agreement link */}
        <span className="block text-center mt-4">
         <NavLink to="/register" className="text-sky-500 text-[11px] hover:underline">
            New?Sign up
         </NavLink>
        </span>
      </div>
    </div>
    );
};

export default Login;