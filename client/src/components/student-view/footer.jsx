
const Footer = () => {
  return (
    <footer className="bg-[#1c1d1f] text-gray-200 pt-12 pb-0 mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top multi-column links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="font-bold mb-3 text-white">Certifications by Skill</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Cybersecurity Certification</a></li>
              <li><a href="#" className="hover:underline">Project Management Certification</a></li>
              <li><a href="#" className="hover:underline">Cloud Certification</a></li>
              <li><a href="#" className="hover:underline">Data Analytics Certification</a></li>
              <li><a href="#" className="hover:underline">HR Management Certification</a></li>
              <li><a href="#" className="hover:underline">See all Certifications</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-white">Data Science</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Data Science</a></li>
              <li><a href="#" className="hover:underline">Python</a></li>
              <li><a href="#" className="hover:underline">Machine Learning</a></li>
              <li><a href="#" className="hover:underline">ChatGPT</a></li>
              <li><a href="#" className="hover:underline">Deep Learning</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-white">Communication</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Communication Skills</a></li>
              <li><a href="#" className="hover:underline">Presentation Skills</a></li>
              <li><a href="#" className="hover:underline">Public Speaking</a></li>
              <li><a href="#" className="hover:underline">Writing</a></li>
              <li><a href="#" className="hover:underline">PowerPoint</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-white">Business Analytics & Intelligence</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Microsoft Excel</a></li>
              <li><a href="#" className="hover:underline">SQL</a></li>
              <li><a href="#" className="hover:underline">Microsoft Power BI</a></li>
              <li><a href="#" className="hover:underline">Data Analysis</a></li>
              <li><a href="#" className="hover:underline">Business Analysis</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom grouped links */}
        <div className="border-t border-gray-700 pt-8 pb-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-bold mb-2 text-white">About</h4>
            <ul className="space-y-1">
                <li><a href="#" className="hover:text-purple-400">About us</a></li>
                <li><a href="#" className="hover:text-purple-400">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400">Contact us</a></li>
                <li><a href="#" className="hover:text-purple-400">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400">Investors</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-white">Discover Kattraan</h4>
            <ul className="space-y-1">
                <li><a href="#" className="hover:text-purple-400">Get the app</a></li>
                <li><a href="#" className="hover:text-purple-400">Teach on Kattraan</a></li>
                <li><a href="#" className="hover:text-purple-400">Plans and Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400">Affiliate</a></li>
                <li><a href="#" className="hover:text-purple-400">Help and Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-white">Kattraan for Business</h4>
            <ul className="space-y-1">
                <li><a href="#" className="hover:text-purple-400">Kattraan Business</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-white">Legal & Accessibility</h4>
            <ul className="space-y-1">
                <li><a href="#" className="hover:text-purple-400">Accessibility statement</a></li>
                <li><a href="#" className="hover:text-purple-400">Privacy policy</a></li>
                <li><a href="#" className="hover:text-purple-400">Sitemap</a></li>
                <li><a href="#" className="hover:text-purple-400">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <div className="flex items-center mb-2 md:mb-0">
              <span className="font-bold text-lg text-gray-200">Kattraan</span>
              <span className="ml-2">© {new Date().getFullYear()} Kattraan, Inc.</span>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <span>Cookie settings</span>
            <span className="hidden md:inline-block">|</span>
            <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /></svg>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
