import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header logo
        <nav>About, Portfolio, Blog, Contact</nav>
      </header>
      <main>
        <p>Hi, I'm Devon Neill.</p>
        <p>I'm a frontend developer.</p>
        <p>
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            See my portfolio
          </a>
        </p>
      </main>
      <footer>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        {' | '}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </footer>
    </div>
  );
}

export default App;
