

export default function App() {
  return (
    <section className="w-full  flex flex-col lg:flex-row gap-7 items-center justify-between ">
      <div className="flex flex-col items-start max-w-xl">
        <h4 className="text-3xl mb-2">Hey, I am tomi</h4>
        <h1 className="text-blue-700 font-bold text-6xl md:text-8xl">
          Front<span className="text-black">end</span>
        </h1>
        <h2 className="text-6xl md:text-8xl font-bold mb-5">Developer</h2>
        <p className="text-gray-500 mb-6">
          I am a frontend developer based in Nigeria. I build responsive and
          interactive websites with modern frontend technologies, turning ideas
          into clean and functional experiences.
        </p>
        <div className="flex gap-6">
         
         
        </div>
      </div>

      <div className="w-80 h-80 md:w-96 md:h-96 border-2 border-blue-700 rounded-full flex items-center justify-center p-4">
        <div className="w-full h-full border-2 border-blue-700 rounded-full flex items-center justify-center">
          <img
            src="/tomi.jpeg"
            alt="Tomi"
            className="w-4/5 h-4/5 object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
