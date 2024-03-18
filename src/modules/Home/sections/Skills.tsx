import { getSkillsAPI } from "@/service/skillsAPI";

async function getSkills() {
  const data = await getSkillsAPI();
  return data?.skills;
}

export default async function Skills() {
  const skills = await getSkills();

  type SkillsType = {
    _id: number,
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
              {/* <div className="inner-box">
                <p className="skills-heading-detail">{del.title}</p>
              </div> */}
              <div className="detail">
                <i className={del.icon}></i>
                <p className="skills-heading-detail">{del.title}</p>
                <p>{del.desc}</p>
              </div>
            </div>
          ))}
          {/* <div className="box">
                    <div className="inner-box">
                    <i class="fab fa-css3"></i>
                    </div>
                </div>
                <div className="box">
                    <div className="inner-box">
                    <i class="fab fa-js-square"></i>
                    </div>
                </div>
                <div className="box">
                    <div className="inner-box">
                    <i class="fab fa-react"></i>
                    </div>
                </div>
                <div className="box">
                    <div className="inner-box">
                    <i class="fab fa-java"></i>
                    </div>
                </div>
                <div className="box">
                    <div className="inner-box">
                    <i class="fab fa-python"></i>
                    </div>
                </div> */}
        </div>
      </div>
    </>
  );
}
