"use client";

import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full flex flex-col md:flex-row items-center space-x-4 p-4 m-auto">
        <Image
          src="/me.jpg"
          alt="me"
          width={200}
          height={300}
          className="rounded-sm md:w-[300px]"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="p-8 text-4xl text-center font-bold text-blue-900">
            Welcome to my website!
          </h1>
          <p className="px-10 text-blue-950 text-lg">
            I recently graduated Summa Cum Laude from the University of St
            Thomas, in St Paul, MN, with a Bachelor's of Science degree in
            Computer Science and an additional Minor in Data Science. I have
            previous experience working as an Intern at SecretLab, LLC and on
            class projects similar to this website for a Senior Capstone
            project. I've always had a passion for solving problems and have
            recently been exploring{" "}
            <a
              href="https://leetcode.com/u/JoshK7"
              className="text-blue-500 hover:text-blue-700 underline font-semibold"
            >
              LeetCode
            </a>{" "}
            as a way to sharpen my programming skills. I'm also proficient with
            JavaScript, TypeScript, Next JS, and Tailwind CSS which are all
            tools that I used to create this website. You can also check out my{" "}
            <a
              href="https://github.com/Joshk7"
              className="text-blue-500 hover:text-blue-700 underline font-semibold"
            >
              GitHub
            </a>{" "}
            to look at more projects that I've worked on!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
