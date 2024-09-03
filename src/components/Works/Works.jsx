import React from 'react';
import Marquee from 'react-fast-marquee';
import p0 from "../../img/partners/p0.png";
import p1 from "../../img/partners/p1.png";
import p10 from "../../img/partners/p10.png";
import p11 from "../../img/partners/p11.png";
import p12 from "../../img/partners/p12.png";
import p13 from "../../img/partners/p13.png";
import p14 from "../../img/partners/p14.png";
import p2 from "../../img/partners/p2.png";
import p3 from "../../img/partners/p3.png";
import p4 from "../../img/partners/p4.png";
import p5 from "../../img/partners/p5.png";
import p6 from "../../img/partners/p6.png";
import p7 from "../../img/partners/p7.png";
import p8 from "../../img/partners/p8.png";
import p9 from "../../img/partners/p9.png";
import './Works.css';

const partners = [p0, p1, p2, p3, p4, p5, p6, p7];
const partner = [ p8, p9, p10, p11, p12, p13, p14];

function Works() {
  return (
    <div className="works-container">
      <div className="title">
        <h1>Our Partners</h1>
      </div>

      <div className="marquee-section">
        {/* First Marquee Layer */}
        <Marquee
          direction="left"
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="marquee-layer"
        >
          {partners.map((partner, index) => (
            <div className="image-wrapper" key={`left-${index}`}>
              <img src={partner} alt={`Technology Partner ${index + 1}`} className="partner-logo" />
            </div>
          ))}
        </Marquee>

        {/* Second Marquee Layer */}
        <Marquee
          direction="right"
          speed={30}
          gradient={false}
          pauseOnHover={true}
          className="marquee-layer marquee-layer-2"
        >
          {partner.map((partner, index) => (
            <div className="image-wrapper" key={`right-${index}`}>
              <img src={partner} alt={`Technology Partner ${index + 1}`} className="partner-logo" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Works;
