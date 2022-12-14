import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is QuranRecite?"
          text="The purpose of the 'Muslims' app is to connect Muslims on local and global levels. This app allows Muslims to ask questions and share their thoughts on pre-defined Groups. Each group has its purpose, which is carefully monitored by our community management team. Our team reviews all the user posts and hides the content that doesn't follow our guidelines and policies. IslamicFinder doesn't own the users' content but reserves the full right to delete anything with or without prior notice. Our mission is to build this community with trust and authenticity to feel safe and productive while using this app."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Featues available just few clicks away!
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Prayer Times"
          text="et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat "
        />
        <Feature
          title="Hadeedhs Reminder"
          text=" Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil "
        />
        <Feature
          title="Special Islamic Days"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
