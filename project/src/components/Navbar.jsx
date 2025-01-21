function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Let's Read" className="h-8" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-700">Home</a>
            <a href="#" className="text-gray-900 hover:text-gray-700">Join Us</a>
            <a href="#" className="text-gray-900 hover:text-gray-700">Customer Care</a>
            <a href="#" className="text-gray-900 hover:text-gray-700">Reach Out</a>
            <a href="#" className="text-gray-900 hover:text-gray-700">About Us</a>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Subscribe
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center">
          <input
            type="text"
            placeholder="Sign Up for Our Paris Olympics Newsletter"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button className="ml-2 p-2 bg-gray-100 rounded-md">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}