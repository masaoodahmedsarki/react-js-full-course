
import React from "react";

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: "HTML Fundamentals",
      description: "Learn HTML structure, elements, forms and semantic tags.",
      level: "Beginner",
      duration: "2 Hours",
      category: "HTML",
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 2,
      title: "CSS Masterclass",
      description: "Master CSS styling, Flexbox, Grid and responsive design.",
      level: "Beginner",
      duration: "4 Hours",
      category: "CSS",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      description: "Understand variables, functions, arrays and ES6 concepts.",
      level: "Intermediate",
      duration: "6 Hours",
      category: "JavaScript",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 4,
      title: "React.js Complete Guide",
      description: "Learn components, props, state, hooks and React projects.",
      level: "Intermediate",
      duration: "8 Hours",
      category: "React",
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      id: 5,
      title: "Next.js Development",
      description: "Build modern applications using Next.js and routing.",
      level: "Advanced",
      duration: "10 Hours",
      category: "Next.js",
      color: "bg-gray-200 text-gray-800",
    },
    {
      id: 6,
      title: "Node.js Backend",
      description: "Learn server-side development, Express and REST APIs.",
      level: "Advanced",
      duration: "7 Hours",
      category: "Node.js",
      color: "bg-green-100 text-green-700",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Learn & Grow
          </span>

          <h1 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Explore Our Tutorials
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Improve your coding skills with practical tutorials
            and step-by-step programming guides.
          </p>
        </div>

        {/* Tutorial Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className={`rounded-lg px-4 py-2 text-sm font-bold ${tutorial.color}`}>
                  {tutorial.category}
                </span>

                <span className="text-sm text-gray-400">
                  {tutorial.duration}
                </span>
              </div>

              <h2 className="mb-3 text-xl font-bold text-gray-900">
                {tutorial.title}
              </h2>

              <p className="mb-6 min-h-12 text-sm leading-6 text-gray-500">
                {tutorial.description}
              </p>

              <div className="mb-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-sm font-medium text-gray-600">
                  {tutorial.level}
                </span>

                <span className="text-sm text-green-600">
                  Free Tutorial
                </span>
              </div>

              <button
                onClick={() => alert(`Starting ${tutorial.title}`)}
                className="w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                Start Learning →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tutorials;
