import React, { useState } from "react";

const AddAgent: React.FC = () => {
  const [temperature, setTemperature] = useState(0.7);
  const [agentName, setAgentName] = useState("");
  const [description, setDescription] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("GPT-4o (Recommended)");
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);

  const aiModels = [
    "GPT-4o (Recommended)",
    "GPT-4 Turbo",
    "GPT-4",
    "GPT-3.5 Turbo",
    "Claude 3.5 Sonnet",
    "Claude 3 Opus",
    "Gemini Pro 1.5",
    "Llama 3.1 405B",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full border-b border-gray-border bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-4 md:px-15 py-5">
        <h1 className="text-[32px] font-bold font-lora text-black leading-normal">
          Add Agent
        </h1>
        <p className="text-xl font-open-sans text-black mt-1 max-w-[659px]">
          Design, configure, and test your custom AI agents for specialized
          tasks.
        </p>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-15 py-8 max-w-7xl mx-auto">
        <h2 className="text-[28px] font-bold font-montserrat text-black mb-12 flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
            <svg
              className="w-7 h-7 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11V21H5V3H13V9H21ZM14 10V12H12V10H14ZM16 10V12H14V10H16ZM16 8V10H14V8H16ZM14 8V6H16V8H14ZM19 14.5V13H17.5C17.1 13 16.7 13.4 16.7 13.8L16.4 15.7C16.2 15.9 16.1 16.1 15.9 16.2L14 15.5C13.6 15.3 13.2 15.5 13 15.9L12.5 16.8C12.3 17.2 12.5 17.6 12.9 17.8L14.8 18.5C14.8 18.7 14.8 18.9 14.8 19.1S14.8 19.5 14.8 19.7L12.9 20.4C12.5 20.6 12.3 21 12.5 21.4L13 22.3C13.2 22.7 13.6 22.9 14 22.7L15.9 22C16.1 22.1 16.2 22.3 16.4 22.5L16.7 24.4C16.7 24.8 17.1 25.2 17.5 25.2H19C19.4 25.2 19.8 24.8 19.8 24.4L20.1 22.5C20.3 22.3 20.4 22.1 20.6 22L22.5 22.7C22.9 22.9 23.3 22.7 23.5 22.3L24 21.4C24.2 21 24 20.6 23.6 20.4L21.7 19.7C21.7 19.5 21.7 19.3 21.7 19.1S21.7 18.7 21.7 18.5L23.6 17.8C24 17.6 24.2 17.2 24 16.8L23.5 15.9C23.3 15.5 22.9 15.3 22.5 15.5L20.6 16.2C20.4 16.1 20.3 15.9 20.1 15.7L19.8 13.8C19.8 13.4 19.4 13 19 13H19V14.5ZM18.5 19.1C18.5 19.9 17.9 20.5 17.1 20.5S15.7 19.9 15.7 19.1 16.3 17.7 17.1 17.7 18.5 18.3 18.5 19.1Z" />
            </svg>
          </div>
          Create New Agent
        </h2>

        {/* Top Section - Agent Core Details and Agent Settings */}
        <div className="grid grid-cols-1 xl:grid-cols-[635px_472px] gap-8 mb-12 justify-center">
          {/* Agent Core Details */}
          <div className="border border-gray-border-dark rounded-[5px] bg-white p-6">
            <h3 className="text-xl font-montserrat text-black mb-6">
              Agent Core Details
            </h3>

            <div className="space-y-6">
              {/* Agent Name */}
              <div>
                <label className="block text-base font-roboto text-black mb-2">
                  Agent Name ( Required )
                </label>
                <input
                  type="text"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  className="w-full h-[34px] border border-gray-border rounded-[10px] bg-white px-3 text-base font-roboto focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-base font-roboto text-black mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-16 border border-gray-border rounded-[10px] bg-white px-3 py-2 text-base font-roboto resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* System Prompt */}
              <div>
                <label className="block text-base font-roboto text-black mb-2">
                  System Prompt (initial instruction)
                </label>
                <textarea
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                  className="w-full h-16 border border-gray-border rounded-[10px] bg-white px-3 py-2 text-base font-roboto resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Agent Settings */}
          <div className="border border-gray-border-dark rounded-[5px] bg-white p-6">
            <h3 className="text-xl font-montserrat text-black mb-6">
              Agent Settings
            </h3>

            <div className="space-y-6">
              {/* AI Model */}
              <div>
                <label className="block text-base font-roboto text-black mb-2">
                  AI Model
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                    className="w-full h-10 border border-gray-border rounded-[10px] bg-white px-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl font-montserrat text-black">
                      {selectedModel}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        isModelDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isModelDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-border rounded-[10px] shadow-lg max-h-60 overflow-y-auto">
                      {aiModels.map((model) => (
                        <button
                          key={model}
                          onClick={() => {
                            setSelectedModel(model);
                            setIsModelDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                            selectedModel === model ? "bg-blue-50" : ""
                          }`}
                        >
                          <span className="text-base font-montserrat text-black">
                            {model}
                          </span>
                          {selectedModel === model && (
                            <svg
                              className="w-4 h-4 text-blue-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-base font-roboto text-black mt-2 max-w-[410px] leading-relaxed">
                  Choosing a more advanced model can improve performance.
                </p>
              </div>

              {/* Temperature */}
              <div>
                <label className="block text-base font-roboto text-black mb-4">
                  Temperature: {temperature}
                </label>
                <div className="relative">
                  <div className="w-full h-3 border border-gray-border rounded-[10px] bg-temperature-blue relative overflow-hidden">
                    <div
                      className="h-full bg-temperature-green rounded-[10px] transition-all duration-200"
                      style={{ width: `${(temperature / 1.0) * 75.5}%` }}
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <p className="text-base font-roboto text-black mt-4 max-w-[393px] leading-relaxed">
                  Higher values (e.g., 0.8) make the output more random, while
                  lower values (e.g., 0.2) make it more focused and
                  deterministic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prompt Engineering Canvas */}
        <div className="border border-gray-border-dark rounded-[5px] bg-white p-8 mb-12">
          <h3 className="text-xl font-montserrat text-black mb-8">
            Prompt Engineering Canvas
          </h3>

          <div className="space-y-8">
            {/* Instruction Block */}
            <div>
              <div className="flex items-center mb-4 gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-[133px] h-[25px] border border-gray-border rounded-[10px] bg-white flex items-center justify-center">
                  <span className="text-[13px] font-montserrat text-black">
                    Instruction Block
                  </span>
                </div>
              </div>
              <div className="w-full h-[72px] border border-gray-border rounded-[10px] bg-white p-3">
                <textarea
                  className="w-full h-full border-none outline-none resize-none text-base font-roboto"
                  placeholder="Enter instruction block content..."
                />
              </div>
            </div>

            {/* Output Format */}
            <div>
              <div className="flex items-center mb-4 gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-[133px] h-[25px] border border-gray-border rounded-[10px] bg-white flex items-center justify-center">
                  <span className="text-[13px] font-montserrat text-black">
                    Output Format
                  </span>
                </div>
              </div>
              <div className="w-full h-[79px] border border-gray-border rounded-[10px] bg-white p-3">
                <textarea
                  className="w-full h-full border-none outline-none resize-none text-base font-roboto"
                  placeholder="Enter output format specifications..."
                />
              </div>
            </div>

            {/* Add Prompt Segment Button */}
            <div className="flex justify-center">
              <button className="w-[373px] h-[34px] border border-coral rounded-[5px] bg-white flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-center w-5 h-5 bg-coral rounded-full">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-base font-roboto text-black">
                  Add Prompt Segment
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4">
          <button className="w-[108px] h-[39px] border border-gray-border rounded-[5px] bg-white flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-center w-5 h-5 bg-red-500 rounded-full">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-xl font-montserrat text-black">Cancel</span>
          </button>
          <button className="w-[108px] h-[39px] border border-success-green rounded-[5px] bg-white flex items-center justify-center gap-2 hover:bg-green-50 transition-colors">
            <div className="flex items-center justify-center w-5 h-5 bg-success-green rounded-full">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-xl font-montserrat text-black">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAgent;
