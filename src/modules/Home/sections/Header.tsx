// import template from "./MohdFarmanParvez.pdf";
// import { getHeroDetailsAPI } from "../../../service/heroAPI";
import DownloadResume from "./DowloadResume";
import Image from "next/image";
import { backend_Url } from "@/utils/enviroment";

async function getHeroDetails() {
  const val = await fetch(`${backend_Url}/hero`, {
    next: { revalidate: 3600 },
  });
  const data = await val.json();
  // console.log(val?.json().then(res => console.log(res)));
  // const data = await getHeroDetailsAPI();
  return data?.details;
}

export default async function Header() {
  const heroDetails = await getHeroDetails();

  return (
    <div className="bg-[#000]" id="home">
      <div className="flex justify-center items-center min-h-[85dvh] max-sm:flex-col max-sm:min-h-[100%] max-sm:py-8 max-sm:pt-[90px]">
        <div className="w-[40%] max-sm:w-[90%] flex justify-center items-center ">
          <Image
            unoptimized
            priority
            src="/Coding.gif"
            alt=""
            width={0}
            height={0}
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div className="w-[40%] max-sm:w-[90%] flex items-center">
          <div>
            <h4 className="text-primary text-[25px]">{heroDetails?.name}</h4>
            <h1 className="text-[#fff] font-medium text-[50px]">
              {heroDetails.profileTitle}
            </h1>
            <p className="text-[#fff] mb-5">{heroDetails?.detail}</p>
            <DownloadResume />
          </div>
        </div>
      </div>
    </div>
  );
}
