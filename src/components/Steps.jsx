import React from "react";
import PropTypes from "prop-types";
import "../css/Steps.css";
import VideoComponent from "./VideoComponent";

const Steps = (props) => {
  return (
    <div className="steps-container">
      <div className="steps-max-width">
        <div className="steps-content">
          <div className="steps-video">
            <VideoComponent />
          </div>
          <div className="steps-cards">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className={`step-card step-${step}`}>
                <h2 className="step-title">{props[`step${step}Title`]}</h2>
                <p className="step-description">
                  {props[`step${step}Description`]}
                </p>
                <span className="step-number">
                  {String(step).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Steps.propTypes = {
  step1Title: PropTypes.string,
  step1Description: PropTypes.string,
  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  step3Title: PropTypes.string,
  step3Description: PropTypes.string,
  step4Title: PropTypes.string,
  step4Description: PropTypes.string,
};

Steps.defaultProps = {
  step1Title: "Step 1: Tap your phone",
  step1Description:
    "Simply tap your NFC-enabled phone on the NFC tag to initiate the connection.",
  step2Title: "Step 2: Follow instructions",
  step2Description:
    "Follow the on-screen instructions to complete the NFC transaction securely.",
  step3Title: "Step 3: Confirm payment",
  step3Description:
    "Confirm the payment or data transfer on your phone to finalize the NFC process.",
  step4Title: "Step 4: Done!",
  step4Description:
    "You have successfully completed the NFC transaction. Enjoy the convenience of NFC technology!",
};

export default Steps;
