import Link from "next/link";
import { getAboutAPI } from "@/service/aboutAPI";

async function getAbout() {
  const data = await getAboutAPI();
  return data?.about;
}

export default async function About() {
  const about = await getAbout();

  return (
    <>
      <div id="about">
        <div className="max-w-[90%] flex justify-between mx-auto" >
          <div className="max-w-[50%]">
            <img className="max-w-[100%] max-h-[100%]" src="./3426526.jpg" alt="" />
          </div>
          <div className="max-w-[50%] text-start">
            <h1>About ME</h1>
            <h2 className="about-name">{about[0]?.name}</h2>
            <div>
              <p>{about[0]?.description}</p>
            </div>
            <h3>{about[0]?.phoneNumber}</h3>

            <div className="about-link-icon">
              {about[0]?.links?.map((el) => (
                <div
                  gutter={[16, 24]}
                  align="middle"
                  style={{ marginTop: "15px", marginBotton: "15px" }}
                >
                  <div>
                    <i className={el.icon}></i>
                  </div>
                  <div>
                    <Link href={`//${el.link}`} target="_blank">
                      {el.link}
                    </Link>
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
// import Link from "next/link";
// import { getAboutAPI } from "@/service/aboutAPI";

// async function getAbout() {
//   const data = await getAboutAPI();
//   return data?.about;
// }

// export default async function About() {
//   const about = await getAbout();

//   return (
//     <>
//       <div className="about-container" id="about">
//         <div className="mid-container">
//           <div className="col-2">
//             <img src="./3426526.jpg" alt="" />
//           </div>
//           <div className="col-2">
//             <h1>About ME</h1>
//             <h2 className="about-name">{about[0]?.name}</h2>
//             <div>
//               <p>{about[0]?.description}</p>
//             </div>
//             <h3>{about[0]?.phoneNumber}</h3>

//             <div className="about-link-icon">
//               {about[0]?.links?.map((el) => (
//                 <div
//                   gutter={[16, 24]}
//                   align="middle"
//                   style={{ marginTop: "15px", marginBotton: "15px" }}
//                 >
//                   <div>
//                     <i className={el.icon}></i>
//                   </div>
//                   <div>
//                     <Link href={`//${el.link}`} target="_blank">
//                       {el.link}
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
