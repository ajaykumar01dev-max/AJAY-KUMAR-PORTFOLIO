export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo + About */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">AJAY KUMAR</h2>
                    <p className="text-gray-400">
                        Full Stack Developer passionate about building modern web applications with clean UI and smooth user experience.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#about" className="hover:text-white">About</a></li>
                        <li><a href="#projects" className="hover:text-white">Projects</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
                    <ul className="space-y-2">
                        <li>Email: ajaykumar23saharsa@gmail.com</li>
                        <li>Phone: +91 6299368862</li>
                        <li>Location: India</li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">GitHub</a>
                        <a href="#" className="hover:text-white">LinkedIn</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center mt-10 border-t border-gray-700 pt-6 text-gray-500">
                © {new Date().getFullYear()} Ajay Kumar. All rights reserved.
            </div>
        </footer>

    );
}