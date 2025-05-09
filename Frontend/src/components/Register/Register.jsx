import React, { useState } from "react";
import "../../styles/Login.css";
// Placeholder social icons (Replace with actual components)
import { useNavigate } from "react-router-dom";
import axios from "axios";
const GoogleIcon = () => <span className="googleimg"></span>;
const FacebookIcon = () => <span className="fbimg"></span>;
const StoreIcon = () => <span className="bimg"></span>;

const SocialButton = ({ icon, text }) => (
  <button className="flex items-center gap-10 p-3 w-full bg-white max-w-xs border border-gray-300 rounded-lg text-[#FA8128] transition">
    {icon} {text}
  </button>
);

const Register = () => {
  const navigate = useNavigate();
  const handletoLogin = () => {
    navigate("/"); // Ensure this matches your route setup
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleRegister = async (e) => {
      e.preventDefault(); 
    try {
      const response = await axios.post(
        "https://baggagebugs-81tp.onrender.com/api/v1/user/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      console.log("hello");
 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main h-screen flex w-full">
      {/* Left Section */}
      <div className="left w-[40%] h-screen bg-[#FA8128] flex items-center justify-center">
        <div className="logoimg"></div>
        <div className="globeimg opacity-45"></div>
      </div>

      {/* Right Section */}
      <div className="right w-[60%]  flex items-center justify-center">
        <div className="map">
          <form>
            <div className="up flex justify-between">
              <div className="cont flex gap-3 m-10">
                <h1 className="text-[#FA8128] font-medium text-4xl">Hello</h1>
              </div>
              <div className="crossimg m-10"></div>
            </div>

            <div className="cont flex-col">
              <h2 className="ml-11 -mt-8 font-extralight text-2xl text-[#28d3fa]">
                Register
              </h2>

              <div className="flex flex-col ml-10">
                <input
                  type="text"
                  placeholder="First Name"
                  // value={email}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full max-w-xs mt-2 p-3 border-2 border-[#5DCAD1] focus:outline-none focus:ring-2 focus:ring-[#F8934A] text-gray-600 placeholder-[#F8934A]/70"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  // value={email}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full max-w-xs mt-2 p-3 border-2 border-[#5DCAD1] focus:outline-none focus:ring-2 focus:ring-[#F8934A] text-gray-600 placeholder-[#F8934A]/70"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full max-w-xs mt-2 p-3 border-2 border-[#5DCAD1] focus:outline-none focus:ring-2 focus:ring-[#F8934A] text-gray-600 placeholder-[#F8934A]/70"
                />
                <input
                  type="password"
                  placeholder="Password"
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full max-w-xs mt-4 p-3 border-2 border-[#5DCAD1] focus:outline-none focus:ring-2 focus:ring-[#F8934A] text-gray-600 placeholder-[#F8934A]/70"
                />
              </div>
              <h2 className="ml-9 underline font-extralight mt-4 text-[#5DCAD1] cursor-pointer">
                Forgot password?
              </h2>

              <button
                type="submit"
                className="h-[50px] ml-28 border-[#FFA480] border-[6px] text-white rounded-3xl w-[200px] flex justify-center items-center bg-[#FA8128] mt-8 hover:bg-[#f77a20] transition"
                onClick={handleRegister}
              >
                Register
              </button>

              <div className="cont flex -ml-120 justify-center items-center mt-3 ">
                <h2 className="font-extralight text-[#5DCAD1]">
                  Already existing account?{" "}
                </h2>
                <h2
                  onClick={handletoLogin}
                  className="font-extralight underline text-[#FA8128] cursor-pointer"
                >
                  Login
                </h2>
              </div>

              <div className="otherlinks ml-11 mt-10 space-y-3">
                <SocialButton
                  icon={<GoogleIcon />}
                  text="Continue with Google"
                />
                <SocialButton
                  icon={<FacebookIcon />}
                  text="Continue with Facebook"
                />
                <SocialButton icon={<StoreIcon />} text="Store Baggage" />
              </div>
            </div>
          </form>
          <div className="cop ml-200 -mt-16"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
