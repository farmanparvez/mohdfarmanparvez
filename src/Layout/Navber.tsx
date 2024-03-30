import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { ScrollLink } from "@/Components/ui";

const Navber = () => {
  return (
    <div className="navber">
      <nav>
        <h1 className="logo">MFP</h1>
        <div className="left">
          <ul className={false ? "nav ul mobile" : "nav ul"}>
              <li><ScrollLink to='home' activeClassName="active" spy={true} smooth={true} offset={-100} duration={500}>Home</ScrollLink></li> 
              <li><ScrollLink to="skills" spy={true} smooth={true} offset={-100} duration={500}>skills</ScrollLink></li>
              <li><ScrollLink to="work" spy={true} smooth={true} offset={-100} duration={500}>work</ScrollLink></li>
              <li><ScrollLink to="education" spy={true} smooth={true} offset={-100} duration={500}>Eduction</ScrollLink></li>
              <li><ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={500}>about</ScrollLink></li>
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
