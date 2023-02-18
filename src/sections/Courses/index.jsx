import React from "react";
import { CategoryItem, CourseItem } from "../../components";
import { courses, categories } from "../../Data";
import { motion } from "framer-motion";

const Courses = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-Teal">Categories</span>
        </div>
        <p className="text-sm text-gray leading-7 msx-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et fuga
          esse soluta enim, ea cupiditate fugiat omnis porro molestiae eveniet a
          architecto sit voluptatum iusto odio maiores labore nesciunt impedit,
          ipsam voluptates vel. Officia cupiditate voluptatibus omnis illo?
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <CategoryItem key={category.id} {...category} />;
        })}
      </motion.div>
      <div className="text-xl font-bold mt-32">Most Popular Courses</div>
      <div className="mt-12 overflow-x-hidden w-full relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <CourseItem key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
