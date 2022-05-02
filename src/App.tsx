import './App.css';
import { useState } from 'react';
import { PAGES } from './utils';
import { Code, Contact, Home, Music } from './pages';
import { Navigation, SocialLinks } from './components';

function App() {
  const [page, setPage] = useState(PAGES.HOME);

  return (
    <div className="flex flex-col min-h-screen overflow-scroll text-white">
      <header className="flex-none w-full sticky top-0  bg-gray-800">
        <Navigation page={page} setPage={setPage} />
      </header>
      <main className="flex flex-grow gap-6 w-11/12 md:w-9/12 mx-auto">
        {page === PAGES.HOME && <Home setPage={setPage} />}
        {page === PAGES.CODE && <Code />}
        {page === PAGES.MUSIC && <Music />}
        {page === PAGES.CONTACT && <Contact />}
      </main>
      <footer className="w-full sticky bottom-0 p-6 xl:px-24 xl:pb-24 text-2xl mx-auto bg-gray-800">
        <SocialLinks />
      </footer>
    </div>
  );
}

export default App;
