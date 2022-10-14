import React from "react";
import "./Idea.css";
import Party from "../Party/Party";
import BPARTY from "../../Assets/birthday.jpg";
import EVENT from "../../Assets/event.jpg";
import BALL from "../../Assets/balloon.jpg";
import ANNI from "../../Assets/anniversary.jpg";
import WEDD from "../../Assets/wedding.jpg";
const Idea = () => {
  const party = [
    {
      img: BPARTY,
      text: "Birthday Party",
      desc: "Illuminating the candles on your birthday fills the brightness in your life the whole year round with the mega's. The quest for diamonds for this human life is a life of happiness.",
    },
    {
      img: EVENT,
      text: "Event Planning",
      desc: "Our experienced event staff offers full-service event planning that takes you from initial consultation to event execution according to your theme.",
    },
    {
      img: BALL,
      text: "Decoration",
      desc: "The very sight of balloons arranged in a specific manner gives us a hint about an event that is unfolding soon.",
    },
    {
      img: ANNI,
      text: "Anniversary Celebration",
      desc: "The anniversary would make a tremendous memory to the person and help him in attaining inner peace and joy. The vibe is all that, matters and the surprising way of gifting has always brought up delightful vibes in lives.",
    },
    {
      img: WEDD,
      text: "Wedding Plans",
      desc: "By choosing our wedding services, you can ensure that your big day is filled with happiness all around. It helps you focus on your wedding without any distractions so that you can live the day to its fullest.",
    },
  ];
  return (
    <div id="idea">
      <div className="container">
        <h1>Ideas</h1>
        <div className="container-idea">
          {party.map((res) => (
            <Party
              key={res.img}
              img={res.img}
              text={res.text}
              desc={res.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Idea;
