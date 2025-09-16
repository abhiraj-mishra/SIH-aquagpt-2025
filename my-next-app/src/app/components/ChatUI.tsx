"use client";

import { useState } from "react";

export default function ChatUI() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(typeof data?.error === "string" ? data.error : "Request failed. Try again.");
        return;
      }

      if (data.reply) {
        setMessages([...newMessages, { role: "assistant", text: data.reply }]);
      }
    } catch (err: any) {
      setError(err?.message || "Network error. Please try again.");
      console.error("Error sending message:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#1a1a1a] text-white">
      {/* Sidebar */}
      <div className="w-72 bg-[#2a2a2a] p-5 flex flex-col rounded-2xl m-4 mr-0">
        <div className="flex items-center gap-3 p-4 rounded-xl cursor-pointer hover:bg-[#3a3a3a]">📊 Dashboard</div>
        <div className="flex items-center gap-3 p-4 rounded-xl cursor-pointer bg-sky-600 border-2 border-sky-400">💬 Chat</div>
        <div className="flex items-center gap-3 p-4 rounded-xl cursor-pointer hover:bg-[#3a3a3a]">⚙ Settings</div>
        <div className="flex items-center gap-3 p-4 rounded-xl cursor-pointer hover:bg-[#3a3a3a] mt-auto">🚪 Logout</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#2a2a2a] m-4 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-5 border-b border-[#3a3a3a]">
          <h1 className="text-2xl font-semibold">Aquagpt</h1>
          <div className="w-10 h-10 bg-[#4a4a4a] flex items-center justify-center rounded-full">👤</div>
        </div>

        {error && (
          <div className="mx-8 my-4 p-3 rounded-lg bg-red-900/40 text-red-300 border border-red-700">
            {error}
          </div>
        )}

        {/* Chat Area */}
        <div className="flex-1 flex flex-col px-8 py-6 overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}
            >
              <div
                className={`inline-block px-5 py-3 rounded-xl ${
                  msg.role === "user"
                    ? "bg-[#3a3a3a] hover:bg-[#4a4a4a] cursor-pointer"
                    : "bg-transparent text-white"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && <div className="text-gray-400">Thinking...</div>}
        </div>

        {/* Input Area */}
        <div className="flex items-center bg-[#3a3a3a] rounded-full px-6 py-3 m-6 mt-auto">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent border-none text-white text-base outline-none placeholder-gray-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-3 w-10 h-10 bg-sky-600 flex items-center justify-center rounded-full cursor-pointer hover:bg-sky-700"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
