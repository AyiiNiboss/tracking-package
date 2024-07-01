import TimeLine from "@/components/TimeLine";
import CardInformation from "@/components/CardInformation";
import { initFlowbite } from "flowbite";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Head from "next/head";
// const gambar = [
//   {
//     image: "/images/jne.webp",
//   },
//   {
//     image: "/images/pos.webp",
//   },
//   {
//     image: "/images/jnt.png",
//   },
//   {
//     // image: "/images/jnt-cargo.png",
//   },
//   {
//     image: "/images/sicepat.webp",
//   },
//   {
//     image: "/images/tiki.webp",
//   },
//   {
//     image: "/images/anteraja.webp",
//   },
//   {
//     image: "/images/wahana.png",
//   },
//   {
//     image: "/images/ninja.webp",
//   },
//   {
//     image: "/images/lion-parcel.webp",
//   },
//   {
//     image: "/images/PCP.png",
//   },
//   {
//     // image: "/images/jet.png",
//   },
//   {
//     image: "/images/rex.png",
//   },
//   {
//     image: "/images/first.png",
//   },
//   {
//     image: "/images/id.png",
//   },
//   {
//     image: "/images/shopee.png",
//   },
//   {
//     image: "/images/kgx.png",
//   },
//   {
//     image: "/images/sap.webp",
//   },
//   {
//     // image: "/images/jx.png",
//   },
//   {
//     image: "/images/rpx.webp",
//   },
//   {
//     // image: "/images/tokopedia.webp",
//   },
//   {
//     // image: "/images/lazada.webp",
//   },
//   {
//     image: "/images/indah.webp",
//   },
//   {
//     // image: "/images/ant.webp",
//   }
// ]

const Resi = () => {
  const [kurir, setKurir] = useState([]);
  const [status, setStatus] = useState([]);
  const [detail, setDetail] = useState([]);
  const [summary, setSummary] = useState([]);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [courier, setCourier] = useState("");
  const [tracking, setTracking] = useState("");
  let selectedCourierId = "Choose a country";
  const trackingRef = useRef(null);
  const scrollRef = useRef(null);
  const t = useTranslations("resi");
  useEffect(() => {
    initFlowbite();
    trackingRef.current.focus();
    const fetchDataKurir = async () => {
      try {
        const response = await fetch(
          "https://api.binderbyte.com/v1/list_courier?api_key=b5adffa8395ccfb1facf0637f6f7e70df951fd9ce12ad5fa90294ff515722051",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setKurir(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataKurir();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    // scrollRef.current.className = "";
  }, [isLoading]);

  const fetchCekResi = async (courier, tracking) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.binderbyte.com/v1/track?api_key=b5adffa8395ccfb1facf0637f6f7e70df951fd9ce12ad5fa90294ff515722051&courier=${courier}&awb=${tracking}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Data tidak valid");
      }
      if (data.status !== 200) {
        throw new Error(data.message || "Data tidak valid");
      }

      setStatus(data.status);
      setDetail(data.data.detail);
      setHistory(data.data.history);
      setSummary(data.data.summary);
      setError(null);
    } catch (error) {
      setError(error.message || "Data tidak valid");
      setStatus(null);
      setDetail(null);
      setHistory(null);
      setSummary(null); // Simpan pesan kesalahan
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (courier && tracking) {
      fetchCekResi(courier, tracking);
    }
  }, [courier, tracking]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(null);
    setDetail(null);
    setHistory(null);
    setSummary(null);
    setError(null);
    setTracking(event.target.tracking.value);
    setCourier(event.target.courier.value);
  };
  return (
    <section className="bg-[#E5958E]">
      <Head>
        <title>Cek Resi - Tracking Package</title>
        <meta name="description" content="Cek resi paket Anda untuk mengetahui status pengiriman dengan mudah dan cepat." />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Cek Resi - Tracking Package" />
        <meta property="og:description" content="Cek resi paket Anda untuk mengetahui status pengiriman dengan mudah dan cepat." />
        <meta property="og:image" content="/images/meta-image.png" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cek Resi - Tracking Package" />
        <meta name="twitter:description" content="Cek resi paket Anda untuk mengetahui status pengiriman dengan mudah dan cepat." />
        <meta name="twitter:image" content="/images/meta-image.png" />
        <link rel="icon" href="/images/logo-2.png" />
      </Head>
      <div className="w-full h-[15rem] md:h-[22rem] lg:h-[35rem]">
        <div className="w-full h-full bg-[url('/images/bg-resi.png')] object-cover bg-cover bg-center bg-no-repeat flex justify-center items-center bg-gray-600 bg-blend-multiply">
          <div className="flex justify-center items-center md:mt-[-5rem] lg:mt-[-5rem]">
            <h1 className="text-[#FFBA00] text-4xl md:text-6xl lg:text-6xl font-bold text-start leading-tight lg:mb-5">
              {t("title")}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full px-5 md:px-0 lg:px-0 md:flex lg:flex md:justify-center lg:justify-center md:mt-[-10rem] lg:mt-[-12rem]">
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="shadow-xl rounded-lg bg-[#FDB095] md:w-[49rem] lg:w-[60rem] p-5 flex flex-col items-start gap-4">
              <div className="w-full flex justify-start gap-5">
                <h5 className="text-slate-900 font-semibold text-lg select-none">
                  {t("subtitle")}
                </h5>
                {/* <Image
                    src="/images/PCP.png"
                    width={120}
                    height={120}
                    alt="Apple Watch"
                  /> */}
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-slate-900">{t("no_resi")}</label>
                <input
                  ref={trackingRef}
                  name="tracking"
                  placeholder={t("placeholder_resi")}
                  className="w-full p-3 text-sm focus:outline-none bg-slate-200 text-slate-900 rounded-lg"
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="courier" className="text-slate-900">
                  {t("kurir")}
                </label>
                <select
                  id="courier"
                  name="courier"
                  className="bg-slate-200 border-none focus:border-none focus:ring-0 text-gray-900 text-sm rounded-lg block w-full p-3 focus:outline-none"
                  defaultValue={selectedCourierId}
                  required
                >
                  <option value={selectedCourierId} disabled>
                    {t("placeholder_courier")}
                  </option>
                  {kurir.map((item, index) => (
                    <option key={index} value={item.code}>
                      {item.description}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="text-white bg-[#420682] hover:bg-[#210440] px-3 py-2 rounded-md w-[15rem]"
                >
                  {t("cek")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <>
        {isLoading ? (
          <div className="flex justify-center mt-[5rem] text-slate-900 animate-pulse">
            {t("loading")}
          </div>
        ) : (
          (status === 200 && (
            <div ref={scrollRef} className="pt-1">
              <div className="flex justify-center mt-[5rem] p-5">
                <div className="w-[60rem] flex gap-5">
                  <CardInformation t={t} detail={detail} summary={summary} />
                </div>
              </div>
              <div className="flex justify-center mt-5 p-5">
                <div className="w-[60rem] flex gap-5">
                  <div className="w-full bg-white shadow-xl rounded-lg p-5">
                    <div className="mb-3 font-bold uppercase border-b h-8 border-slate-200">
                      <p className="text-slate-600 text-base">{t("history")}</p>
                    </div>
                    <TimeLine history={history} />
                  </div>
                </div>
              </div>
            </div>
          )) ||
          (error && (
            <div className="flex justify-center mt-[5rem] text-white">
              {error}
            </div>
          ))
        )}
      </>
      <div className="w-full mb-[-1px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
          <path
            fill="#210440"
            fillOpacity="1"
            d="M0,256L12.6,240C25.3,224,51,192,76,192C101.1,192,126,224,152,229.3C176.8,235,202,213,227,197.3C252.6,181,278,171,303,144C328.4,117,354,75,379,85.3C404.2,96,429,160,455,202.7C480,245,505,267,531,256C555.8,245,581,203,606,170.7C631.6,139,657,117,682,122.7C707.4,128,733,160,758,165.3C783.2,171,808,149,834,122.7C858.9,96,884,64,909,64C934.7,64,960,96,985,101.3C1010.5,107,1036,85,1061,101.3C1086.3,117,1112,171,1137,170.7C1162.1,171,1187,117,1213,133.3C1237.9,149,1263,235,1288,240C1313.7,245,1339,171,1364,117.3C1389.5,64,1415,32,1427,16L1440,0L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
export default Resi;
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`))
        .default,
    },
  };
}
