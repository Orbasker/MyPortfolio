import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <h2>
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-gray-500 dark:text-gray-400 border border-b-0 border-gray-200 dark:border-gray-700 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    onClick={toggleAccordion}
                    aria-expanded={isOpen}
                >
                    <span className="flex items-center">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01" />
                        </svg>

                        {title}
                    </span>
                    <svg
                        className={`w-3 h-3 ${isOpen ? 'rotate-180' : ''} shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            {isOpen && (
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    {content}
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
