import React, { useState, useEffect } from "react";
import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

export const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [selectedPunk, punkListData]);
  return (
    <div className="main">
        <div className="punkHighlight">
                  <img
                      src={activePunk.image_url}
                      alt=""
                      className="selectedPunk"
                  />
          </div>

        <div className="mainContent">
            <div className="punkDetails" style={{color:'#fff'}}>
                <h1 className="title">{activePunk.name}  <span className="itemNumber">.#{activePunk.token_id}</span></h1>
            </div>
            <div className="owner">
                <div className="ownerImageContainer">
                    <img src={activePunk.owner.profile_img_url} alt="" />
                </div>
                <div className="ownerNameAndHandle">
                  <p id="address">{activePunk.owner.address}</p>
                  <p className="ownerHandle">@oyin_dawodu</p>
              </div>
            </div>
        </div>
        <div className="ownerDetails">
              <a className="ownerLink" href="https://www.instagram.com/osalikovskyi">
                  <img src={instagramLogo} alt="" />
              </a>
              <a className="ownerLink" href="https://twitter.com/salikovskyi">
                  <img src={twitterLogo} alt="" />
              </a>
              <a className="ownerLink" href="">
                  <img src={moreIcon} alt="" />
              </a>
          </div>
  </div>
)
}

export default Main;
