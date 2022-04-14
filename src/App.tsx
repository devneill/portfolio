import './App.css';
import { FaGithub, FaBlog, FaTwitter } from 'react-icons/fa';

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
      </main>
      <footer className="App-footer">
        <nav className="App-footer-nav">
          <a
            className="App-link"
            href="https://github.com/devneillza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub title="Github" />
          </a>
          <a
            className="App-link"
            href="https://devneill.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBlog title="Blog" />
          </a>
          <a
            className="App-link"
            href="https://twitter.com/devneill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter title="Twitter" />
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
