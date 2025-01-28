function SideBar() {
    return (
      <div className="w-60 h-screen bg-white border-r border-gray-300 p-4 text-black">
        {/* Top Links */}
        <nav className="space-y-1">
          <a
            href="/"
            className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-200 font-medium"
          >
            <span className="icon-placeholder"></span>
            <span>Home</span>
          </a>
          <a
            href="/shorts"
            className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-200 font-medium"
          >
            <span className="icon-placeholder"></span>
            <span>Shorts</span>
          </a>
          <a
            href="/subscriptions"
            className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-200 font-medium"
          >
            <span className="icon-placeholder"></span>
            <span>Subscriptions</span>
          </a>
        </nav>
  
        {/* Divider */}
        <hr className="my-4 border-gray-300" />
  
        {/* You Section */}
        <div className="space-y-1">
          <p className="text-gray-600 px-3 text-sm font-medium">You</p>
          <a
            href="#"
            className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-200 font-medium"
          >
            <span className="icon-placeholder"></span>
            <span>History</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-200 font-medium"
          >
            <span className="icon-placeholder"></span>
            <span>Playlists</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-200 font-medium"
          >
            <span className="icon-placeholder"></span>
            <span>Your videos</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-200 font-medium"
          >
            <span className="icon-placeholder"></span>
            <span>Watch Later</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-200 font-medium"
          >
            <span className="icon-placeholder"></span>
            <span>Liked videos</span>
          </a>
        </div>
  
        {/* Divider */}
        <hr className="my-4 border-gray-300" />
  
        {/* Subscriptions Section */}
        <div>
          <p className="text-gray-600 px-3 text-sm font-medium">Subscriptions</p>
          <div className="space-y-1">
            {[
              "penguinz0",
              "Hamzah Saadah",
              "Mr. Believer",
              "MrLowlander",
              "xisumavoid",
              "EdTalenti",
              "Sambucha",
            ].map((channel) => (
              <a
                href="#"
                key={channel}
                className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-200 font-medium"
              >
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span>{channel}</span>
              </a>
            ))}
          </div>
          <a
            href="#"
            className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-200 font-medium"
          >
            <span className="icon-placeholder"></span>
            <span>Show more</span>
          </a>
        </div>
      </div>
    );
  }
  
  export default SideBar;
  