import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
// import { ScrollLink } from "@/Components/ui";

const Navber = () => {
  return (
    <div className="navber">
      <nav>
        <h1 className="logo">{"<Code>"}</h1>
        <div className="left">
          <ul className={false ? "nav ul mobile" : "nav ul"}>
            <li>
            <li>Home</li> 
            </li>
            <li>
              <div>skills</div>
            </li>
            <li>
              <div>work</div>
            </li>
            <li>
              <div>about</div>
            </li>
            <li>
              <div>Eduction</div>
            </li>
          </ul>
        </div>
        <div className="right">
          {/* <Link href="/login" className="btn">Login</Link> */}
          {/* <Link href="" className="btn">Logout</Link> */}
        </div>
        <div className="humberger">
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
};
export default Navber;
