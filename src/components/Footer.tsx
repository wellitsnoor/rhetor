import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[5rem] bg-rhetor flex justify-between items-center px-5">
      <p className="text-sm md:text-base">
        © All rights reserved rhetor {new Date().getFullYear()}
      </p>

      <ul className="flex flex-row gap-4">
        <li className="underline cursor-pointer">
          <a href={`https://www.instagram.com/rhetor.in`} target="_blank">Instagram</a>
        </li>
        <li className="underline cursor-pointer">
          <a href={`https://www.linkedin.com/company/rhetor-in`} target="_blank">LinkedIn</a>
        </li>
        {/* <li className="underline cursor-pointer">
          <a href={``}>Twitter</a>
        </li> */}
      </ul>
    </div>
  );
}

// https://www.linkedin.com/in/ekta4sure/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BzeuP%2FP7LR6yjdXBjBOukVg%3D%3D
