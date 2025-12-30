const apiKey = "const apiKey = "YOUR_API_KEY_HERE";

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const loader = document.getElementById("loader");
    const weatherInfo = document.getElementById("weatherInfo");

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    loader.style.display = "block";
    weatherInfo.style.display = "none";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("city").innerText = data.name;
        document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°C`;
        document.getElementById("humidity").innerText =
            `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText =
            `🌬️ Wind: ${data.wind.speed} km/h`;
        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        loader.style.display = "none";
        weatherInfo.style.display = "block";

    } catch (error) {
        loader.style.display = "none";
        alert("City not found or API key issue");
    }
}

