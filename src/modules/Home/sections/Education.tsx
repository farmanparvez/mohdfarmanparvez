import { getEducationAPI } from "@/service/eduactionAPI";
import moment from "moment";

async function getEducation() {
  const data = await getEducationAPI();
  return data?.education;
}

export default async function Education() {
  const education = await getEducation();

  type educationType = {
    degree: string;
    institution: string;
    _id: string;
    to: string
  };

  return (
    <div className="education" id="education">
      <div className="max-w-[90%] flex justify-center mx-auto max-sm:flex-col max-sm:py-5">
        <div className="w-[50%] max-sm:w-[100%] flex justify-center items-center">
          <img className="max-w-[80%] max-h-[70%]" src="./edu3.jpg" alt="" />
        </div>
        <div className="w-[50%] max-sm:w-[100%]  text-start flex flex-col justify-center">
          <h1 className="text-[30px] font-semibold">Educaton</h1>
          <h2 className="text-[25px] capitalize text-primary">
            Hello I`m Mohd Farman Parvez
          </h2>
          <div>
            {education.map((edu: educationType) => (
              <div key={edu._id}>
                <div className="my-4">
                  <div className="font-semibold ">{edu.degree}</div>
                  <div>{edu.institution}</div>
                  <div>{moment(edu?.to).format("DD-MM-YYYY")}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}