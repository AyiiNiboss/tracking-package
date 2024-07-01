import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  const t = useTranslations("Footer");
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
    <footer className="w-full bg-[#210440] text-white py-4 px-5 md:px-[2rem] lg:px-[11rem]">
      <div className="flex flex-wrap mt-[40px]">
        <div className="w-full md:w-2/5 lg:w-2/5 flex flex-col gap-4">
          <span className="font-extrabold leading-5 tracking-wide">
            {t("bahasa")}
          </span>
          <div>
            <select
              id="countries"
              onChange={handleSelectLanguage}
              defaultValue={selectedLanguage}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[80%] lg:w-[50%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled>{t("option")}</option>
              <option value="id">Indonesia</option>
              <option value="en">Inggris</option>
            </select>
          </div>
        </div>
        <div className="hidden md:flex lg:flex w-3/5 font-extrabold leading-5 tracking-wide gap-5">
          <div className="flex flex-col gap-4 w-1/4">
            <span>{t("fitur_cepat")}</span>
            <div className="text-base font-normal flex flex-col gap-2">
              <Link className="hover:text-slate-400" href="/resi">
                <p>{t("cek_resi")}</p>
              </Link>
              <Link className="hover:text-slate-400" href="/ongkir">
                <p>{t("cek_ongkir")}</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/4">
            <span>{t("layanan")}</span>
            <div className="text-base font-normal flex flex-col gap-2">
              <Link className="hover:text-slate-400" href="/lacak-paket">
                <p>{t("layanan_utama")}</p>
              </Link>
              <Link className="hover:text-slate-400" href="/cek-ongkir">
                <p>{t("pengadaan_barang")}</p>
              </Link>
              <Link className="hover:text-slate-400" href="/cek-ongkir">
                <p>{t("pengadaan_barang")}</p>
              </Link>
              <Link className="hover:text-slate-400" href="/cek-ongkir">
                <p>{t("pengadaan_barang")}</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/4">
            <span>{t("fitur_cepat")}</span>
            <div className="text-base font-normal flex flex-col gap-2">
              <Link className="hover:text-slate-400" href="/resi">
                <p>{t("cek_resi")}</p>
              </Link>
              <Link className="hover:text-slate-400" href="/ongkir">
                <p>{t("cek_ongkir")}</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/4">
            <span>{t("fitur_cepat")}</span>
            <div className="text-base font-normal flex flex-col gap-2">
              <Link className="hover:text-slate-400" href="/resi">
                <p>{t("cek_resi")}</p>
              </Link>
              <Link className="hover:text-slate-400" href="/ongkir">
                <p>{t("cek_ongkir")}</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:hidden lg:hidden mt-10 w-full font-extrabold leading-5 tracking-wide gap-5">
          <div className="flex flex-col gap-4 w-1/2">
            <span>{t("fitur_cepat")}</span>
            <div className="text-base font-normal flex flex-col gap-2">
              <Link className="hover:text-slate-400" href="/resi">
                <p>{t("cek_resi")}</p>
              </Link>
              <Link className="hover:text-slate-400" href="/ongkir">
                <p>{t("cek_ongkir")}</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/2">
            <span className="uppercase">{t("layanan")}</span>
            <div className="text-base font-normal flex flex-col gap-2">
              <Link className="hover:text-slate-400" href="/lacak-paket">
                <p>{t("layanan_utama")}</p>
              </Link>
              <Link className="hover:text-slate-400" href="/cek-ongkir">
                <p>{t("pengadaan_barang")}</p>
              </Link>
              <Link className="hover:text-slate-400" href="/cek-ongkir">
                <p>{t("pengadaan_barang")}</p>
              </Link>
              <Link className="hover:text-slate-400" href="/cek-ongkir">
                <p>{t("pengadaan_barang")}</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:hidden lg:hidden mt-10 w-full font-extrabold leading-5 tracking-wide gap-5">
          <div className="flex flex-col gap-4 w-1/2">
            <span>{t("fitur_cepat")}</span>
            <div className="text-base font-normal flex flex-col gap-2">
              <Link className="hover:text-slate-400" href="/resi">
                <p>{t("cek_resi")}</p>
              </Link>
              <Link className="hover:text-slate-400" href="/ongkir">
                <p>{t("cek_ongkir")}</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/2">
            <span>{t("fitur_cepat")}</span>
            <div className="text-base font-normal flex flex-col gap-2">
              <Link className="hover:text-slate-400" href="/resi">
                <p>{t("cek_resi")}</p>
              </Link>
              <Link className="hover:text-slate-400" href="/ongkir">
                <p>{t("cek_ongkir")}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between">
        <div className="w-full md:w-[30%] lg:w-[30%]">
          <div className="mt-10 md:mt-[40px] lg:mt-[40px] mb-4">
            <span className="font-extrabold leading-5 tracking-wide uppercase">
              {t("hubungi_kami")}
            </span>
          </div>
          <div className="flex gap-3">
            <Link href="" className="flex flex-col items-center gap-1">
              <FaTelegram size={38} fill="#94A3B8" />
              <span className="text-sm hover:text-slate-400">Telegram</span>
            </Link>
            <Link href="" className="flex flex-col items-center gap-1">
              <FaWhatsapp size={38} fill="#94A3B8" />
              <span className=" text-sm hover:text-slate-400">WhatsApp</span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[30%] lg:w-[30%] md:px-3 lg:px-3">
          <div className="mt-10 md:mt-[40px] lg:mt-[40px] mb-4">
            <span className="font-extrabold leading-5 tracking-wide uppercase">
              {t("ikuti_kami")}
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebookSquare
                size={35}
                color="#94A3B8"
                className="hover:text-slate-500"
              />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram
                size={35}
                color="#94A3B8"
                className="hover:text-slate-500"
              />
            </Link>
            <Link href="https://www.tiktok.com" target="_blank">
              <FaTiktok
                size={35}
                color="#94A3B8"
                className="hover:text-slate-500"
              />
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <FaYoutube
                size={35}
                color="#94A3B8"
                className="hover:text-slate-400"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full mt-[40px] border-b-2 border-dashed border-slate-400"></div>
      <div className="w-full mt-[15px] flex justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            {t("copyright")} <span className="animate-pulse"> ❤️</span>
          </div>
        </div>
        <div>
          <Image src="/images/logo-4.png" width={100} height={100} alt="logo" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`)).default,
    },
  };
}
