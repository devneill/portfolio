import './App.css';
import { FaGithub, FaBlog, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <div className="flex flex-col gap-6 relative overflow-scroll h-screen px-6 xl:px-24  bg-gray-800 text-white ">
      <header className="w-full sticky top-0 p-6 xl:p-16">
        <span>Devneill</span>
        <nav className="float-right">
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
      <main className="flex flex-col gap-6 w-full md:w-9/12 mx-auto">
        <article>
          <p>
            Hi, I'm <span>Devon</span>.
          </p>
          <p>I'm a developer.</p>
        </article>
        <h1 className="text-3xl xl:text-5xl font-bold text-pink-600">About</h1>
        <article className="flex flex-col md:flex-row justify-between text-center gap-6">
          <section className="p-10 border rounded-md border-pink-600">
            <h2 className="text-3xl xl:text-5xl font-bold text-pink-600">
              Experience
            </h2>
            <ul>
              <li>TypeScript - 1 years</li>
              <li>GraphQl - 2 years</li>
              <li>Redux - 2 years</li>
              <li>React - 3 years</li>
              <li>Ruby on Rails - 3 years </li>
            </ul>
          </section>
          <section className="p-10 border rounded-md border-pink-600">
            <h2 className="text-3xl xl:text-5xl font-bold text-pink-600">
              Personality
            </h2>
            <ul>
              <li>General amazingness</li>
              <li>Super cool</li>
              <li>Inredibly awesome</li>
              <li>Quite nice</li>
            </ul>
          </section>
        </article>
        <h1 className="text-3xl xl:text-5xl font-bold text-pink-600">
          Portfolio
        </h1>
        <article className="flex flex-col md:flex-row justify-between text-center gap-6">
          <section className="p-10 border rounded-md border-pink-600">
            <h2 className="text-3xl xl:text-5xl font-bold text-pink-600">
              Turn
            </h2>
            <ul>
              <li>TypeScript - 1 years</li>
              <li>GraphQl - 2 years</li>
              <li>Redux - 2 years</li>
              <li>React - 3 years</li>
              <li>Ruby on Rails - 3 years </li>
            </ul>
          </section>
          <section className="p-10 border rounded-md border-pink-600">
            <h2 className="text-3xl xl:text-5xl font-bold text-pink-600">
              Prodigy
            </h2>
            <ul>
              <li>General amazingness</li>
              <li>Super cool</li>
              <li>Inredibly awesome</li>
              <li>Quite nice</li>
            </ul>
          </section>
        </article>
        <h1 className="text-3xl xl:text-5xl font-bold text-pink-600">
          Contact
        </h1>
        <form className="flex flex-col md:flex-row justify-between text-center gap-6">
          form here
        </form>
      </main>
      <footer className="w-full sticky bottom-0 p-6 xl:p-24 text-2xl mx-auto">
        <nav className="flex justify-center">
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
