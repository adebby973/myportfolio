import { Link } from "react-router-dom";

export default function About() {
  // Renamed from App to avoid component naming conflicts
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col justify-center items-center text-center gap-8 py-6">
      {/* 1. TYPOGRAPHY HIERARCHY: Added a clear, descriptive section heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-purple-900 tracking-tight">
        My Story
      </h2>

      {/* 2. READABILITY: Upgraded layout for long-form narrative text */}
      <p className="text-base md:text-lg text-slate-700 leading-relaxed text-justify md:text-center max-w-2xl px-2">
        <span className="text-5xl md:text-6xl font-serif font-bold text-purple-700 align-top float-left mr-2 mt-1 leading-none">
          T
        </span>
        echnology is an amazing and wide field. My name is Adebisi Oluwatomisin,
        and I am a Software Engineering student at Babcock University. This is
        my story. From a young age, I always wanted to study Medicine. I dreamed
        of becoming a doctor, helping people who were sick, and learning how to
        treat patients. You might be wondering, “So how did I end up studying
        Software Engineering?” During an excursion in secondary school, I was
        introduced to technology and automation. It immediately caught my
        attention and sparked my curiosity about coding and how technology could
        be used to solve problems. I started my tech journey in SS2, beginning
        with HTML and web design. I eventually took a break, but a year later, I
        decided to continue my journey. I attended a tech academy where I
        learned{" "}
        <span className="font-semibold text-purple-900 bg-purple-50 px-1.5 py-0.5 rounded">
          HTML, CSS, JavaScript, and React
        </span>
        . As I became more comfortable with programming through JavaScript, I
        became curious about other programming languages and started learning{" "}
        <span className="font-semibold text-purple-900 bg-purple-50 px-1.5 py-0.5 rounded">
          C# and C++
        </span>{" "}
        as well. My journey is still continuing. I'm constantly learning,
        experimenting, building projects, and challenging myself to become a
        better developer. One of the biggest lessons this journey has taught me
        is that consistency matters. You don't have to know everything at the
        beginning—you just have to keep learning and keep going.
      </p>

      {/* 3. CALL TO ACTION: Enhanced contrast and spacing for the path link */}
      <div className="flex gap-6">
        
        <Link
          to="/home" // Updated path targets next logical milestone
           className="border-2 border-purple-700 text-purple-700 px-8 py-3.5 rounded-xl font-medium shadow-sm hover:bg-purple-50 active:scale-95 transition-all duration-200"
        >
          back
        </Link>
        <Link
          to="/projects" // Updated path targets next logical milestone
          className="bg-purple-700 text-white px-8 py-3.5 rounded-xl font-medium shadow-md hover:bg-purple-800 hover:shadow-lg active:scale-95 transition-all duration-200 w-fit"
        >
          View My Projects
        </Link>
      </div>
    </section>
  );
}
