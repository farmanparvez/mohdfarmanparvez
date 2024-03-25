import { getSkillsAPI } from "@/service/skillsAPI";

async function getSkills() {
  const data = await getSkillsAPI();
  return data?.skills;
}

export default async function Skills() {
  const skills = await getSkills();

  type SkillsType = {
    _id: string,
    title: string,
    icon: string,
    desc: string
  };

  return (
    <>
      <div className="shills-container" id="skills">
        <h1>Skills</h1>
        <div className="small-container">
          {skills?.map((del: SkillsType) => (
            <div key={del._id} className="box">
              <div className="detail">
                <i className={del.icon}></i>
                <p className="skills-heading-detail">{del.title}</p>
                <p>{del.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
