"use client";
import { useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeCard = ({ code }) => {
    const theme = "xcode";
    const language = "javascript";
    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    };

    return (
        <div className="p-4">
            <div className="rounded-sm border shadow-md relative">
                <div className="bg-gray-50 flex justify-between items-center rounded-t-sm text-gray-800 px-4 py-3 text-sm border-b">
                    <div className="flex items-center gap-2">
                        <ul className="flex gap-2">
                            <li className="size-3 bg-gray-200 rounded-full"></li>
                            <li className="size-3 bg-gray-200 rounded-full"></li>
                            <li className="size-3 bg-gray-200 rounded-full"></li>
                        </ul>
                    </div>
                    <button onClick={handleCopy} className="hover:opacity-50 focus:outline-none text-sm">
                        {copySuccess ? "Copied!" : "Copy"}
                    </button>
                </div>
                <div className="bg-white rounded-b-sm overflow-hidden">
                    <SyntaxHighlighter
                        language={language}
                        style={themes[theme]}
                        showLineNumbers
                        className="text-sm"
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default CodeCard;
