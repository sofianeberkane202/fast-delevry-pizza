const url = "http://localhost:8000";

export async function getPizzas() {
  const response = await fetch(`${url}/data`);
  if (!response.ok) throw new Error("Faild to fetch data!");
  const data = response.json();
  return data;
}

export async function postUser(userData) {
  try {
    const response = await fetch(`${url}/orders`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error(`Faild to submit user data: ${response.statusText}`);

    const result = await response.json();

    return { success: true, message: "Customer data submitted successfully!", data: result };
  } catch (error) {
    console.error("Error submitting customer data:", error);

    return { success: false, message: "Faild to submit customer data. Please try again later." };
  }
}

export async function getOrder(id) {
  const response = await fetch(`${url}/orders/${id}`);
  if (!response.ok) throw new Error("Faild fetching Order data!");

  const order = await response.json();
  return order;
}
