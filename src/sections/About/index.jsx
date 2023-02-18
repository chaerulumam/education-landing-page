import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="About" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br /> best <span>online course</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            rerum ad ipsum est debitis impedit commodi vitae quam! Perspiciatis
            asperiores alias temporibus ex repellendus aspernatur nobis amet,
            quos cumque, quod pariatur blanditiis, rem quidem quas beatae.
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-Teal hover:text-Teal rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
