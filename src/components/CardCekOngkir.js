import Image from "next/image";

const CardCekOngkir = ({data, courier = '', t}) => {
  return (
    <div className="w-full bg-[#FFFFFF] shadow-xl rounded-lg p-5">
      <div className="hidden md:flex lg:flex justify-end">
        <Image
          src={courier?courier:'/images/jne.webp'}
          width={110}
          height={50}
          alt="image-courier"
          style={{ height: 'auto' }}
        />
      </div>
      <div className="flex items-center text-slate-900 text-sm md:text-base lg:text-base mb-2">
        <h6 className="w-[40%] md:w-[10%] lg:w-[15%]">{t('dari')}</h6>
        <span className="w-[3%] md:[1%] lg:[1%]">:</span>
        <p className="w-[90%]">{data?.origin_details.type} {data?.origin_details.city_name}</p>
      </div>
      <div className="flex items-center text-slate-900 text-sm md:text-base lg:text-base mb-2">
        <h6 className="w-[40%] md:w-[10%] lg:w-[15%]">{t('tujuan')}</h6>
        <span className="w-[3%] md:[1%] lg:[1%]">:</span>
        <p className="w-[90%]">{data?.destination_details.type} {data?.destination_details.city_name}</p>
      </div>
      <div className="flex items-center text-slate-900 text-sm md:text-base lg:text-base mb-2">
        <h6 className="w-[40%] md:w-[10%] lg:w-[15%]">{t('weight')}</h6>
        <span className="w-[3%] md:[1%] lg:[1%]">:</span>
        <p className="w-[90%]">{data?.query.weight} gram</p>
      </div>
    </div>
  );
};
export default CardCekOngkir;
