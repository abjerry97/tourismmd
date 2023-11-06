import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterList = () => {
  return (
    <div className="bg-white mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center mb-3">
            <div className="">
              <h3 className="mb-3">TourismNg</h3>
              <ul className="d-flex gap-2">
                {" "}
                <li className="social-icon-wrapper">
                  <a href="https://github.com/abjerry97">
                    <GitHubIcon sx={{ color: "#5D3C19" }} />
                  </a>{" "}
                </li>
                <li className="social-icon-wrapper">
                  <a href="https://www.linkedin.com/in/abiodun-jeremiah-09a32677/">
                    <LinkedInIcon sx={{ color: "#5D3C19" }} />
                  </a>{" "}
                </li>
                <li className="social-icon-wrapper">
                  <a href="https://www.facebook.com/abiodun.j.oluwatobiloba/">
                    <FacebookIcon sx={{ color: "#5D3C19" }} />
                  </a>{" "}
                </li>
                <li className="social-icon-wrapper">
                  <a href="https://twitter.com/abjerry97">
                    <TwitterIcon sx={{ color: "#5D3C19" }} />
                  </a>{" "}
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center mb-3">
            <ul>
              <li>asasasadadas</li>
              <li>asasasadadas</li>
              <li>asasasadadas</li>
              <li>asasasadadas</li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center mb-3">
            <ul>
              <li>asasasadadas</li>
              <li>asasasadadas</li>
              <li>asasasadadas</li>
              <li>asasasadadas</li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center mb-3">
            <ul>
              <li>asasasadadas</li>
              <li>asasasadadas</li>
              <li>asasasadadas</li>
              <li>asasasadadas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterList;
