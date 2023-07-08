export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "5ef66f4ce7msha390eae9da771cdp16697ajsn68da87e63e11",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
}
