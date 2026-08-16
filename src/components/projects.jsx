

export default function App() {
  

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center gap-12 py-16 px-4">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-blue-700">My Projects</h2>
        <p className="text-gray-500 text-lg">
          Here are the projects that I have worked on
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-items-center">
        {/* Card 1: Digital Clock */}
        <div className="w-full max-w-sm flex flex-col bg-white shadow-xl rounded-2xl p-4 border border-transparent hover:border-blue-700 transition-all duration-300 text-left">
          <img
            src="/one.png"
            alt="Digital Clock Project"
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-blue-700 font-bold text-xl mb-2">
            Digital Clock
          </h3>
          <p className="text-gray-600 text-sm `flex-grow mb-4">
            A website where you can set timers and alarms while viewing a live
            clock. It features audio alerts for when time is up. Built with
            HTML, CSS, and JS.
          </p>
          <a
            href="https://tomitimer.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 font-medium hover:underline mt-auto"
          >
            See project →
          </a>
        </div>

        {/* Card 2: Prestige */}
        <div className="w-full max-w-sm flex flex-col bg-white shadow-xl rounded-2xl p-4 border border-transparent hover:border-blue-700 transition-all duration-300 text-left">
          <img
            src="/two.png"
            alt="Prestige Project"
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-blue-700 font-bold text-xl mb-2">Prestige</h3>
          <p className="text-gray-600 text-sm `flex-grow mb-4">
            A responsive landing page displaying watches with login
            functionality. It features a custom entry preloader. Built with
            HTML, Tailwind CSS, and JS.
          </p>
          <a
            href="https://prestigewatch.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 font-medium hover:underline mt-auto"
          >
            See project →
          </a>
        </div>

        {/* Card 3: Aceup */}
        <div className="w-full max-w-sm flex flex-col bg-white shadow-xl rounded-2xl p-4 border border-transparent hover:border-blue-700 transition-all duration-300 text-left">
          <img
            src="/three.png"
            alt="Aceup Project"
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-blue-700 font-bold text-xl mb-2">Aceup</h3>
          <p className="text-gray-600 text-sm `flex-grow mb-4">
            A landing page for an AI tutor platform that helps users create
            flashcards, take quizzes, and track learning progress. Built with
            React and Tailwind CSS.
          </p>
          <a
            href="https://studywithaceup.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 font-medium hover:underline mt-auto"
          >
            See project →
          </a>
        </div>

        {/* Card 4: Moviehub */}
        <div className="w-full max-w-sm flex flex-col bg-white shadow-xl rounded-2xl p-4 border border-transparent hover:border-blue-700 transition-all duration-300 text-left">
          <img
            src="/four.png"
            alt="Moviehub Project"
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-blue-700 font-bold text-xl mb-2">Moviehub</h3>
          <p className="text-gray-600 text-sm `flex-grow mb-4">
            A web application integrated with the OMDB Movies API to search
            details for any film. Built with HTML, CSS, and JS.
          </p>
          <a
            href="https://movieapibytomi.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 font-medium hover:underline mt-auto"
          >
            See project →
          </a>
        </div>
      </section>

      
      
    </section>
  );
}
