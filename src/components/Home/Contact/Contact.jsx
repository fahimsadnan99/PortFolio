import React from "react";
import { MdEmail } from "react-icons/md";
import { BsPhoneFill, BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="py-10  md:px-10 xs:px-5 dark:bg-darkColor" id="Contact">
      <div>
        <p className="text-3xl font-Sofia w-32 text-center pb-2 m-auto border-b-4 border-black font-semibold dark:text-white dark:border-white">
          Contact
        </p>

        <div className=" sm:flex items-center justify-around py-5">
          <div className="dark:bg-white bg-slate-400  shadow-lg p-3 rounded-lg ">
            <div
              className="text-6xl  text-center 
   dark:text-black text-gray-200 "
            >
              <MdEmail className="mx-auto shadow-md rounded-lg"> </MdEmail>
            </div>
            <div className="dark:text-white font-semibold pt-2">
              <p className=" text-center text-lime-50 dark:text-black">FahimsadnanDhaka@gmail.com</p>
              <p className=" text-center text-lime-50 dark:text-black">Fahimsadnan71@gmail.com</p>
            </div>
          </div>

          <div className="xs:my-6 sm:my-0 dark:bg-white bg-slate-400  shadow-lg p-3 rounded-lg ">
            <div
              className="text-6xl  text-center 
   dark:text-black text-gray-200 "
            >
              <BsPhoneFill className="mx-auto shadow-md rounded-lg"> </BsPhoneFill>
            </div>
            <div className="dark:text-white font-semibold pt-2">
              <p className=" text-center text-lime-50  dark:text-black">+880 1917423280</p>
              <p className=" text-center text-lime-50  dark:text-black">+880 1615006587</p>
            </div>
          </div>


          <div className="dark:bg-white bg-slate-400  shadow-lg p-3 rounded-lg ">
            <div
              className="text-2xl  text-center 
   dark:text-black text-gray-200 "
   
            >
              <a href="https://github.com/fahimsadnan99" > <AiFillGithub className="mx-auto text-3xl shadow-md rounded-lg hover:text-red-600 duration-300"> </AiFillGithub></a>
             
             <a href="https://www.linkedin.com/in/fahim-sadnan-8548a1191/" > <BsLinkedin className="mx-auto text-3xl my-3 shadow-md rounded-lg hover:text-red-600 duration-300"> </BsLinkedin></a>

<a href="https://www.facebook.com/fahim.sadnan2/">
              <BsFacebook className="mx-auto text-3xl shadow-md rounded-lg hover:text-red-600 duration-300"> </BsFacebook>
              </a>
            </div>


           

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

//What is event loop in javascript?



{
  /* <div className="grid grid-cols-4">
<div className="items-center justify-center   flex">
  <div className="text-6xl dark:text-white text-center bg-w
   shadow-lg p-3 text-black">
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
</div> */
}
