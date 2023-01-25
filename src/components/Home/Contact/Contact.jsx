import React from "react";
import { MdEmail } from "react-icons/md";
import { BsPhoneFill, BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="py-10 bg-slate-400 md:px-10 xs:px-5">
      <div>
        <p className="text-3xl font-Sofia w-32 text-center pb-2 m-auto border-b-4 border-black">
          Contact
        </p>

        <div className="grid grid-cols-4">
          <div className="items-center justify-center   flex">
            <div className="text-6xl dark:text-white text-center">
              <MdEmail> </MdEmail>
            </div>
            <div className="dark:text-white font-semibold">
              <p className=" text-center">FahimsadnanDhaka@gmail.com</p>
              <p className=" text-center">Fahimsadnan71@gmail.com</p>
            </div>
          </div>
          <div className="items-center justify-center  text-center flex">
            <div className="text-5xl dark:text-white text-center">
              <BsPhoneFill></BsPhoneFill>
              
            </div>
            <div className="dark:text-white font-semibold text-base">
                <p className=" text-center">+880 1917423280</p>
              </div>
          </div>
          <div className="items-center justify-center  text-center flex">
            <AiFillInstagram></AiFillInstagram>
          </div>
          <div className="items-center justify-center  text-center flex">
            <AiFillGithub></AiFillGithub>
          </div>
          <div className="items-center justify-center  text-center flex">
            <BsFacebook></BsFacebook>
          </div>
          <div className="items-center justify-center  text-center flex">
            <BsLinkedin></BsLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
