

export default function About() {
  // Renamed from App to avoid component naming conflicts
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center gap-8 py-6">
      <h2 className="text-4xl text-blue-700 font-bold">Designs</h2>
      <ul className="w-11/12 flex justify-center  flex-col lg:flex-row   items-center gap-4 ">
        <li className="border-2 border-blue-700 px-4 py-2 rounded-2xl bg-white">
          Landing page
        </li>
        <li className="border-2 border-blue-700 px-4 py-2  rounded-2xl  bg-white">
          Api website
        </li>
        <li className="border-2 border-blue-700 px-4 py-2  rounded-2xl  bg-white">
          Multi-page website
        </li>
      </ul>
      <h2 className="text-4xl text-blue-700 font-bold">Technologies</h2>
      <ul className="w-11/12 flex justify-center gap-4 flex-col lg:flex-row  items-center ">
        <li className="border-2 border-blue-700 px-4 py-2  rounded-2xl bg-white">
          HTML
        </li>
        <li className="border-2 border-blue-700 px-4 py-2  rounded-2xl  bg-white">
          CSS
        </li>
        <li className="border-2 border-blue-700 px-4 py-2  rounded-2xl  bg-white">
          JS
        </li>
        <li className="border-2 border-blue-700 px-4 py-2  rounded-2xl  bg-white">
          C#
        </li>
        <li className="border-2 border-blue-700 px-4 py-2  rounded-2xl  bg-white">
          C++
        </li>
        <li className="border-2 border-blue-700 px-4 py-2  rounded-2xl  bg-white">
          React
        </li>
        <li className="border-2 border-blue-700 px-4 py-2  rounded-2xl  bg-white">
          Tailwind CSS
        </li>
      </ul>
    </section>
  );
}
