import React, { Component } from "react";
import "./App.css";
import check from "./check.png";
import down from "./down.png";
import phone from "./phone.png";
import cal from "./calendar.svg";
import polish from "./polish.png";
import pack from "./pack.png";
import car from "./car.jpg";
import logo from "./logo.png";
import ny from "./newyork.jpg";
import nola from "./neworleans.jpg";
import napa from "./napa.jpg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} />
    </div>
  );
};

const Landing = () => {
  return (
    <div className="title">
      <div>Luxury bachelorettes.</div>

      <div>Planned by us, tailored to you.</div>
      <a href="mailto:lauren.e.blocker@gmail.com" className="main-cta">
        <div>Let's get in touch!</div>
      </a>
    </div>
  );
};

const Destination = props => {
  return (
    <div className="destination">
      <div className="destination-img-container">
        <img className="destination-img" src={props.img} alt="alt" />
      </div>
      <div className="destination-name">{props.title}</div>
    </div>
  );
};

const Destinations = () => {
  return (
    <div className="destinations-section">
      <div className="destinations-title">Recommended destinations</div>
      <Destination img={ny} title="New York" />
      <Destination img={nola} title="New Orleans" />
      <Destination img={napa} title="Napa Valley" />
    </div>
  );
};

const About = () => (
  <div className="about">
    <div className="how-works-title">About us</div>
    <p>
      A luxurious, photo-worthy, stress-free girls getaway is right at your
      fingertips. Brides to be, let our travel & event specialists bring your
      dream bachelorette one step closer to reality. And on the flip side, if
      you are the Maid of Honor, Mother of the Bride, or the friend that is the
      resident party planner, let Luxette help you design a girls weekend that
      the bride-to-be is sure to never forget and that you can actually enjoy.
      We specialize in white-glove customized travel planning for those groups
      looking to really go all out on this celebratory weekend. However, if you
      just need some hot spot suggestions on where to go, stay, and eat in a
      city you’ve never been to, we are at your service.
    </p>
  </div>
);

const HowWorks = () => {
  const callBody = `Take a look at our different destinations & packages, then send us a note! Once we’ve exchanged greetings and hellos, we’ll send you a more in-depth questionnaire to learn more about the bride to be and how your group likes to travel. From there we will schedule a consultation call to get to know each other and run through some initial ideas. Don’t forget: if you like what you see but don’t see your destination offered, we are happy to customize something for you. We love researching new places!`;
  const makeBody = `Now it’s time for us to make the magic happen! Once we’ve collected everything we need to know from likes to dislikes, budget, and allergies, we will draft an itinerary and keep drafting until it is 100% to your liking. From there we will require a 50% deposit to make reservations & book activities.`;
  const sportBody = `Once you decide on your destination and party package, we’ll need to get started with a proposed itinerary. Since we spend our time combing the right sites and calling the right people to get you the best offers and value, at this time we ask that you submit your planning fee so that we can begin working together right away. Once that is submitted we are all hands on deck to begin planning a dream bachelorette.`;
  const packBody = `Now comes the fun part. You get to sit back and relax while we handle the rest. We will even include a packing list to make sure that everything feels seamless from the start. Get ready to have the most perfect weekend with your best friends. We will be here the whole time to make sure of it! `;
  return (
    <div className="how-works">
      <About />
      <div className="how-works-title">How does it work?</div>
      <Step
        className="first-step"
        icon={phone}
        small
        title="Destination consultation"
        body={callBody}
      />
      <Step icon={cal} title="Save your spot" body={sportBody} />
      <Step icon={polish} title="Make it yours" body={makeBody} />
      <Step icon={pack} small title="Pack and party" body={packBody} />
    </div>
  );
};

const Step = ({ icon, title, body, small }) => {
  return (
    <div class="step">
      <div className="step-image-container">
        <img
          className={`${small ? "small-icon" : "step-icon"}`}
          src={icon}
          alt="step"
        />
      </div>
      <div className="step-title">{title}</div>
      <p className="step-body">{body}</p>
    </div>
  );
};

const MainImage = () => (
  <div className="main-container">
    <img src={car} />
  </div>
);

const Testimonials = () => (
  <div className="testimonials">
    <div className="how-works-title">What our clients are saying</div>
    <p>
      I had a wonderful experience planning my best friend's bachelorette party
      with Lauren! From beginning to end, Lauren was so meticulous about making
      sure that my vision for the event came to life, and that everything went
      off without a hitch. It was clear Lauren knows the best of the best when
      it comes to dining and nightlife in New Orleans - all of her restaurant
      recommendations were fantastic. I also loved all of the special touches
      she put in place while we were on the ground. Our entire party was blown
      away! Having her by my side was a HUGE help and I couldn't have done it
      without her (especially while working 2 jobs!). I'd highly recommend
      Lauren and Luxette for any travel or event planning needs. 5 stars!!
    </p>
    <p className="client">- Tiffany M, MOH, New Orleans</p>
    <p>
      "I couldn't have imagined a better bachelorette trip than what Lauren (of
      Luxette) and my Maid of Honor organized for me in New Orleans! The
      itinerary was so well thought out and SO much fun—amazing restaurants and
      bars, super fun activities, and never a dull moment with my favorite
      ladies. Every detail was impeccable, including the communication with the
      entire group beforehand (complete with a detailed itinerary and outfit
      planner), the way my room was decorated when I arrived, the hotel choice,
      the pre-arrangement of details at each restaurant, and fun and hilarious
      activities every step of the way! I would 1,000% recommend Luxette to
      anyone who wants to take their next friends trip (bachelorette or
      otherwise) to the next level!"
    </p>
    <p className="client">- Aly T., Bride, New Orleans</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainImage />
        <Landing />
        <HowWorks />
        <Destinations />
        <Testimonials />
      </div>
    );
  }
}

export default App;
