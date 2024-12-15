const API_KEY = "7Rq4YbdpPjHQJeD64mHoAcXolX3h2OCu"; // Reemplaza con tu clave API
const ciudad = "Buenos Aires"; // Ciudad que deseas consultar
const locationUrl = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${ciudad}&language=es`;

fetch(locationUrl)
  .then(response => {
    if (!response.ok) throw new Error(`Error al buscar la ubicación: ${response.status}`);
    return response.json();
  })
  .then(data => {
    if (data.length === 0) throw new Error("No se encontró la ubicación.");
    const locationKey = data[0].Key;
    const weatherUrl = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}&language=es`;
    return fetch(weatherUrl);
  })
  .then(response => {
    if (!response.ok) throw new Error(`Error al obtener el clima: ${response.status}`);
    return response.json();
  })
  .then(weatherData => {
    const clima = weatherData[0];
        const iconNumber = String(clima.WeatherIcon).padStart(2, "0"); // Asegurar formato de 2 dígitos
        const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`; // URL del icono
    document.getElementById("resultado").innerHTML = `
      <p>${ciudad}<img src="${iconUrl}" alt="${clima.WeatherText}"/>${clima.Temperature.Metric.Value}°C</p>`;
  })
  .catch(error => {
    document.getElementById("resultado").textContent = `Error: ${error.message}`;
  });


