import { initFlowbite } from "flowbite";
import { useEffect } from "react";

const CardTableCekOngkir = ({ data, t }) => {
  useEffect(() => {
    initFlowbite();
  }, []);
  const services = data?.results[0].costs;
  console.log(services);
  return (
    <div className="w-full bg-[#FFFFFF] shadow-xl rounded-lg p-5">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                {t("nama_layanan")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("tarif")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("estimasi")}
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                {t("catatan")}
              </th>
            </tr>
          </thead>
          <tbody>
            {services?.map((item, index) => (
              <tr
                className="bg-[#FFFFFF] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.service}
                </th>
                <td className="px-6 py-4">
                  {" "}
                  {item.cost && item.cost[0] && item.cost[0].value
                    ? parseFloat(item.cost[0].value).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })
                    : "N/A"}
                </td>
                <td className="px-6 py-4">{item.cost[0].etd} hari</td>
                <td className="px-6 py-4 text-center">
                  {item.cost[0].note ? item.cost[0].note : "-"}
                </td>
              </tr>
            ))}
            {services?.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center px-6 py-4 text-base font-medium">
                 {t("no_data")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CardTableCekOngkir;
