import { PAGES } from '../utils';

interface INavigation {
  page: PAGES;
  setPage: (page: PAGES) => void;
}

export function Navigation({ page, setPage }: INavigation) {
  return (
    <nav className="flex flex-row justify-between text-xl xl:text-2xl">
      <button
        className={`basis-3/6 py-4 xl:py-10 px-4 text-left ${
          page === PAGES.HOME
            ? 'border-b-4 border-pink-600 '
            : 'hover:text-pink-600'
        }`}
        onClick={() => setPage(PAGES.HOME)}
      >
        Devneill
      </button>
      <button
        className={`basis-1/6 py-4 px-4 ${
          page === PAGES.CODE
            ? 'border-b-4 border-pink-600 '
            : 'hover:text-pink-600'
        }`}
        onClick={() => setPage(PAGES.CODE)}
      >
        Code
      </button>
      <button
        className={`basis-1/6 py-4 px-4 ${
          page === PAGES.MUSIC
            ? 'border-b-4 border-pink-600 '
            : 'hover:text-pink-600'
        }`}
        onClick={() => setPage(PAGES.MUSIC)}
      >
        Music
      </button>
      <button
        className={`basis-1/6 py-4 px-4 ${
          page === PAGES.CONTACT
            ? 'border-b-4 border-pink-600'
            : 'hover:text-pink-600'
        }`}
        onClick={() => setPage(PAGES.CONTACT)}
      >
        Contact
      </button>
    </nav>
  );
}
