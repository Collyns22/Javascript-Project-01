const quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It does not matter how slowly you go as long as you do not stop.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "The purpose of our lives is to be happy.",
  "Get busy living or get busy dying.",
  "You only live once, but if you do it right, once is enough.",
  "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "We grow fearless when we do the things we fear.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The only thing we have to fear is fear itself.",
  "The best way to predict the future is to create it.",
  "The only thing that will stop you from fulfilling your dreams is you.",
  "The only way to do great work is to love what you do.",
  "The best revenge is massive success.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Be happy with what you have, while working for what you want.",
];
const usedIndexes = new Set();
const quoteTag = document.getElementById("quote");

function getQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;

    const quote = quotes[randomIdx];
    quoteTag.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}
