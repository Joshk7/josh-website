"use client";

import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center space-x-4 pt-20 p-4">
        <Image
          src="/me3.jpg"
          alt="me"
          width={200}
          height={300}
          className="rounded-sm md:w-[300px]"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="p-8 text-4xl font-bold text-blue-900">
            My name is Joshua Kahlbaugh and this is my website!
          </h1>
          <p className="px-10 text-blue-950 text-lg">
            I recently graduated Summa Cum Laude from the University of St
            Thomas, in St Paul, MN, with a Bachelor's of Science degree in
            Computer Science and an additional Minor in Data Science. I have
            previous experience working as an Intern at SecretLab, LLC and on
            class projects similar to this website for Senior Capstone. I've
            always had a passion for solving problems and have recently been
            exploring{" "}
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

          <p className="p-10 text-blue-950 text-lg">
            Aside from technical skills, I'm a great team player and can
            effectively communicate within a group to resolve problems.
            Additionally, I've developed discipline from my hobby of working out
            which carries over to working on projects through the idea of always
            finding ways to make a project better no matter how small the
            improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
