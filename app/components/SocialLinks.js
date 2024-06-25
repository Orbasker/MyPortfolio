import React from 'react';

const SocialLinks = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Social Links</h2>
            <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-700 hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.452 20.452h-3.554v-5.777c0-1.376-.028-3.146-1.919-3.146-1.921 0-2.214 1.5-2.214 3.044v5.879h-3.555v-11.892h3.414v1.623h.048c.475-.898 1.634-1.846 3.365-1.846 3.596 0 4.261 2.368 4.261 5.451v6.664h-.001zm-14.451-13.452c-1.145 0-2.073-.928-2.073-2.073s.928-2.073 2.073-2.073 2.073.928 2.073 2.073-.929 2.073-2.073 2.073zm-1.777 13.452h3.555v-11.892h-3.555v11.892zm17.777-19.452h-20c-.552 0-1 .448-1 1v20c0 .552.448 1 1 1h20c.552 0 1-.448 1-1v-20c0-.552-.448-1-1-1z" />
                    </svg>
                    LinkedIn
                </a>
                <a href="https://github.com/yourprofile" className="text-gray-900 hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.173c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.107-.774.418-1.304.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.47-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.509 11.509 0 013.005-.404c1.02.004 2.045.138 3.005.404 2.291-1.552 3.299-1.23 3.299-1.23.653 1.653.242 2.874.118 3.176.767.84 1.235 1.91 1.235 3.221 0 4.607-2.807 5.625-5.479 5.922.43.371.823 1.102.823 2.222v3.293c0 .322.216.694.825.576 4.765-1.588 8.198-6.086 8.198-11.385 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                </a>
                {/* Add other social links here */}
            </div>
        </div>
    );
};

export default SocialLinks;
