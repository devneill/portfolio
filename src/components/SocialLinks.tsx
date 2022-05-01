import { FaGithub, FaBlog, FaTwitter } from 'react-icons/fa';

export function SocialLinks() {
  return (
    <nav className="flex justify-end ">
      <a
        className="App-link hover:text-pink-600"
        href="https://github.com/devneillza"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub title="Github" />
      </a>
      <a
        className="App-link hover:text-pink-600"
        href="https://devneill.hashnode.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBlog title="Blog" />
      </a>
      <a
        className="App-link hover:text-pink-600"
        href="https://twitter.com/devneill"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter title="Twitter" />
      </a>
    </nav>
  );
}
