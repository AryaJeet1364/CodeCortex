import React from "react";
import PropTypes from "prop-types";
import "../css/Steps.css";
import VideoComponent from "./VideoComponents";

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
  step1Title: "Step 1: Scan Items",
  step1Description:
    "Simply tap your NFC-enabled phone on the NFC tags on the products to add the items in the cart.",
  step2Title: "Step 2: Curate your cart",
  step2Description:
    "Add multiple items in the cart, with the option to remove them",
  step3Title: "Step 3: Confirm payment",
  step3Description:
    "Checkout and confirm the payment on your phone.",
  step4Title: "Step 4: Scan the QR code",
  step4Description:
    "Scan the generated QR code at the checkout gates for verification purposes",
};

export default Steps;
