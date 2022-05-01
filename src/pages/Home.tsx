import { PAGES } from '../utils';

interface IHome {
  setPage: (page: PAGES) => void;
}

export function Home({ setPage }: IHome) {
  return (
    <article className="flex flex-col items-start justify-center w-full font-mono">
      <p className="text-l md:text-xl md:pb-10">Hi, my name is</p>
      <p className="text-5xl md:text-6xl md:pb-10">Devon Neill.</p>
      <p className="text-2xl md:text-4xl">
        I write{' '}
        <button
          onClick={() => setPage(PAGES.CODE)}
          className="text-pink-600 hover:text-pink-500 hover:underline"
        >
          code
        </button>{' '}
        &{' '}
        <button
          onClick={() => setPage(PAGES.MUSIC)}
          className="text-pink-600 hover:text-pink-500 hover:underline"
        >
          music
        </button>
        .
      </p>
    </article>
  );
}
