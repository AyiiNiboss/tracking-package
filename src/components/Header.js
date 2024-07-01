import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "./Drawer";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
  return (
    <header>
      <nav className="w-full bg-[#210440] text-slate-900 py-5 px-5 md:py-4 md:px-[2rem] lg:py-4 lg:px-[11rem] flex justify-between items-center">
        <div>
          <Image
            className=""
            src="/images/logo-4.png"
            width={150}
            height={150}
            alt="tracking-package"
            loading="lazy"
          />
        </div>
        {/* Mobile */}
        <div className="md:hidden lg:hidden">
          <GiHamburgerMenu
            color="white"
            size={30}
            type="button"
            onClick={() => setOpen(!open)}
          />
        </div>
        <Drawer useTranslations={t} open={open} setOpen={setOpen} />
        {/* PC */}
        <div className="md:flex lg:flex hidden">
          <ul className="flex items-center gap-5 text-slate-200 capitalize">
            <li className="hover:text-slate-400">
              <Link href="/">{t("Navbar.home")}</Link>
            </li>
            <li className="hover:text-slate-400">
              <Link href="/resi">{t("Navbar.resi")}</Link>
            </li>
            <li className="hover:text-slate-400">
              <Link href="/ongkir">{t("Navbar.ongkir")}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`)).default
    }
  };
}
