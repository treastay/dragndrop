const BusinessTemplate = () => {
    return (
      <div className="bg-gray-50 font-sans">
        {/* Hero Section */}
        <header className="bg-blue-700 text-white text-center py-16 px-6 hover:scale-105 transition-all">
          <h1 className="text-5xl font-extrabold">Boost Your Business</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            We help businesses grow with high-quality websites & marketing strategies.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition">
            Get Started
          </button>
        </header>
  
        {/* Services Section */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-gray-600">We build modern, responsive websites.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">SEO & Marketing</h3>
              <p className="text-gray-600">Boost traffic and grow your audience.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">E-commerce Solutions</h3>
              <p className="text-gray-600">Sell online with powerful store features.</p>
            </div>
          </div>
        </section>
  
        {/* Testimonials */}
        <section className="bg-gray-100 py-12 px-6">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">What Our Clients Say</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="italic text-lg text-gray-700">
              "This company transformed our online presence and increased our sales significantly!"
            </p>
            <p className="font-bold mt-2 text-blue-700">- Alex Smith, CEO</p>
          </div>
        </section>
      </div>
    );
  };
  
  export default BusinessTemplate;
  