import CardCekOngkir from "@/components/CardCekOngkir";
import CardTableCekOngkir from "@/components/CardTableCekOngkir";
import supabase from "@/config/supabaseClient";
import axios from "axios";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import AsyncSelect from "react-select/async";
const kurir = [
  {
    id: 1,
    code: "jne",
    courier: "JNE",
    image: "/images/jne.webp",
  },
  {
    id: 2,
    code: "pos",
    courier: "POS INDONESIA",
    image: "/images/pos.webp",
  },
  {
    id: 3,
    code: "tiki",
    courier: "TIKI",
    image: "/images/tiki.webp",
  },
];

const Ongkir = () => {
  const [provinsi, setProvinsi] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [cities, setCities] = useState([]);
  const [provinsiTujuan, setProvinsiTujuan] = useState([]);
  const [selectedCityTujuan, setSelectedCityTujuan] = useState(null);
  const [selectedProvinceTujuan, setSelectedProvinceTujuan] = useState(null);
  const [isLoadingCitiesTujuan, setIsLoadingCitiesTujuan] = useState(false);
  const [citiesTujuan, setCitiesTujuan] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [courier, setCourier] = useState(null);
  const [imageCourier, setImageCourier] = useState(null);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState([]);
  const [error, setError] = useState([]);
  const scrollRef = useRef(null);
  let selectedCourierId = "Choose a country";
  const t = useTranslations("ongkir");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      origin: selectedCity.value,
      destination: selectedCityTujuan.value,
      weight: e.target.weight.value,
      courier: e.target.courier.value,
    };
    axios
      .post("/api/cekOngkir", data)
      .then((response) => {
        setData(response.data);
        setCourier(response.data.query.courier);
        setStatus(response.data.status.code);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    // province asal
    const fetchProvinsi = async () => {
      try {
        const { data, error } = await supabase.from("provinces").select("*");
        if (error) {
          setError("Could not fetch cities");
          setCities([]);
          console.error("Error fetching cities:", error);
        } else {
          setProvinsi(data);
          setProvinsiTujuan(data);
          setError(null);
        }
      } catch (err) {
        setError("An unexpected error occurred");
        setProvinsi([]);
        setProvinsiTujuan([]);
        console.error("Unexpected error:", err);
      }
    };
    fetchProvinsi();
  }, []);
  useEffect(() => {
    const filter = kurir.filter((item) => item.code === courier);
    const imageCourier = filter[0]?.image;
    return setImageCourier(imageCourier);
  }, [courier]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isLoading]);
  const filterProvinces = (inputValue) => {
    return provinsi.filter((i) =>
      i.province.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleProvinceChange = (selectedOption) => {
    setSelectedProvince(selectedOption);
    if (selectedOption) {
      fetchCities(selectedOption.value);
    } else {
      setCities([]);
      setSelectedCity(null);
    }
  };
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(
        filterProvinces(inputValue).map((province) => ({
          label: province.province,
          value: province.id,
        }))
      );
    }, 1000);
  };
  // city
  const fetchCities = async (provinceId) => {
    try {
      const { data, error } = await supabase
        .from("city")
        .select("*")
        .eq("province_id", provinceId);

      if (error) {
        setError("Could not fetch cities");
        setCities([]);
        console.error("Error fetching cities:", error);
      } else {
        setCities(data);
        setError(null);
      }
    } catch (err) {
      setError("An unexpected error occurred");
      setCities([]);
      console.error("Unexpected error:", err);
    }
  };

  const loadCities = async (inputValue) => {
    // Jika cities kosong atau sedang loading, kembalikan array kosong
    if (cities.length === 0 || isLoadingCities) {
      return [];
    }

    // Filter kota/kabupaten berdasarkan input value
    const filteredCities = cities.filter((city) =>
      city.city_name.toLowerCase().includes(inputValue.toLowerCase())
    );

    // Kembalikan hasil filter sebagai opsi untuk React Select
    return filteredCities.map((city) => ({
      label: `${city.type} ${city.city_name}`,
      value: city.city_id,
    }));
  };

  // default untuk provinsi asal
  const defaultOptionProvinsi = () => {
    return provinsi.map((e) => ({
      label: e.province,
      value: e.id,
    }));
  };
  const defaultOption = () => {
    return cities.map((city) => ({
      label: `${city.type} ${city.city_name}`,
      value: city.city_id,
    }));
  };
  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  // TUJUAN SELECT
  const filterProvincesTujuan = (inputValue) => {
    return provinsiTujuan.filter((i) =>
      i.province.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleProvinceChangeTujuan = (selectedOption) => {
    setSelectedProvinceTujuan(selectedOption);
    if (selectedOption) {
      fetchCitiesTujuan(selectedOption.value);
    } else {
      setCitiesTujuan([]);
      setSelectedCityTujuan(null);
    }
  };
  const loadOptionsTujuan = (inputValue, callback) => {
    setTimeout(() => {
      callback(
        filterProvincesTujuan(inputValue).map((province) => ({
          label: province.province,
          value: province.id,
        }))
      );
    }, 1000);
  };
  const fetchCitiesTujuan = async (provinceId) => {
    try {
      const { data, error } = await supabase
        .from("city")
        .select("*")
        .eq("province_id", provinceId);

      if (error) {
        setError("Could not fetch cities");
        setCitiesTujuan([]);
        console.error("Error fetching cities:", error);
      } else {
        setCitiesTujuan(data);
        setError(null);
      }
    } catch (err) {
      setError("An unexpected error occurred");
      setCitiesTujuan([]);
      console.error("Unexpected error:", err);
    }
  };
  const loadCitiesTujuan = async (inputValue) => {
    // Jika cities kosong atau sedang loading, kembalikan array kosong
    if (citiesTujuan.length === 0 || isLoadingCitiesTujuan) {
      return [];
    }

    // Filter kota/kabupaten berdasarkan input value
    const filteredCitiesTujuan = citiesTujuan.filter((city) =>
      city.city_name.toLowerCase().includes(inputValue.toLowerCase())
    );

    // Kembalikan hasil filter sebagai opsi untuk React Select
    return filteredCitiesTujuan.map((city) => ({
      label: `${city.type} ${city.city_name}`,
      value: city.city_id,
    }));
  };

  // default untuk provinsi tujuan
  const defaultOptionProvinsiTujuan = () => {
    return provinsiTujuan.map((e) => ({
      label: e.province,
      value: e.id,
    }));
  };
  const defaultOptionTujuan = () => {
    return citiesTujuan.map((city) => ({
      label: `${city.type} ${city.city_name}`,
      value: city.city_id,
    }));
  };
  const handleCityChangeTujuan = (selectedOption) => {
    setSelectedCityTujuan(selectedOption);
  };
  return (
    <section className="bg-[#E5958E]">
      <Head>
        <title>Cek Ongkir - Tracking Package</title>
        <meta name="description" content="Cek ongkir paket Anda dengan cepat dan mudah. Kami membantu Anda menemukan biaya pengiriman terbaik." />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Cek Ongkir - Tracking Package" />
        <meta property="og:description" content="Cek ongkir paket Anda dengan cepat dan mudah. Kami membantu Anda menemukan biaya pengiriman terbaik." />
        <meta property="og:image" content="/images/meta-image.png" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cek Ongkir - Tracking Package" />
        <meta name="twitter:description" content="Cek ongkir paket Anda dengan cepat dan mudah. Kami membantu Anda menemukan biaya pengiriman terbaik." />
        <meta name="twitter:image" content="/images/meta-image.png" />
        <link rel="icon" href="/images/logo-2.png" />
      </Head>
      <div className="w-full h-[15rem] md:h-[25rem] lg:h-[35rem]">
        <div className="w-full h-full bg-[url('/images/bg-ongkir.png')] object-cover bg-cover lg:bg-center bg-no-repeat flex justify-center items-center bg-gray-600 bg-blend-multiply">
          <div className="flex justify-center items-center lg:mt-[-5rem]">
            <h1 className="text-[#FFBA00] text-4xl md:text-6xl lg:text-6xl font-bold text-start leading-tight mb-5">
              {t('title')}
            </h1>
          </div>
        </div>
      </div>

      {/* Cek Ongkir */}
      <div className="w-full flex justify-center lg:mt-[-18rem]">
        <div className="md:mt-10 lg:mt-10 p-4">
          <form onSubmit={handleSubmit}>
            <div className="shadow-md md:shadow-xl lg:shadow-xl rounded-lg bg-[#FFFFFF] lg:w-[60rem] p-5 flex flex-col items-start gap-4">
              <div className="w-full flex justify-between gap-5">
                {/* <h5 className="text-slate-900 font-semibold text-lg">
                  Cek Ongkir
                </h5> */}
              </div>
              <div className="w-full flex flex-wrap gap-3 mb-3">
                <div className="w-full">
                  <p className="text-slate-900 font-semibold text-lg">
                    {t('kota_asal')}
                  </p>
                </div>
                <div className="w-full md:flex lg:flex gap-2">
                  <div className="flex flex-col gap-2 w-full mb-3">
                    <label htmlFor="courier" className="text-slate-900">
                      {t('provinsi')}
                    </label>
                    <AsyncSelect
                      className="text-slate-900"
                      name="provinsi"
                      id="long-value-select"
                      instanceId="long-value-select"
                      loadOptions={loadOptions}
                      defaultOptions={defaultOptionProvinsi()}
                      isClearable
                      placeholder={t('placeholder_provinsi_origin')}
                      onChange={handleProvinceChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="courier" className="text-slate-900">
                      {t('kota/kabupaten')}
                    </label>
                    <AsyncSelect
                      className="text-slate-900"
                      name="kabupaten"
                      id="long-value-select"
                      instanceId="long-value-select"
                      loadOptions={loadCities}
                      defaultOptions={defaultOption()}
                      isClearable
                      placeholder={t('placeholder_kota_origin')}
                      onChange={handleCityChange}
                      isDisabled={!selectedProvince}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-3 mb-3">
                <div className="w-full">
                  <p className="text-slate-900 font-semibold text-lg">
                    {t('kota_tujuan')}
                  </p>
                </div>
                <div className="w-full md:flex lg:flex gap-2">
                  <div className="flex flex-col gap-2 w-full mb-3">
                    <label htmlFor="courier" className="text-slate-900">
                      {t('provinsi')}
                    </label>
                    <AsyncSelect
                      className="text-slate-900"
                      name="provinsiTujuan"
                      id="long-value-select"
                      instanceId="long-value-select"
                      loadOptions={loadOptionsTujuan}
                      defaultOptions={defaultOptionProvinsiTujuan()}
                      isClearable
                      placeholder={t('placeholder_provinsi_destination')}
                      onChange={handleProvinceChangeTujuan}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="courier" className="text-slate-900">
                      {t('kota/kabupaten')}
                    </label>
                    <AsyncSelect
                      className="text-slate-900"
                      name="kabupatenTujuan"
                      id="long-value-select"
                      instanceId="long-value-select"
                      loadOptions={loadCitiesTujuan}
                      defaultOptions={defaultOptionTujuan()}
                      isClearable
                      placeholder={t('placeholder_kota_destination')}
                      onChange={handleCityChangeTujuan}
                      isDisabled={!selectedProvinceTujuan}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-2">
                <div className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/2 mb-3">
                  <label htmlFor="courier" className="text-slate-900">
                    {t('courier')}
                  </label>
                  <select
                    id="courier"
                    name="courier"
                    className="bg-[#FFFFFF] border-[#C2C2C2] border focus:ring-0 focus:border-[#C2C2C2] text-gray-900 text-base rounded-lg block w-full p-2 focus:outline-none"
                    defaultValue={selectedCourierId}
                    required
                  >
                    <option value={selectedCourierId} disabled>
                      {t('placeholder_courier')}
                    </option>
                    {kurir.map((item, index) => (
                      <option key={index} value={item.code}>
                        {item.courier}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:w-1/2 lg:w-1/2 w-full flex gap-2 flex-col">
                  <label htmlFor="weight" className="text-slate-900">
                    {t('weight')}
                  </label>
                  <input
                    type="number"
                    name="weight"
                    id="weight"
                    className="bg-[#FFFFFF] border border-[#C2C2C2] focus:border-[#C2C2C2] focus:ring-0 text-gray-900 text-base rounded-lg block w-full p-2 focus:outline-none"
                    defaultValue="1000"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="text-white bg-[#420682] hover:bg-[#210440] px-3 py-2 rounded-md w-[15rem]"
                >
                  {t('cek')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <>
        {isLoading ? (
          <div className="flex justify-center mt-[5rem] text-slate-900 animate-pulse">
            {t('loading')}
          </div>
        ) : (
          (status === 200 && (
            <div ref={scrollRef} className="pt-1">
              <div className="flex justify-center md:mt-[5rem] lg:mt-[5rem] px-4 md:px-0 lg:px-0">
                <div className="w-full md:w-[60rem] lg:w-[60rem] flex gap-5">
                  <CardCekOngkir t={t} data={data} courier={imageCourier} />
                </div>
              </div>
              <div className="flex justify-center mt-5 px-4">
                <div className="w-full md:w-[60rem] lg:w-[60rem] flex gap-5">
                  <CardTableCekOngkir t={t} data={data} />
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
            d="M0,32L14.1,32C28.2,32,56,32,85,42.7C112.9,53,141,75,169,101.3C197.6,128,226,160,254,165.3C282.4,171,311,149,339,128C367.1,107,395,85,424,80C451.8,75,480,85,508,117.3C536.5,149,565,203,593,213.3C621.2,224,649,192,678,165.3C705.9,139,734,117,762,117.3C790.6,117,819,139,847,133.3C875.3,128,904,96,932,101.3C960,107,988,149,1016,170.7C1044.7,192,1073,192,1101,202.7C1129.4,213,1158,235,1186,250.7C1214.1,267,1242,277,1271,272C1298.8,267,1327,245,1355,208C1383.5,171,1412,117,1426,90.7L1440,64L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
export default Ongkir;
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`)).default
    }
  };
}