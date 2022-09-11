import { FooterWrapper } from "../styled/FooterWrapper";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="upper_container">
        <h4>METODO SILVA</h4>
         <p>
           No pospongas para otro dia empieza a cambiar tu vida ya...
        </p>
      </div>

      <div className="lower_container">  
        <div className="logo">
          <img src="./assets/logo.png" alt="log" /></div>    
        <div className="external_links">
          <h5>SÍGANOS:</h5>
          <span><BsFacebook /></span>
          <span><BsInstagram /></span>
          <span><BsTwitter /></span>
          <span><BsYoutube /></span>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
