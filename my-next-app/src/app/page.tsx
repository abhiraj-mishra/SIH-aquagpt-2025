// app/page.tsx
export default function Home() {
  return (
    <div className="flex h-screen bg-[#1a1a1a] text-white">
      {/* Sidebar */}
      <div className="w-72 bg-[#2a2a2a] p-5 flex flex-col rounded-2xl m-4 mr-0">
        <div className="flex items-center gap-3 p-4 rounded-xl cursor-pointer hover:bg-[#3a3a3a]">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          Dashboard
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl cursor-pointer bg-sky-600 border-2 border-sky-400">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Chat
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl cursor-pointer hover:bg-[#3a3a3a]">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="3" />
            <path d="m12 1 3 6 6 3-6 3-3 6-3-6-6-3 6-3z" />
          </svg>
          Settings
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl cursor-pointer hover:bg-[#3a3a3a] mt-auto">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16,17 21,12 16,7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#2a2a2a] m-4 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-5 border-b border-[#3a3a3a]">
          <h1 className="text-2xl font-semibold">Aquagpt</h1>
          <div className="w-10 h-10 bg-[#4a4a4a] flex items-center justify-center rounded-full">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
              1.79-4 4 1.79 4 4 4zm0 2c-2.67 
              0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col px-8 py-6">
          <button className="bg-[#3a3a3a] text-white px-5 py-3 rounded-xl mb-5 text-right cursor-pointer hover:bg-[#4a4a4a]">
            Hello
          </button>

          <div className="text-white mb-6 leading-relaxed">
            Hello, I am Aquagpt, an AI companion for the INGRES website. How can
            I assist you today?
          </div>

          <button className="bg-[#3a3a3a] text-white px-5 py-3 rounded-xl mb-5 text-right cursor-pointer hover:bg-[#4a4a4a]">
            What are the key policies for managing underground water in Rohini,
            Delhi, including any restrictions, recharge requirements, and
            regulatory guidelines?
          </button>

          <div className="text-white mb-5 leading-relaxed">
            Rohini’s underground water policies focus on rainwater harvesting,
            restrictions on new borewells, and mandatory recharge systems for
            larger properties to combat falling water tables and saline
            groundwater; permissions are regulated by the Central Ground Water
            Authority, with penalties for illegal extraction and initiatives for
            sustainable management.
          </div>

          <div className="text-sm text-gray-400 mb-6">
            Searched from 4 sources.
          </div>
        </div>

        {/* Input Area */}
        <div className="flex items-center bg-[#3a3a3a] rounded-full px-6 py-3 m-6 mt-auto">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent border-none text-white text-base outline-none placeholder-gray-400"
          />
          <button className="ml-3 w-10 h-10 bg-[#2a2a2a] flex items-center justify-center rounded-full cursor-pointer hover:bg-[#3a3a3a]">
            🎤
          </button>
          <button className="ml-3 w-10 h-10 bg-sky-600 flex items-center justify-center rounded-full cursor-pointer hover:bg-sky-700">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
