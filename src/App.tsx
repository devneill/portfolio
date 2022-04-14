import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </nav>
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
        <nav>
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
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
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
        </nav>
      </footer>
    </div>
  );
}

export default App;
