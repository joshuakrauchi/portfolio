"use client"

import Cat from '../components/Cat';
import ContactButton from "../components/ContactButton";
import '../styling/cat.scss';
import "animate.css"
import Image from "next/image";
import profileBlurb from "../profileBlurb";

const Home = ({ mousePosition }) => {
  return (
    <>
      <div className="mt-16 flex flex-col lg:flex-row">
        <Image className="object-scale-down flex m-auto animate__animated animate__fadeInLeft" style={{ animationDelay: 400 + "ms" }} src={"/profilePhoto.png"} width={200} height={0} alt="Profile photo" />
        <div className="w-full">
          <div className="flex flex-row">
            <div className="ml-6">
              <h1 className="animate__animated animate__fadeInUp text-6xl">
                Joshua Krauchi
              </h1>
              <p className="whitespace-pre-line mr-16 animate__animated animate__fadeInUp" style={{ animationDelay: 400 + "ms" }}>
                {profileBlurb}
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/3 flex flex-col w-full pt-16">
          <div>
            <Cat mousePosition={mousePosition} />
          </div>
          <div className="flex justify-between mb-10">
            <ContactButton imageSource={"emailIcon.svg"} animationDelay={300} size={50} address="mailto:joshuakrauchi@gmail.com" />
            <ContactButton imageSource={"LinkedInIcon.svg"} animationDelay={400} size={40} address="https://www.linkedin.com/in/joshua-krauchi/" />
            <ContactButton imageSource={"GitHubIcon.svg"} animationDelay={500} size={50} address="https://github.com/joshuakrauchi/" />
          </div>
        </div>
      </div>
    </>
  );

}

export default Home;
