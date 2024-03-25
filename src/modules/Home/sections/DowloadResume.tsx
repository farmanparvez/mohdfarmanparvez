"use client";
import { backend_Url } from "@/utils/enviroment";
import { getResumeAPI } from "../../../service/heroAPI";

export default function DowloadResume() {
  const downloadCv = async () => {
    const { resume } = await getResumeAPI();
    console.log(resume);
    console.log(`${backend_Url}/${resume[0]?.path}`, "dfdf");
    const link = document.createElement("a");
    link.href = `${backend_Url}/${resume[0]?.path}`;
    link.download = "templete.pdf";
    link.click();
  };
  return <button className="btn !mx-0" onClick={() => downloadCv()}>Download Cv</button>;
}
