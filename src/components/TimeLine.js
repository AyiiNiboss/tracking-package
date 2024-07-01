import { FaRegCheckCircle } from "react-icons/fa";

const TimeLine = ({ history }) => {
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {history.map((item, index) => (
          <li key={index} className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaRegCheckCircle className="w-3.5 h-3.5 text-blue-800 dark:text-blue-300" />
            </span>
            <h3 className="mb-1 text-base uppercase font-semibold text-gray-900 dark:text-white">
              {item.desc}
            </h3>
            <time className="block mb-2 text-sm font-semibold leading-none text-slate-700 dark:text-gray-500">
              {item.date}
              {/* <span className="mx-2 text-gray-400 text-xs">08:00</span> */}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {item.location === "" ? "-" : item.location}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
};
export default TimeLine;
