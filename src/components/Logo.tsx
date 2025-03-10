import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <rect width="40" height="40" rx="10" fill="black" className="animate-pulse-subtle" />
          <path
            d="M26.5 15C26.5 15.8284 25.8284 16.5 25 16.5C24.1716 16.5 23.5 15.8284 23.5 15C23.5 14.1716 24.1716 13.5 25 13.5C25.8284 13.5 26.5 14.1716 26.5 15Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 20C9 13.9249 13.9249 9 20 9C26.0751 9 31 13.9249 31 20C31 26.0751 26.0751 31 20 31C13.9249 31 9 26.0751 9 20ZM20 11.5C15.3056 11.5 11.5 15.3056 11.5 20C11.5 24.6944 15.3056 28.5 20 28.5C24.6944 28.5 28.5 24.6944 28.5 20C28.5 15.3056 24.6944 11.5 20 11.5Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 16.5C18.067 16.5 16.5 18.067 16.5 20C16.5 21.933 18.067 23.5 20 23.5C21.933 23.5 23.5 21.933 23.5 20C23.5 18.067 21.933 16.5 20 16.5ZM14 20C14 16.6863 16.6863 14 20 14C23.3137 14 26 16.6863 26 20C26 23.3137 23.3137 26 20 26C16.6863 26 14 23.3137 14 20Z"
            fill="white"
          />
        </svg>
        <span className="text-2xl font-bold gradient-text">Servsy</span>
      </div>
      <div className="ml-2 pl-2 border-l border-muted hidden sm:block">
        <span className="text-xs text-muted-foreground block">The Power of</span>
        <span className="text-xs font-medium text-primary">After-Sales Service</span>
      </div>
    </div>
  );
};

export default Logo;