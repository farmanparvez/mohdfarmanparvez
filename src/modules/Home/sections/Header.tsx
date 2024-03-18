// import template from "./MohdFarmanParvez.pdf";
import { getHeroDetailsAPI, getResumeAPI } from "../../../service/heroAPI";
import Link from "next/link";
import DownloadResume from "./DowloadResume";

async function getHeroDetails() {
  const data = await getHeroDetailsAPI();
  return data?.details;
}

export default async function Header() {
  const heroDetails = await getHeroDetails();
  // console.log(heroDetails);

  // const exportData = () => {
  //   const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
  //     JSON.stringify(template)
  //   )}`;
  //   const link = document.createElement('a');
  //   link.href = jsonString;
  //   link.download = 'templete.pdf';
  //   link.click();
  // };

  return (
    <div className="container" id="home">
      <div className="row">
        <div className="col-1">
          <img src="Coding.gif" alt="" />
        </div>
        <div className="col-1">
          <div className="hero-heading">
            <h4>{heroDetails?.name}</h4>
            <h1 style={{ color: "#fff" }}>{heroDetails.profileTitle}</h1>
            <p>{heroDetails?.detail}</p>
            {/* <a href={template} className="btn">
              Download Cv
            </a> */}
            <DownloadResume />
          </div>
        </div>
      </div>
    </div>
  );
}
