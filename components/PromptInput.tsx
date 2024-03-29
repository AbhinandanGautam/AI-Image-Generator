'use client'

import { useState } from "react";

function PromptInput() {
    const [input, setInput] = useState("");

  return (
    <div className="m-10">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
        <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
          placeholder="Enter the prompt..."
          className="flex-1 p-4 outline-none rounded-md"
        ></textarea>
        <button className={`p-4 font-bold ${input ? "bg-violet-400 text-white transition-colors duration-200" : "text-gray-300 cursor-not-allowed"}`} type="submit" disabled={!input}>Generate</button>
        <button
          className="p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
          type="button"
        >
          Use Suggestion
        </button>
        <button className="p-4 bg-white text-violet-400 border-none transition-colors rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold" type="button">New Suggestion</button>
      </form>
    </div>
  );
}

export default PromptInput;
