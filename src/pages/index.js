import { initFlowbite } from "flowbite";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const t = useTranslations()
  useEffect(() => {
    initFlowbite();
  }, [])
  const handleCekSekarang = () => {
    router.push("/resi");
  }
  return (
    <section className="flex flex-wrap gap-2 items-start justify-center bg-[#FDB095]">
      <Head>
        <title>Beranda - Tracking Package</title>
        <meta name="description" content="Lacak paket Anda dengan mudah dan cepat. Kami menyediakan layanan tracking untuk memastikan Anda selalu tahu lokasi paket Anda." />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Beranda - Tracking Package" />
        <meta property="og:description" content="Lacak paket Anda dengan mudah dan cepat. Kami menyediakan layanan tracking untuk memastikan Anda selalu tahu lokasi paket Anda." />
        <meta property="og:image" content="/images/meta-image.png" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beranda - Tracking Package" />
        <meta name="twitter:description" content="Lacak paket Anda dengan mudah dan cepat. Kami menyediakan layanan tracking untuk memastikan Anda selalu tahu lokasi paket Anda." />
        <meta name="twitter:image" content="/images/meta-image.png" />
        <link rel="icon" href="/images/logo-2.png" />
      </Head>
      <div className="hidden md:flex lg:flex gap-10 items-center justify-center w-full py-10 bg-[url('/images/chek1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-1/2 pb-14 md:px-[2rem] lg:pl-[11rem]">
          <div>
            <h1 className="text-[#210440] md:text-3xl lg:text-5xl xl:5xl 2xl:text-6xl font-bold text-start leading-snug mb-5">
              {t('IndexPage.welcomeTitle')}
            </h1>
            <p className="text-[#210440] text-start mb-5">
              {t('IndexPage.welcomeDescription')}
            </p>
            <button
              type="button"
              onClick={handleCekSekarang}
              className="text-white bg-gradient-to-r from-[#210440] to-[#E5958E] shadow-xl hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2"
            >
              {t('IndexPage.checkNow')}
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            className=""
            src="/images/chek.png"
            alt="hero"
            width={800}
            height={500}
          />
        </div>
      </div>
      <div className="w-full px-5 pt-14 md:hidden lg:hidden mb-20">
        <div className="flex flex-col items-center">
            <h1 className="text-[#210440] text-[24px] text-center font-bold leading-tight mb-5">
              {t('IndexPage.welcomeTitle')}
            </h1>
            <p className="text-[#210440] text-[14px] tracking-wide text-center mb-10">
              {t('IndexPage.welcomeDescription')}
            </p>
            <button
              onClick={handleCekSekarang}
              className="text-white bg-gradient-to-r w-[50%] from-[#210440] to-[#E5958E] ring-0 shadow-xl hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2"
            >
              {t('IndexPage.checkNow')}
            </button>
          </div>
      </div>
      <div className="w-full mb-[-1px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#210440"
            fillOpacity="1"
            d="M0,256L12.6,240C25.3,224,51,192,76,192C101.1,192,126,224,152,229.3C176.8,235,202,213,227,197.3C252.6,181,278,171,303,144C328.4,117,354,75,379,85.3C404.2,96,429,160,455,202.7C480,245,505,267,531,256C555.8,245,581,203,606,170.7C631.6,139,657,117,682,122.7C707.4,128,733,160,758,165.3C783.2,171,808,149,834,122.7C858.9,96,884,64,909,64C934.7,64,960,96,985,101.3C1010.5,107,1036,85,1061,101.3C1086.3,117,1112,171,1137,170.7C1162.1,171,1187,117,1213,133.3C1237.9,149,1263,235,1288,240C1313.7,245,1339,171,1364,117.3C1389.5,64,1415,32,1427,16L1440,0L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`)).default
    }
  };
}