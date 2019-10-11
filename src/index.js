import React from "react";
import ReactDOM from "react-dom";
import { experiences } from "./api/experiences";

import "./styles.css";
import Header from "./header";

function App() {
  const data = experiences[0];

  return (
    <div className="App">
      <Header />
      <div className="card">
        <img className="card-hero" alt="product hero" src={data.productImage} />
        <div className="card-favorite">
          <svg id="Favorite_off" viewBox="0 0 30 30">
            <g clipRule="evenodd" fillRule="evenodd" stroke="#fff">
              <path
                d="m15 29c7.732 0 14-6.268 14-14 0-7.73199-6.268-14-14-14-7.73199 0-14 6.26801-14 14 0 7.732 6.26801 14 14 14z"
                fill="#000"
                fillOpacity=".5"
                strokeWidth="1.5"
              />
              <path
                d="m14.8527 11.3369c-.5387-.8083-1.5266-1.5836-3.1672-1.5869-2.17185 0-3.6855 1.9465-3.6855 3.6918 0 1.6331.88757 2.58 2.4992 4.2923 1.5174 1.6166 3.965 4.0877 3.9896 4.1141.0249.0231.0304.0231.0348.0264.0447.0396.0936.0693.1465.0891.071.0231.1294.0363.1884.0363.0608 0 .1205-.0132.1775-.033.0683-.0264.1185-.0561.1639-.0957.0229-.0198.0287-.0231.0334-.0297.0236-.0231 2.4067-2.4942 3.8835-4.1108 1.5679-1.7156 2.4316-2.6592 2.4316-4.289 0-1.7453-1.4788-3.6918-3.6012-3.6918-1.603.0033-2.5681.7786-3.0945 1.5869z"
                strokeWidth="2"
                fill="#000"
              />
            </g>
          </svg>
        </div>
        <div className="card-title">{data.title}</div>
        <div className="card-price">From ${data.prices[0].retailPrice} usd</div>
        <div class="card-rating">
          <span class="rating-star">★</span>
          <span class="rating-star">★</span>
          <span class="rating-star">★</span>
          <span class="rating-star">★</span>
          <span class="rating-star-empty">★</span>
          <span>({data.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
