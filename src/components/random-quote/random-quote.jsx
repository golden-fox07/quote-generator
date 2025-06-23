import React, { useState } from "react";
import "./random-quote.css";
import 'boxicons/css/boxicons.min.css';
import reload_Icon from "../../components/assets/reload.png";

const RandomQuote = () => {
  const quotes = [
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
{
  text: "I’m going to get my license, then I’ll be able to do whatever I want!",
  author: "— Gon Freecss, Hunter x Hunter",
},
{
  text: "You're pretty sharp for a clown.",
  author: "— Killua Zoldyck, Hunter x Hunter",
},
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
},
{
  text: "Human strength lies in the ability to change yourself.",
  author: "— Saitama, One Punch Man",
},
{
  text: "You can die anytime, but living takes true courage.",
  author: "— Kenshin Himura, Rurouni Kenshin",
},
{
  text: "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.",
  author: "— Gildarts Clive, Fairy Tail",
},
{
  text: "A person can change, at the moment when the person wishes to change.",
  author: "— Haruhi Fujioka, Ouran Highschool Host Club",
},
{
  text: "You will never be able to love anybody else until you love yourself.",
  author: "— Lelouch Lamperouge, Code Geass",
},
{
  text: "All we can do is live until the day we die. Control what we can…and fly free.",
  author: "— Deneil Young, Space Brothers",
},
{
  text: "If you don't take risks, you can't create a future.",
  author: "— Monkey D. Luffy, One Piece",
},
{
  text: "If you don't share someone's pain, you can never understand them.",
  author: "— Nagato, Naruto",
},
{
  text: "There's no shame in falling down! True shame is to not stand up again!",
  author: "— Shintaro Midorima, Kuroko's Basketball",
},
{
  text: "When you hit the point of no return, that's the moment it truly becomes a journey. If you can still turn back, it's not really a journey.",
  author: "— Hinata Miyake, A Place Further than the Universe",
},
{
  text: "The world isn't perfect. But it's there for us, doing the best it can… that's what makes it so damn beautiful.",
  author: "— Roy Mustang, Full Metal Alchemist",
},
{
  text: "Simplicity is the easiest path to true beauty.",
  author: "— Seishuu Handa, Barakamon",
},
{
  text: "The past is the past. We cannot indulge ourselves in memories and destroy the present.",
  author: "— Murata Ken, Kyou Kara Maou!",
},
{
  text: "Knowing what it feels like to be in pain is exactly why we try to be kind to others.",
  author: "— Jiraiya, Naruto",
},
{
  text: "Mistakes are not shackles that halt one from stepping forward. Rather, they are that which sustain and grow one's heart.",
  author: "— Mavis Vermillon, Fairy Tail",
},
{
  text: "All things change in a dynamic environment. Your effort to remain what you are is what limits you.",
  author: "— Puppet Master, Ghost in the Shell",
},
{
  text: "No matter how many weapons you have, no matter how great your technology might be, the world cannot live without love.",
  author: "— Sheeta, Castle in the Sky",
},
{
  text: "A heart's a heavy burden.",
  author: "— Sophie, Howl's Moving Castle",
},
{
  text: "The scars you can't see are the hardest to heal.",
  author: "— Nao Tomori, Charlotte",
},
{
  text: "It's not dying that frightens us. It's living without ever having done our best.",
  author: "— The Elder, Castlevania",
},
{
  text: "No matter how messed up things get, you can always figure out the best solution.",
  author: "— Eren Yeager, Attack on Titan",
},
{
  text: "There's no future for people who worship the future...",
  author: "— Shun Kazama, From Up on Poppy Hill",
},
{
  text: "Searching for someone to blame is such a pain.",
  author: "— Satoru Goju, Jujutsu Kaisen",
},
{
  text: "Sometimes, we have to look beyond what we want and do what's best.",
  author: "— Piccolo, Dragon Ball Z",
},
{
  text: "It's quiet, but can you hear it? Little by little, the tides are changing, and the world with them.",
  author: "— Shakuyaku, One Piece",
},


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