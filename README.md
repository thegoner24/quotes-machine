# Quotes Machine by Goner

A dynamic and visually appealing Random Quote Machine built with React, fully compliant with the [FreeCodeCamp Front End Libraries Project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine). This project features smooth animations, modern design, and a robust test suite.

## Demo

Try the original challenge: [FreeCodeCamp Random Quote Machine](https://random-quote-machine.freecodecamp.rocks/)

## Features

- Responsive, modern UI with custom fade-in/fade-out animations for quotes
- Fetches and displays random quotes from a curated list
- Tweet the current quote with one click
- All FreeCodeCamp user stories satisfied
- Fully tested with React Testing Library

## User Stories (Requirements)

1. I can see a wrapper element with a corresponding `id="quote-box"`.
2. Within `#quote-box`, I can see an element with `id="text"`.
3. Within `#quote-box`, I can see an element with `id="author"`.
4. Within `#quote-box`, I can see a clickable element with `id="new-quote"`.
5. Within `#quote-box`, I can see a clickable `a` element with `id="tweet-quote"`.
6. On first load, a random quote and author are displayed.
7. Clicking `#new-quote` fetches and displays a new quote and author.
8. The `#tweet-quote` link opens a tweet intent with the current quote.
9. The `#quote-box` is horizontally centered and visually appealing.

## Getting Started

### Prerequisites
- Node.js (v16 or later recommended)
- npm

### Installation
```bash
npm install
```

### Running the App
```bash
npm start
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Running Tests
```bash
npm test -- --watchAll=false
```
All tests should pass, including animation-related behaviors.

### Building for Production
```bash
npm run build
```

### Deployment
You can deploy the contents of the `build` folder to any static hosting provider (e.g., Netlify, Vercel, GitHub Pages, etc).

## Project Structure
```
quotes-machine/
├── public/
│   └── index.html
├── src/
│   ├── App.js        # Main React component
│   ├── App.css       # App styling & animations
│   ├── quotes.js     # Quotes data
│   ├── App.test.js   # Test suite
│   └── ...
└── README.md         # Project documentation
```

## Animation Details
- Quotes and authors fade out and in smoothly when a new quote is shown.
- Animations are implemented with CSS transitions and React state.

## Credits
- Quotes sourced from public domain and famous authors.
- Built by [Goner](https://github.com/thegoner24) for the FreeCodeCamp curriculum.

## License
This project is open source and available under the MIT License.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
