import { convertDate } from "@/utils/convertDate";
import ClipBoard from "./ClipBoard";

const CardInformation = ({detail, summary, t}) => {
  console.log(detail, summary)
  return (
    <>
      <div className="w-full bg-[#FFFFFF] shadow-xl rounded-lg p-5">
        {/* <div className="w-full flex justify-center mb-2">
          <Image src="/images/first.png" width={200} height={100} alt="jnt" />
        </div>
        <hr className="bg-slate-200 border my-3" /> */}
        <div className="w-full flex flex-wrap gap-3">
          <div className="flex gap-2 w-full">
            <div className="w-[80%] flex flex-col">
              <p className="text-slate-600 text-sm">{t('nomor_resi')}</p>
              <ClipBoard awb={summary.awb == '' ? '-' : summary.awb} />
            </div>
            <div className="w-[20%] flex flex-col">
              <p className="text-slate-600 text-sm">{t('tgl')}</p>
              <p className="text-slate-600 text-sm">{convertDate(summary.date == '' ? '-' : summary.date)}</p>
              {/* <p className="text-slate-600 text-sm">{summary.date == '' ? '-' : summary.date}</p> */}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="text-slate-600 text-sm">{t('dari')}</p>
            <p className="text-slate-600 text-sm font-semibold uppercase">{detail.shipper == '' ? '-' : detail.shipper}</p>
            <p className="text-slate-600 text-sm capitalize">{detail.origin == '' ? '-' : detail.origin}</p>
          </div>
          <div className="flex flex-col w-full">
            <p className="text-slate-600 text-sm">{t('tujuan')}</p>
            <p className="text-slate-600 text-sm font-semibold uppercase">{detail.receiver == '' ? '-' : detail.receiver}</p>
            <p className="text-slate-600 text-sm capitalize">{detail.destination == '' ? '-' : detail.destination}</p>
          </div>
          <div className="flex gap-2 w-full">
            <div className="w-[40%] flex flex-col">
              <p className="text-slate-600 text-sm">{t('layanan')}</p>
              <p className="text-slate-600 text-sm">{summary.service == '' ? '-' : summary.service}</p>
            </div>
            <div className="w-[40%] flex flex-col">
              <p className="text-slate-600 text-sm">{t('berat')}</p>
              <p className="text-slate-600 text-sm">{summary.weight == '' ? '-' : summary.weight}</p>
            </div>
            <div className="w-[20%] flex flex-col">
              <p className="text-slate-600 text-sm">{t('jumlah')}</p>
              <p className="text-slate-600 text-sm">{summary.amount == '' ? '-' : summary.amount}</p>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="text-slate-600 text-sm">{t('barang')}:</p>
            <p className="text-slate-600 text-sm font-semibold uppercase">
              {summary.desc == '' ? '-' : summary.desc}
            </p>
          </div>
          <div className="flex flex-col w-full">
            <p className="text-slate-600 text-sm">{t('status')}</p>
            <p className="text-slate-600 text-sm font-semibold uppercase">
              {summary.status == '' ? '-' : summary.status}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardInformation;