import { Link } from "react-router-dom";
export default function App(){
    return (
      <div className="w-10/12 mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center gap-6">
        <h2 className="text-4xl md:text-6xl font-bold text-purple-900 m-4">
          Here Is My Portfolio
        </h2>
        <Link
          to="/home"
          className="bg-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors w-fit"
        >
          Begin
        </Link>
      </div>
    );
}