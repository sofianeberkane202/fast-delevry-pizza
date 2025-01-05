const url = "http://localhost:8000/data";

export async function getPizzas() {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Faild to fetch data!");
  const data = response.json();
  return data;
}
