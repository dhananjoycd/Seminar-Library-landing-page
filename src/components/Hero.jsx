const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white px-4 py-4 md:py-10">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://media.architecturaldigest.com/photos/591c663052020c543316673e/16:9/w_3200,h_1800,c_limit/0915-AD-DLAM02-01.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/50 backdrop-blur-sm"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col gap-10 items-center mb-5">
        {/* Top Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-white/20 to-indigo-700 text-white py-12 px-6 md:px-16 rounded-3xl shadow-2xl w-full">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
              📚 Explore Knowledge & Discovery —{" "}
              <span className="text-yellow-400">RU Mathematics </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Welcome to the Department of Mathematics at the{" "}
              <span className="text-yellow-300 font-semibold">
                University of Rajshahi
              </span>
              , one of the oldest and most esteemed departments in the country.
              Known for its academic excellence and vibrant research
              environment, the department nurtures inquisitive minds through
              undergraduate, graduate, and doctoral programs.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className=" bg-white/90 backdrop-blur-md w-full max-w-3xl mx-auto p-6 md:p-10 rounded-2xl shadow-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            📘 Manage Your Seminar Books Easily
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Our{" "}
            <span className="text-pink-700 font-semibold">Mini Library</span> is
            a vital part of this academic journey, offering a curated selection
            of renowned{" "}
            <span className="text-pink-700 font-medium">textbooks</span>,
            specialized
            <span className="text-pink-700 font-medium">
              {" "}
              reference materials
            </span>
            , and interdisciplinary resources. Whether you're delving into
            mathematical theory or exploring its applications, you'll find
            resources to support your growth.
          </p>
          <p className="my-3 text-gray-700 md:text-lg">
            Students and faculty can enjoy quiet study, borrow select titles,
            and also tap into a comprehensive digital collection of
            <span className="text-blue-800 font-medium"> e-books</span> and
            <span className="text-blue-800 font-medium"> e-journals</span> via
            the university’s central library — accessible anytime, anywhere.
          </p>
          <a
            href="/seminar"
            className="fixed -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full text-lg transition duration-300 shadow-xl z-50"
          >
            Go to Seminar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
