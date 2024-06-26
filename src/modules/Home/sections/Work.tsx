import { getWorkDetailsAPI } from "@/service/workAPI";
import WorkClient from "./work/WorkClient";

async function getWork() {
  const data = await getWorkDetailsAPI();
  return data?.work;
}

export type workDetailType = {
  name: string;
  _id: string;
  details: string;
  websiteLink: string;
  repoLink: string;
};

export default async function Work() {
  const workDetails = await getWork();

  return (
    <div className="work-container" id="work">
      <h1>Our Works</h1>
      <div className="small-container">
        {workDetails?.map((val: workDetailType) => (
          <div key={val._id} className="box work-box">
            <div>
              <p className="work-heading-detail">{val.name}</p>
            </div>
            <div>
              <WorkClient {...val} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
