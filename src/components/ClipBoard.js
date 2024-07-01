import { initFlowbite } from "flowbite";
import { useEffect } from "react";

const ClipBoard = ({ awb }) => {
  useEffect(() => {
    initFlowbite();
  }, [])
  return (
    <>
      <div className="w-full max-w-[16rem]">
        <div className="relative">
          <label htmlFor="npm-install-copy-button" className="sr-only">
            Label
          </label>
          <input
            id="npm-install-copy-button"
            type="text"
            className="border-none p-0 w-[7rem] text-gray-500 text-sm"
            value={awb}
            disabled
            readOnly
          />
          <button
            data-copy-to-clipboard-target="npm-install-copy-button"
            data-tooltip-target="tooltip-copy-npm-install-copy-button"
            className="absolute top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
          >
            <span id="default-icon">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
            <span id="success-icon" className="hidden items-center">
              <svg
                className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
          </button>
          <div
            id="tooltip-copy-npm-install-copy-button"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            <span id="default-tooltip-message">Copy to clipboard</span>
            <span id="success-tooltip-message" className="hidden">
              Copied!
            </span>
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClipBoard;
