import React from "react";

export default function BestSellers(props) {
  const shoes = props.shoes;
  return (
    <div>
      <h1>Best Sellers</h1>
      <div className="newArrivalsDiv">
        <div>
          <li>
            <img
              className="homePageShoeImages"
              src={shoes[0].thumbUrl}
              alt=""
            />

            <h5 className="newArrivalsBoldText">{shoes[0].name}</h5>
          </li>
        </div>
        <div>
          <li>
            <img
              className="homePageShoeImages"
              src={shoes[1].thumbUrl}
              alt=""
            />

            <h5 className="newArrivalsBoldText">{shoes[1].name}</h5>
          </li>
        </div>
        <div>
          <li>
            <img
              className="homePageShoeImages"
              src={shoes[2].thumbUrl}
              alt=""
            />

            <h5 className="newArrivalsBoldText">{shoes[2].name}</h5>
          </li>
        </div>
        <div>
          <li>
            <img
              className="homePageShoeImages"
              src={shoes[6].thumbUrl}
              alt=""
            />

            <h5 className="newArrivalsBoldText">{shoes[6].name}</h5>
          </li>
        </div>
      </div>
    </div>
  );
}
