import React from "react";
import Cracker2 from "../images/cracker2.gif";
import HBD1 from "../images/hbd1.png";
import HBD2 from "../images/hbd2.jpg";
import Ballons from "../images/ballons.jpg";
import "../css/bouquet.scss";

function Bouquet() {
  return (
    <div>
      {/* <div className="night"></div> */}

      <img
        src={HBD1}
        alt="hbd-logo"
        style={{
          position: "absolute",
          top: "10%",
          left: "35%",
          width: "400px",
          height: "250px",
        }}
      />

      <img
        src={Cracker2}
        alt="cracker"
        style={{
          position: "absolute",
          top: "100px",
          left: "10%",
          width: "200px",
          height: "200px",
        }}
      />
      <img
        src={Cracker2}
        alt="cracker"
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          width: "200px",
          height: "200px",
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

        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
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
          <div className="flower__grass flower__grass--1">
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

        <div className="long-g long-g--0">
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

        <div className="long-g long-g--5">
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

        <div className="long-g long-g--6">
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

        <div className="long-g long-g--7">
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
