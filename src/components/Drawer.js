import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Drawer = ({ open, setOpen, useTranslations }) => {
  const handleClose = () => setOpen(!open);
  const router = useRouter();
  const { locale } = router;
  let selectedLanguage = locale;
  const handleSelectLanguage = (e) => {
    const nextLocale = e.target.value;
    const { pathname, query } = router;

    router.replace(
      {
        pathname,
        query,
      },
      pathname,
      { locale: nextLocale }
    );
  };
  return (
    <div
      id="drawer-examples"
      className={`${open ? "translate-x-0" : "-translate-x-full z-0"} md:hidden lg:hidden fixed top-0 left-0 z-40 h-screen p-5 overflow-y-auto transition-transform bg-[#210440] w-full dark:bg-gray-800`}
      tabIndex="-1"
      aria-labelledby="drawer-label"
    >
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <div className=""></div>
          <Image
            src="/images/logo-4.png"
            width={120}
            height={120}
            alt="logo"
            loading="lazy"
          />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-controls="drawer-example"
            className="text-slate-200 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div>
          <ul className="text-white text-[16px] uppercase font-bold tracking-widest">
            <li className="border-t border-solid h-full py-2">
              <Link href="/"><span onClick={handleClose}>{useTranslations('Navbar.home')}</span></Link>
            </li>
            <li className="border-t border-solid h-full py-2">
              <Link href="/resi"><span onClick={handleClose}>{useTranslations('Navbar.resi')}</span></Link>
            </li>
            <li className="border-t border-solid h-full py-2 border-slate-300">
              <Link href="/ongkir"><span onClick={handleClose}>{useTranslations('Navbar.ongkir')}</span></Link>
            </li>
            <li className="border-t border-solid h-full py-7 tracking-normal border-slate-300">
              <div className="w-full">
                <select
                  id="countries"
                  defaultValue={selectedLanguage}
                  onChange={handleSelectLanguage}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled>
                    Pilih bahasa
                  </option>
                  <option value="id">Bahasa Indonesia</option>
                  <option value="en">Inggris</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Drawer;
