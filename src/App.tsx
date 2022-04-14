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
      <main className="App-main">
        <p className="App-text">
          Hi, I'm <span className="App-highlight">Devon Neill</span>.
        </p>
        <p>I'm a frontend developer.</p>
        <p>
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Why am I here?
          </a>
        </p>
      </main>
      <footer className="App-footer">
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
