import { FaGithub, FaSpotify, FaTwitter } from 'react-icons/fa';

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
        href="https://open.spotify.com/artist/6XmLAJgOojHUvGzLv4Yjpn?si=B1D_006GTEiHlv17aig1JA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify title="Spotify" />
      </a>
      {/* Add this when the blog is ready */}
      {/* <a
        className="App-link hover:text-pink-600"
        href="https://devneill.hashnode.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBlog title="Blog" />
      </a> */}
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
