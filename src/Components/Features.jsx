import React from "react";

const Features_wrapper = ({ featureName, featureDesc, featureIcon }) => {
  return (
    <div className="feature__item max-w-72  space-y-6   my-5">
      <img
        width={120}
        height={120}
        src={featureIcon}
        alt="feature_icon"
        loading="lazy"
      />
      <h4 className="feature__name text-2xl font-bold">{featureName}</h4>
      <p className="text-pretty">{featureDesc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="mx-28">
      <div className="flex justify-evenly py-24 text-left flex-wrap ">
        <Features_wrapper
          featureDesc={
            "We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
          }
          featureIcon={
            "https://printify.com//pfh/assets/legacy/higher-profits.svg"
          }
          featureName={"Higher Profits"}
        />
        <Features_wrapper
          featureName={"Robust Scaling"}
          featureIcon={
            "https://printify.com//pfh/assets/legacy/robust-scaling.svg"
          }
          featureDesc={
            " Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
          }
        />
        <Features_wrapper
          featureIcon={
            "https://printify.com//pfh/assets/legacy/best-selection.svg"
          }
          featureDesc={
            "With 900+ products and top quality brands, you can choose the best products for your business."
          }
          featureName={"Best Selection"}
        />
      </div>
    </div>
  );
};

export default Features;
