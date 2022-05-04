import { useState } from 'react';

interface ICodeXPBar {
  language: string;
  xp: number;
}

function CodeXPBar({ language, xp }: ICodeXPBar) {
  // Tailwind was misbehaving when embedding xp directly in the class name, so using this width variable was needed
  const width =
    xp === 1 ? 'w-1/4' : xp === 2 ? 'w-2/4' : xp === 3 ? `w-3/4` : '';

  return (
    <li className="flex flex-col sm:flex-row gap-1 sm:gap-8">
      <span className="w-1/3 text-pink-100 font-bold">{language}</span>
      <div className="w-full bg-pink-400 rounded-md">
        <div className={`${width} px-4 bg-pink-600 text-pink-100 rounded-md`}>
          {xp} years
        </div>
      </div>
    </li>
  );
}

export function Code() {
  const [compactView, setCompactView] = useState(true);
  return (
    <>
      <article className="flex flex-col w-full pt-10 gap-6">
        <h1 className="text-3xl xl:text-5xl font-bold text-pink-600">Code</h1>
        <section className="w-full ">
          <p>I build products that make postiive change in the world.</p>
          <p>
            I've helped enable tertiary education to those who previously would
            not have access at{' '}
            <a
              href="https://prodigyfinance.com/"
              className="text-pink-600 font-bold"
            >
              Prodigy Finance
            </a>
            .
          </p>
          <p>
            I'm currently helping NGOs run social impact campaigns via chat at{' '}
            <a href="https://www.turn.io/" className="text-pink-600 font-bold">
              Turn.io
            </a>
            .
          </p>
          <p>
            I've been learning to code since 2010. I've been writing code
            professionally since 2018 using:
          </p>
          <ul className="flex flex-col gap-4 mt-4 bg-pink-900 rounded-md p-6">
            <CodeXPBar language={'JavaScript'} xp={3} />
            <CodeXPBar language={'React'} xp={3} />
            <CodeXPBar language={'RubyOnRails'} xp={3} />
            <CodeXPBar language={'REST'} xp={3} />
            <CodeXPBar language={'GraphQL'} xp={2} />
            <CodeXPBar language={'Redux'} xp={2} />
            <CodeXPBar language={'TypeScript'} xp={1} />
          </ul>
        </section>
        <button
          onClick={() => setCompactView(!compactView)}
          className="self-center text-pink-600"
        >
          {compactView
            ? 'Find out the full story...'
            : "Whoah! That's enough reading for today."}
        </button>
        {!compactView && (
          <section className="w-full ">
            <h3 className="mt-4 text-xl xl:text-2xl">2018</h3>
            <p>
              I was responsible for building an online portal for our{' '}
              <span>investors to view their investment portfolios.</span> My
              team and I converted financial data and logic from google sheets
              into a <span>Rails application</span> with a clean user experience
              and detailed reports of their investment portfolio.
            </p>
            <p>
              After this, my team and I began building a{' '}
              <span>cash flow modelling tool</span> for our capital markets
              team. We designed and began building a system that
              <span>
                {' '}
                could project future cash inflows from student loan repayments
              </span>
              . The system was
              <span>
                {' '}
                an invaluable tool for informing expenditure decisions
              </span>{' '}
              based on these cash flows. I joined a different team before we
              completed the system, but I was a part of analysing the problem,
              designing the solution and the initial stages of implementation.
            </p>
            <p>
              My greatest achievement was learning Ruby On Rails and becoming
              the lead frontend developer in my team.
            </p>
            <h3 className="mt-4 text-xl xl:text-2xl">2019</h3>
            <p>
              I took a stronger focus in the frontend and began working with
              React. I was responsible for building out the front end of a
              student loan onboarding flow. I learnt React by completing two
              online courses focusing on React and Javascript by Wes Bos. I then
              honed my craft by building out the onboarding flow and working
              closely with my mentor. Although my primary focus was the
              frontend, the application was still in its early stages, and the
              architecture was undecided. I took some time to map out a
              potential architecture for all of the microservices required and
              their interactions. I used Entity Relationship and Sequence UML
              diagrams to describe my proposed architecture to the team. They
              agreed it was a logical architecture and were happy to implement
              it. We then built the Backend For Frontend API (BFF) and the other
              4 APIs using Rails and REST with Swagger to auto-document each
              endpoint. My greatest achievements were learning React and
              designing and implementing the architecture for our onboarding
              system.
            </p>
            <h3 className="mt-4 text-xl xl:text-2xl">2020</h3>
            <p>
              The year began with going live with our onboarding system. Shortly
              after launching, I performed a refactor of the BFF to improve the
              application's maintainability significantly. I was then the
              primary owner of the application. I handled the various bug fixes,
              tweaks and refinements that arose from going live. These
              improvements involved changes in all six applications and
              solidified my confidence traversing the stack. The rest of the
              year consisted of navigating large amounts of tech debt as my team
              and I undertook a complex refactor of the company's primary,
              monolithic Rails system. There were various changes needed to
              handle students delaying their studies and loan agreements due to
              Covid-19. My greatest achievement was embracing the full stack and
              becoming the domain expert for our onboarding system.
            </p>
            <h3 className="mt-4 text-xl xl:text-2xl">2021</h3>
            <p>
              I started the year working on a document verification service with
              Vue, GraphQL and Ruby On Rails. It enabled the Operations team to
              verify loan applications with ease and efficiency. It consisted of
              dynamic Vue component rendering using YAML configs, multiple file
              type conversions, PDF rendering and translation.
            </p>
            <p>
              I joined the team along with a team lead. We formed the start of
              the Frontend team. I dove into TypeScript, React and GraphQL more
              deeply. I got up to speed with the new stack and codebase. I began
              with some improvements to the chat interface, adding buttons and
              list interactivity to messages in a chat. I quickly graduated onto
              owning my own features, such as adding the ability to manage bulk
              message sends to 1000 users. I also began driving the
              implementation of a design system.
            </p>
            <h3 className="mt-4 text-xl xl:text-2xl">2022</h3>
            <p>
              The frontend team lead left at the end of 2021. He was my mentor
              and source of guidance in the new role, so this was unfortunate
              news. I was the only dedicated in-house member of the frontend
              team. It has turned out to be a blessing in disguise, as I have
              had the opportunity to lead the frontend space. I began driving
              the culture in the frontend team by facilitating our meetings,
              prompting healthy discussions and defining owned actions to help
              us make progress on priorities outside of our usual product
              development.
            </p>
          </section>
        )}
      </article>
    </>
  );
}
