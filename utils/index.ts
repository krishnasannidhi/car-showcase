export async function fetchCars() {
  const headers = {};

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
}
