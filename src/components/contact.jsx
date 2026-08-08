import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col justify-center items-center text-center gap-8 py-6">
      <div className="flex flex-col gap-4 w-full max-w-md">
        <h2 className="font-bold text-4xl"> Contact me </h2>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter email"
          autoComplete="email"
          className="border-2 border-purple-700 text-purple-700 px-8 py-3.5 rounded-xl font-medium shadow-sm hover:bg-purple-50 active:scale-95 transition-all duration-200 outline-none"
        />
        <textarea
          name="message"
          id="message"
          placeholder="enter message"
          className="border-2 border-purple-700 text-purple-700 px-8 py-3.5 rounded-xl font-medium shadow-sm hover:bg-purple-50 active:scale-95 transition-all duration-200 outline-none resize-none"
          rows={4}
        ></textarea>
      </div>
      <a
        href="mailto:tomisinadebisi09@gmail.com"
        className="bg-purple-700 text-white px-8 py-3.5 rounded-xl font-medium shadow-md hover:bg-purple-800 hover:shadow-lg active:scale-95 transition-all duration-200 w-fit"
      >
        send mail
      </a>
      <Link
        to="/home" // Updated path targets next logical milestone
        className="border-2 border-purple-700 text-purple-700 px-8 py-3.5 rounded-xl font-medium shadow-sm hover:bg-purple-50 active:scale-95 transition-all duration-200"
      >
        back home
      </Link>
    </div>
  );
}
