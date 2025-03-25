const PortfolioTemplate = () => {
    return (
      <div className="bg-gray-50 font-sans">
        {/* Hero Section */}
        <header className="bg-purple-600 text-white text-center py-16 px-6">
          <h1 className="text-5xl font-extrabold">I'm Jane Doe</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">Creative Web Designer & Developer</p>
        </header>
  
        {/* About Section */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">About Me</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            I specialize in building beautiful and functional websites. With years of experience, I turn ideas into reality.
          </p>
        </section>
  
        {/* Portfolio Gallery */}
        <section className="py-12 px-6">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">My Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img src="https://via.placeholder.com/300" className="w-full rounded shadow" alt="Project" />
            <img src="https://via.placeholder.com/300" className="w-full rounded shadow" alt="Project" />
            <img src="https://via.placeholder.com/300" className="w-full rounded shadow" alt="Project" />
          </div>
        </section>
  
        {/* Contact */}
        <footer className="bg-gray-800 text-white text-center py-8 px-6">
          <p>📩 Email: <a href="mailto:hello@janedoe.com" className="underline">hello@janedoe.com</a></p>
          <p>📍 Location: New York, USA</p>
        </footer>
      </div>
    );
  };
  
  export default PortfolioTemplate;
  