import React, { useState } from 'react';
import './App.css';
import quotes from './quotes';

function getRandomQuoteIdx(excludeIdx = null) {
  let idx = Math.floor(Math.random() * quotes.length);
  // Ensure new quote if possible
  if (excludeIdx !== null && quotes.length > 1) {
    while (idx === excludeIdx) {
      idx = Math.floor(Math.random() * quotes.length);
    }
  }
  return idx;
}

function App() {
  const [quoteIdx, setQuoteIdx] = useState(() => getRandomQuoteIdx());
  const [fadeState, setFadeState] = useState('fade-in');
  const quote = quotes[quoteIdx];

  const handleNewQuote = () => {
    setFadeState('fade-out');
    setTimeout(() => {
      setQuoteIdx(getRandomQuoteIdx(quoteIdx));
      setFadeState('fade-in');
    }, 400);
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quote.text + '" - ' + quote.author)}`;

  return (
    <div className="App">
      <div id="quote-box" data-testid="quote-box" className="quote-box-centered">
        <div id="text" className={`quote-text ${fadeState}`}>{quote.text}</div>
        <div id="author" className={`quote-author ${fadeState}`}>- {quote.author}</div>
        <div className="quote-actions">
          <a
            id="tweet-quote"
            className="tweet-quote"
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Tweet this quote!"
          >
            Tweet
          </a>
          <button id="new-quote" className="new-quote-btn" onClick={handleNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
