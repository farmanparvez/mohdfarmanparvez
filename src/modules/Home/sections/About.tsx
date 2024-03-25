import Link from "next/link";
import { getAboutAPI } from "@/service/aboutAPI";
import { FaGithub } from "react-icons/fa";
import React from "react";

async function getAbout() {
  const data = await getAboutAPI();
  return data?.about;
}

export default async function About() {
  const about = await getAbout();

  type linkType = {
    link: string;
    icon: string;
    _id: string;
  };

  return (
    <div id="about">
      <div className="max-w-[90%] flex justify-between mx-auto max-lg:py-10 max-sm:flex-col">
        <div className="max-w-[50%] max-sm:max-w-[100%] flex justify-center items-center">
          <img className="max-w-[80%] max-h-[80%]" src="./3426526.jpg" alt="" />
        </div>
        <div className="max-w-[50%] max-sm:max-w-[100%]  text-start flex flex-col justify-center">
          <h1 className="text-[30px] font-semibold">About ME</h1>
          <h2 className="text-[25px] capitalize text-primary">
            {about[0]?.name}
          </h2>
          <div>
            <p>{about[0]?.description}</p>
          </div>
          <h3>{about[0]?.phoneNumber}</h3>
          <div className="about-link-icon">
            {about[0]?.links?.map((el: linkType) => (
              <div key={el?._id} className="my-[15px]">
                <div>
                  <i className={el.icon}></i>
                </div>
                <div>
                  <Link
                    className="text-primary"
                    href={`//${el.link}`}
                    target="_blank"
                  >
                    {el.link}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
