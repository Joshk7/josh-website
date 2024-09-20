"use client";

import Image from "next/image";

const Hobbies = () => {
  return (
    <div className="w-full relative">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col space-y-6 items-center justify-center p-4">
          <div className="flex items-center flex-row space-x-4 justify-center">
            <Image
              src="/beach.jpg"
              alt="beach"
              width={300}
              height={200}
              className="rounded-sm w-[100px] xs:w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]"
            />
            <p className="text-xl hidden lg:block text-blue-900 max-w-[90%] p-4">
              Since I have the privilege of living next to Lake Superior, I get
              to spend time next to water and the beauty that it offers. The
              picture on the left was taken at Brighton Beach on the North Shore
              of Lake Superior and the one on the right is a flower that was
              blooming at Leif Erickson a little further up the shore. There are
              beautiful sights all around Duluth.
            </p>
            <Image
              src="/flowers.jpg"
              alt="flowers"
              width={300}
              height={200}
              className="rounded-sm w-[100px] xs:w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]"
            />
          </div>

          <p className=" md:text-xl text-blue-900 lg:hidden max-w-[90%]">
            Since I have the privilege of living next to Lake Superior, I get to
            spend time next to water and the beauty that it offers. The picture
            on the left was taken at Brighton Beach on the North Shore of Lake
            Superior and the one on the right is a flower that was blooming at
            Leif Erickson a little further up the shore. There are beautiful
            sights all around Duluth.
          </p>

          <hr className="bg-blue-900 w-full h-2 rounded-full" />

          <div className="flex items-center flex-row space-x-4 justify-center">
            <Image
              src="/gym.jpg"
              alt="gym"
              width={300}
              height={200}
              className="rounded-sm w-[100px] xs:w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]"
            />
            <p className="text-xl hidden lg:block text-blue-900 max-w-[90%] p-4">
              Alongside spending time near the lake, Fishing and working out are
              some of my hobbies. I'm a firm believer that health is wealth and
              staying healthy is rewarding both mentally and physically. I enjoy
              fishing for similar reasons because it's a chance to relax and
              will always put me in a better mood.
            </p>
            <Image
              src="/fishing.jpg"
              alt="fishing"
              width={300}
              height={200}
              className="rounded-sm w-[100px] xs:w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]"
            />
          </div>

          <p className=" md:text-xl text-blue-900 lg:hidden max-w-[90%]">
            Alongside spending time near the lake, Fishing and working out are
            some of my hobbies. I'm a firm believer that health is wealth and
            staying healthy is rewarding both mentally and physically. I enjoy
            fishing for similar reasons because it's a chance to relax and will
            always put me in a better mood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
