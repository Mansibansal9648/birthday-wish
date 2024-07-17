import './card.css'
export default () => (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY BUDDY!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY BESTIE!</h3>
        <p>Dear Friend,</p>
        <p>
          Happy birthday to my best friend in the whole wide world !! 
          On your special day, I want you to know how grateful I am to have you in my life. 
          Your friendship is a treasure, and I wish you a year ahead filled with joy, love, and endless adventures.
          {/* I hope your day is filled with lots of love and */}
          {/* laughter!  */}
          May all of your birthday wishes come true.
        </p>
        <p className="name">Mansi Bansal</p>
      </div>
    </div>
  );
  