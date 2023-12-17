import React, { useEffect, useRef, useState } from "react";
import Cracker2 from "../images/cracker2.gif";
import HBD1 from "../images/hbd1.png";
import Video from "../images/hbd-video.mp4";
import Ballons from "../images/ballons.png";
import Cake from "../images/cake1.png";
import "../css/bouquet.scss";

function Bouquet() {
  const [isVideoShown, setIsVideoShown] = useState(false);

  const playVideo = () => {
    setIsVideoShown(true);
    document.getElementById("player").play();
  };

  const playSong = async () => {
    try {
      const player = document.getElementById("audio-player");
      await player.play();
      player.volume = 0.3;
    } catch (err) {
      console.log("Error");
    }
  };

  useEffect(() => {
    setTimeout(playSong, 2000);
  }, []);

  const songSrc = "/audio.mp3";

  return (
    <div>
      <audio
        id="audio-player"
        src={songSrc}
      ></audio>
      <div id="hbd-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={HBD1}
            alt="hbd-logo"
            id="hbd-logo"
          />
          <img
            src={Cake}
            alt="cake"
            style={{ width: "20%" }}
          />
        </div>
        <h1
          style={{
            color: "white",
            marginTop: "-20px",
            fontFamily: "monospace",
          }}
        >
          Anjali
        </h1>
        <p
          style={{
            color: "white",
            marginTop: "20px",
          }}
        >
          {'"May God brings heaven to you :)"'}
        </p>
        {!isVideoShown && (
          <button
            style={{
              padding: "5px 10px",
              borderRadius: "20px",
              outline: "none",
              border: "none",
              cursor: "pointer",
              marginTop: "50px",
            }}
            onClick={playVideo}
          >
            Jaldi yaha click karo
          </button>
        )}

        <video
          width="250"
          height="150"
          id="player"
          style={{ display: !isVideoShown ? "none" : "block" }}
          controls
        >
          <source
            src={Video}
            type="video/mp4"
          />
          Your browser does not support this video format.
        </video>
      </div>

      <img
        src={Cracker2}
        id="crackers"
        alt="cracker"
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          width: "30%",
          height: "auto",
          zIndex: "-99",
        }}
      />
      <img
        src={Ballons}
        id="ballons"
        alt="cracker"
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          width: "30%",
          height: "auto",
        }}
      />

      <div className="flowers">
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
            <div className="flower__line__leaf flower__line__leaf--5"></div>
            <div className="flower__line__leaf flower__line__leaf--6"></div>
          </div>
        </div>

        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div className="grow-ans">
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="grow-ans">
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans">
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans">
          <div className="flower__g-front">
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__line"></div>
          </div>
        </div>

        <div className="grow-ans">
          <div className="flower__g-fr">
            <div className="leaf"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
          </div>
        </div>

        <div className="long-g long-g--1">
          <div className="grow-ans">
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans">
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans">
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans">
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--2">
          <div className="grow-ans">
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans">
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans">
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans">
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--3">
          <div className="grow-ans">
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans">
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans">
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans">
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--4">
          <div className="grow-ans">
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans">
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans">
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans">
            <div className="leaf leaf--3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bouquet;
