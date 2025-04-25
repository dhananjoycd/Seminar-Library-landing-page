const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 px-6 py-1 border-t border-gray-700">
      <div className="text-center my-5 md:mb-0">
        <div className="text-sm text-gray-500 mb-1">
          © {new Date().getFullYear()} Department of Mathematics, University of
          Rajshahi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
