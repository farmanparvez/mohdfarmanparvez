import { getEducationAPI } from "@/service/eduactionAPI";
// import dayjs from "dayjs";

async function getEducation() {
  const data = await getEducationAPI();
  return data?.education;
}

export default async function Education() {
  const education = await getEducation();

  return (
    <>
      <div className="about-container" id="education">
        <div className="mid-container">
          <div className="col-2">
            <img src="./edu3.jpg" alt="" />
          </div>
          <div className="col-2">
            <h1>Educaton</h1>
            <h2>Hello I`m Mohd Farman Parvez</h2>
            {/* <div className="para">
              <h2>Degree</h2>
            </div> */}
            {/* 
            <div>btech</div>
            <div>institution</div>
            <div>aktu</div>
            <div style={{display: 'flex'}}>
            <div>from : </div>
            <div style={{paddingRight: '30px'}}> 01-02-2015</div>
            <div>to: </div>
            <div>01-02-2015</div>
            </div> */}
            <div gutter={[16, 24]}>
              {education.map((edu) => (
                <div key={edu._id} span={24}>
                  <div>
                    <div span={24}>{edu.degree}</div>
                    <div span={24}>{edu.institution}</div>
                    {/* <div span={24}>{dayjs(edu.to).format("YYYY")}</div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
