
import React from "react";

const Courses = () => {

  const courses = [
    {
      id: 1,
      title: "Frontend Web Development",
      description: "Learn HTML, CSS, JavaScript and build responsive websites.",
      category: "Frontend",
      duration: "8 Weeks",
      level: "Beginner",
      price: "$49",
      icon: "🌐",
      color: "bg-blue-100",
    },
    {
      id: 2,
      title: "React JS Development",
      description: "Master React components, props, hooks and real-world projects.",
      category: "React JS",
      duration: "6 Weeks",
      level: "Intermediate",
      price: "$59",
      icon: "⚛️",
      color: "bg-cyan-100",
    },
    {
      id: 3,
      title: "Node.js Backend",
      description: "Learn Node.js, Express.js, REST APIs and backend development.",
      category: "Backend",
      duration: "8 Weeks",
      level: "Intermediate",
      price: "$69",
      icon: "🟢",
      color: "bg-green-100",
    },
    {
      id: 4,
      title: "Next.js Complete Course",
      description: "Build modern full-stack applications with Next.js.",
      category: "Next.js",
      duration: "10 Weeks",
      level: "Advanced",
      price: "$79",
      icon: "▲",
      color: "bg-gray-200",
    },
    {
      id: 5,
      title: "MongoDB Database",
      description: "Understand NoSQL databases, CRUD operations and queries.",
      category: "Database",
      duration: "4 Weeks",
      level: "Beginner",
      price: "$39",
      icon: "🍃",
      color: "bg-emerald-100",
    },
    {
      id: 6,
      title: "Full Stack Development",
      description: "Create complete applications using MERN Stack.",
      category: "Full Stack",
      duration: "12 Weeks",
      level: "Advanced",
      price: "$99",
      icon: "💻",
      color: "bg-purple-100",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Our Learning Programs
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Explore Our Courses
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Learn in-demand technologies, develop practical skills
            and build your future in the world of technology.
          </p>

        </div>

        {/* Courses Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {courses.map((course) => (

            <div
              key={course.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Card Top */}
              <div className={`flex h-40 items-center justify-center ${course.color}`}>
                <span className="text-6xl font-bold transition duration-300 group-hover:scale-125">
                  {course.icon}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6">

                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    {course.category}
                  </span>

                  <span className="text-sm text-gray-400">
                    {course.duration}
                  </span>
                </div>

                <h2 className="mb-3 text-xl font-bold text-gray-900">
                  {course.title}
                </h2>

                <p className="mb-6 text-sm leading-6 text-gray-500">
                  {course.description}
                </p>

                <div className="mb-5 flex items-center justify-between border-t border-gray-100 pt-5">

                  <span className="text-sm text-gray-500">
                    {course.level}
                  </span>

                  <span className="text-2xl font-bold text-blue-600">
                    {course.price}
                  </span>

                </div>

                <button
                  onClick={() => alert(`You selected ${course.title}`)}
                  className="w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition hover:bg-blue-600"
                >
                  Enroll Now →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Courses;
