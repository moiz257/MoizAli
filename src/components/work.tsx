"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 
import Link from "next/link"; 

const projects = [
  {
    title: "ShopNest",
    year: "2022",
    description: "FRONT-END DEVELOPMENT",
    imgSrc: "/shop.png",
    link: "https://shop-nest-tau.vercel.app/", 
  },
  {
    title: "Blog Website",
    year: "2025",
    description: "FRONT-END DEVELOPMENT",
    imgSrc: "/blog.png",
    link: "https://tech-tales-six.vercel.app/", 
  },
  {
    title: "Furniro.io",
    year: "2024",
    description: "Ecommerce Website",
    imgSrc: "/furniro.png",
    link: "https://furniro-moizali.vercel.app/", 
  },

];

// Animation variants for heading, paragraph, and images
const headingVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};

// Image variant with fast and right-to-left motion
const imageVariant = {
  hidden: { opacity: 0, x: 150 }, 
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
  },
};

const MyWork = () => {
  return (
    <div className="max-w-7xl mx-auto bg-black text-white py-10 px-6">
      {/* Top Section */}
      <motion.div
        className="flex flex-col items-center mb-10"
        initial="hidden"
        animate="visible"
        variants={headingVariant}
      >
        <motion.h2 className="text-sm tracking-widest">WORKS</motion.h2>
        <motion.h1
          className="text-5xl font-bold text-center sm:text-left w-full mt-4 px-4 md:px-0"
          variants={headingVariant}
        >
          EXPLORE THE PROJECTS BELOW TO SEE HOW I BRING IDEAS TO LIFE THROUGH
          THOUGHTFUL DESIGN AND METICULOUS EXECUTION.
        </motion.h1>
      </motion.div>

      {/* Responsive Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link href={project.link} key={index} passHref>
            <motion.div
              className="relative group overflow-hidden"
              variants={imageVariant} 
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.div className="w-full h-96 relative">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-3xl font-bold">{project.title}</h2>
              </motion.div>
              <div className="absolute bottom-5 left-5 mb-5">
                <span className="text-white border border-white/40 px-3 py-1 rounded-full text-sm">
                  {project.description}
                </span>
              </div>
              <div className="absolute bottom-5 right-5 text-lg font-semibold mb-5">
                {project.year}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
