import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AunthContext } from '../Auth/AuthProvider';

const AegAuth = () => {
    const {handleCreateUser,user,setuser,handleGoogleSignIn,handleupdateData} = useContext(AunthContext);
    console.log(handleCreateUser);

    function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const img = form.image.value;
        const password = form.password.value;
        console.log(name,email,img,password);
      
        handleCreateUser(email,password)
        .then(res => {
            console.log(res.user);
            alert("succes");
            const RegisteredUser = res.user;
              const profileData ={
           photoURL:img,
           displayName :name,
            
            };

            handleupdateData(RegisteredUser,profileData)
            .then(() =>{
              setuser({...RegisteredUser,...profileData})
            })
              .catch((error) =>{
                alert("not update")
              })
        })
        .catch((error) =>{
              console.error(error.message);
              alert("fuck")
        })
    }

    function googleSignIN(){
         handleGoogleSignIn()
         .then(res =>{
            console.log(res.user);
            alert("success");
            setuser(res.user);
         })
         .catch((error)=>{
            console.error(error.message);
            alert("fucked");
         })
    }

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
       Register for AI Model Inventory Manager
        </div>

        {/* Form */}
        <form 
        onSubmit={handleSubmit}
        className="mt-5">
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


          {/* Name */}
           <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="name"
            className="
              input input-bordered w-full
              bg-white
              rounded-2xl
              mt-4
              shadow-[0_10px_10px_-5px_#cff0ff]
              focus:outline-none focus:ring-2 focus:ring-cyan-500/70 focus:border-cyan-500
            "
          />


          {/* Img URL */}

            <input
            required
            type="url"
            name="image"
            id="Image URL"
            placeholder="Image URL"
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
          >
            Sign up
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
            onClick={googleSignIN}
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

            
          </div>
        </div>

        {/* Agreement link */}
      <NavLink to="/login">
          <span className="block text-center mt-4">
          <a className="text-sky-500 text-[9px] hover:underline" href="#">
           Already have an acount?Login
          </a>
        </span>
      </NavLink>
      </div>
    </div>
    );
};

export default AegAuth;