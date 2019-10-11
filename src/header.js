
import React from 'react';
export default function Header() {
  return (
    <div className="header">
      <a className="header-logo" href="www.placepass.com">
        placepass
      </a>
      <span className="favorites">
        Favorites (<span className="favorites-value">0</span>)
      </span>
    </div>
  );
}
