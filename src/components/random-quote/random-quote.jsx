import React, { useState } from "react";
import "./random-quote.css";
import 'boxicons/css/boxicons.min.css';
import reload_Icon from "../../components/assets/reload.png";

const RandomQuote = () => {
  const quotes = [
    // One Piece
{
  text: "I'm gonna become the Pirate King!",
  author: "— Monkey D. Luffy, One Piece",
},
{
  text: "Nothing happened.",
  author: "— Roronoa Zoro, One Piece",
},
{
  text: "I’m not dying, you idiot!",
  author: "— Luffy, One Piece",
},
{
  text: "Meat!!!",
  author: "— Luffy, One Piece",
},
// Jujutsu Kaisen
{
  text: "I love women like Jennifer Lawrence.",
  author: "— Satoru Gojo, Jujutsu Kaisen",
},
{
  text: "What kind of girls are you into?!",
  author: "— Aoi Todo, Jujutsu Kaisen",
},
{
  text: "I'm the strongest there is.",
  author: "— Satoru Gojo, Jujutsu Kaisen",
},
// Naruto
{
  text: "I'm not a pervert… I’m a super pervert!",
  author: "— Jiraiya, Naruto",
},
{
  text: "Believe it!",
  author: "— Naruto Uzumaki, Naruto",
},
{
  text: "A lesson without pain is meaningless… That’s right. You gain nothing from suffering pointlessly.",
  author: "— Jiraiya, Naruto",
},

// Attack on Titan
{
  text: "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
  author: "— Eren Yeager, Attack on Titan",
},
{
  text: "I don’t know what’s going on, but I’ll act like I do.",
  author: "— Jean Kirstein, Attack on Titan",
},
{
  text: "Give up on your dreams and die.",
  author: "— Levi Ackerman, Attack on Titan",
},

// Hunter x Hunter
{
  text: "I’m going to get my license, then I’ll be able to do whatever I want!",
  author: "— Gon Freecss, Hunter x Hunter",
},
{
  text: "You're pretty sharp for a clown.",
  author: "— Killua Zoldyck, Hunter x Hunter",
},
// Blue Lock
{
  text: "The only thing that's fair in this world is talent!",
  author: "— Rin Itoshi, Blue Lock",
},
{
  text: "Devour them all!",
  author: "— Isagi Yoichi, Blue Lock",
},
{
  text: "I'm not a striker because I have to be. I'm a striker because I want to be the best.",
  author: "— Bachira Meguru, Blue Lock",
},
// Code Geass
{
  text: "I, Lelouch vi Britannia, command you... all of you... to die!",
  author: "— Lelouch Lamperouge, Code Geass",
},
{
  text: "If happiness had a form, what would it look like? A butterfly? A bubble?",
  author: "— C.C., Code Geass",
},
{
  text: "The world cannot be changed with pretty words alone.",
  author: "— Lelouch Lamperouge, Code Geass",
}

  ];

  const [quoteData, setQuoteData] = useState(quotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteData(quotes[randomIndex]);
  };

  return (
    <>
      <h1 className="main-heading">Anime Quotes</h1>

      <div className="container">
        <div className="header">
          <div className="quote">{quoteData.text}</div>
          <div>
            <div className="line"></div>
            <div className="bottom">
              <div className="author">{quoteData.author}</div>
              <div className="icon">
                <img
                  src={reload_Icon}
                  onClick={generateRandomQuote}
                  alt="Reload"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="footer"> 
      <div className="social-icon">
        <a href = "https://www.linkedin.com/in/aakriti-agarwal07/" target="_blank"><i class='bx bxl-linkedin'></i></a>
        <a href = "https://github.com/golden-fox07" target="_blank"><i class='bx bxl-github' ></i></a>
        <a href = "mailto:aakriti07agarwal@gmail.com" target="_blank"><i class='bx bxl-gmail'></i></a>
      </div>
      <p>Copyright © 2025 golden-fox07</p> 
    </div>
    </>
  );
};

export default RandomQuote;