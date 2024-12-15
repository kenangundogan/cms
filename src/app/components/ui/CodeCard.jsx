"use client";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { xcode, dark, monokai, github, grayscale, hybrid, idea} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'

const CodeCard = ({ codeSnippets }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(Object.keys(codeSnippets)[0]);
    const [isExpanded, setIsExpanded] = useState(true);
    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeSnippets[selectedLanguage]);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    };

    return (
        <div className="bg-white">
            <div className="relative">
                <div className="flex justify-between items-center px-4 py-4 border-y">
                    <div className="flex gap-2 items-center">
                        {Object.keys(codeSnippets).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setSelectedLanguage(lang)}
                                className={`px-2 py-1 rounded-sm text-sm ${
                                    selectedLanguage === lang
                                        ? "bg-white border border-gray-300"
                                        : "text-gray-600 hover:underline"
                                }`}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-gray-600 hover:opacity-75 text-sm border py-2 px-4 rounded-sm"
                        >
                            {isExpanded ? "Collapse code" : "Expand code"}
                        </button>
                        {copySuccess ? (
                            <DocumentDuplicateIcon className="size-5 text-green-500" />
                        ) : (
                            <DocumentDuplicateIcon className="size-5 cursor-pointer" onClick={handleCopy} />
                        )}
                    </div>
                </div>

                {isExpanded && (
                    <div className="">
                        <SyntaxHighlighter
                            language={selectedLanguage}
                            style={hybrid}
                            showLineNumbers
                            className="text-sm"
                        >
                            {codeSnippets[selectedLanguage]}
                        </SyntaxHighlighter>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CodeCard;
