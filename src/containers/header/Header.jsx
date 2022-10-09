import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/logo1.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Lets make the recitation easy!</h1>
      <p>
        “Verily the one who recites the Quran beautifully, smoothly, and
        precisely, he will be in the company of the noble and obedient angels.
        And as for the one who recites with difficulty, stammering or stumbling
        through its verses, then he will have TWICE that reward.”{" "}
        <span style={{ color: "white" }}>(Sahih Al-Bukhari)</span>
      </p>

      <div className="gpt3__header-content__input">
        <Link to="/recitation">
          <button type="button">Listen to Quran</button>
        </Link>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
