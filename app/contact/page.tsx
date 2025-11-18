export default function Contact() {
  return (
    <section id="contact" className="bg-white w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900">Get In Touch</h1>
          <p className="text-gray-600 mt-2">
            Have a question or want to work together? Let's connect!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl border border-gray-200 mb-5">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-xl text-xl">
                ✉️
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Email</p>
                <p className="text-gray-700">ajaykumar23saharsa.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl border border-gray-200 mb-8">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-xl text-xl">
                📍
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Location</p>
                <p className="text-gray-700">Noida, Uttar Pradesh</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Social Links
            </h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 border rounded-lg flex justify-center items-center text-gray-700 hover:bg-gray-100">
                🐱
              </button>
              <button className="w-10 h-10 border rounded-lg flex justify-center items-center text-gray-700 hover:bg-gray-100">
                💼
              </button>
              <button className="w-10 h-10 border rounded-lg flex justify-center items-center text-gray-700 hover:bg-gray-100">
                🐦
              </button>
            </div>
          </div>
          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8">
            <div className="mb-4">
              <label className="text-sm text-gray-600 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600 font-medium">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
            <div className="mb-5">
              <label className="text-sm text-gray-600 font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              ></textarea>
            </div>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2">
              <span>📨</span> Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
