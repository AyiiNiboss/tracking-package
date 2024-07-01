import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const { origin, destination, weight, courier } = req.body;
  console.log(origin, destination, weight, courier);
  try {
    const response = await axios.post(
      "https://api.rajaongkir.com/starter/cost",
      {
        origin,
        destination,
        weight,
        courier,
      },
      {
        headers: {
          key: "165cd362e03b34e06efff19f16acea6b",
        },
      }
    );
    res.status(200).json(response.data.rajaongkir);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
