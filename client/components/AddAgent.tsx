import React, { useState } from "react";

const AddAgent: React.FC = () => {
  const [temperature, setTemperature] = useState(0.7);
  const [agentName, setAgentName] = useState("");
  const [description, setDescription] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");

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
        <h2 className="text-[32px] font-bold font-montserrat text-black mb-12">
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
                  <div className="w-full h-10 border border-gray-border rounded-[10px] bg-white px-4 flex items-center">
                    <span className="text-xl font-montserrat text-black">
                      GPT-4o (Recommended)
                    </span>
                  </div>
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
                    <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
                      <div className="w-[18px] h-4 bg-temperature-green rounded-full" />
                    </div>
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
              <div className="flex items-center mb-4">
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
              <div className="flex items-center mb-4">
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
              <button className="w-[373px] h-[34px] border border-coral rounded-[5px] bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="text-base font-roboto text-black">
                  Add Prompt Segment
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4">
          <button className="w-[108px] h-[39px] border border-gray-border rounded-[5px] bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
            <span className="text-xl font-montserrat text-black">Cancel</span>
          </button>
          <button className="w-[108px] h-[39px] border border-success-green rounded-[5px] bg-white flex items-center justify-center hover:bg-green-50 transition-colors">
            <span className="text-xl font-montserrat text-black">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAgent;
