import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greet } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greet">
        <div className="greet-main">
          <div className="greet-text-div">
            <div>
              <h1 className="greet-text" style={{ color: theme.text }}>
                {greet.title}
              </h1>
              <h2 className="greet-nickname" style={{ color: theme.text }}>
                ( {greet.nickname} )
              </h2>
              <p
                className="greet-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greet.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="Find Me On Github"
                  newTab={true}
                  href={greet.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greet-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
