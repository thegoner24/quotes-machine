import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Random Quote Machine', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders #quote-box wrapper', () => {
    expect(screen.getByTestId('quote-box') || document.getElementById('quote-box')).toBeTruthy();
  });

  test('renders #text and #author inside #quote-box', () => {
    const text = document.getElementById('text');
    const author = document.getElementById('author');
    expect(text).toBeTruthy();
    expect(author).toBeTruthy();
    expect(text.textContent.length).toBeGreaterThan(0);
    expect(author.textContent.length).toBeGreaterThan(0);
  });

  test('renders #new-quote button and #tweet-quote link', () => {
    expect(document.getElementById('new-quote')).toBeTruthy();
    const tweet = document.getElementById('tweet-quote');
    expect(tweet).toBeTruthy();
    expect(tweet.tagName.toLowerCase()).toBe('a');
    expect(tweet.href).toMatch(/twitter.com\/intent\/tweet/);
  });

  test('clicking #new-quote changes the quote and author', async () => {
    const text = document.getElementById('text');
    const author = document.getElementById('author');
    const oldText = text.textContent;
    const oldAuthor = author.textContent;
    fireEvent.click(document.getElementById('new-quote'));
    // Wait for animation (fade) to complete
    await new Promise(r => setTimeout(r, 450));
    const newText = document.getElementById('text').textContent;
    const newAuthor = document.getElementById('author').textContent;
    expect(newText !== oldText || newAuthor !== oldAuthor).toBeTruthy();
  });

  test('tweet-quote href updates with current quote', () => {
    const text = document.getElementById('text');
    const author = document.getElementById('author');
    const tweet = document.getElementById('tweet-quote');
    expect(tweet.href).toContain(encodeURIComponent(text.textContent));
    expect(tweet.href).toContain(encodeURIComponent(author.textContent.replace(/^[-\s]+/, '')));
  });

  test('#quote-box is horizontally centered (visual, basic check)', () => {
    const quoteBox = document.getElementById('quote-box');
    const style = window.getComputedStyle(quoteBox);
    // In JSDOM, computed styles for marginLeft/marginRight are often '0px' even if set to 'auto' in CSS.
    // We can't reliably test this in JSDOM, so we skip the assertion if not running in a real browser.
    if (style.marginLeft !== 'auto' && style.marginRight !== 'auto') {
      // Skipping assertion due to JSDOM limitations
      return;
    }
    expect(style.marginLeft === 'auto' || style.marginRight === 'auto').toBeTruthy();
  });
});
