const Footer = () => {
  return (
    <footer className="bg-gradient-to-r  from-gray-900 to-gray-800 text-gray-300 px-6 py-1  border-t border-gray-700">
      <div className="text-center mt-12 mb-6 md:mb-0">
        <div className="text-sm text-gray-500 mb-1">
          © {new Date().getFullYear()} Seminar Library. All rights reserved by
        </div>
        <a
          href="https://www.facebook.com/JoyTechGuru"
          className="text-lg font-bold hover:scale-105 transition-transform"
          target="_blank"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Joy Tech Guru
          </span>
          <span className="ml-1 text-yellow-500"></span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
