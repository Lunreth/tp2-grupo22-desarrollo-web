import { useCallback, useEffect, useState } from "react";
import { RefreshCw, CloudSun, Thermometer, Wind } from "lucide-react";
import GlassCard from "./GlassCard";

export default function ApiWeather() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  const loadWeather = useCallback(async () => {
    setStatus("loading");
    setError("");

    try {
      const url =
        "https://api.open-meteo.com/v1/forecast?latitude=-34.6037&longitude=-58.3816&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=America%2FArgentina%2FBuenos_Aires";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("La API respondió con un error.");
      }

      const result = await response.json();
      if (!result.current) {
        throw new Error("La respuesta de Open-Meteo no incluyó los datos actuales esperados.");
      }
      setData(result);
      setStatus("success");
    } catch (err) {
      setError(err.message || "No se pudo consultar la API.");
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    loadWeather();
  }, [loadWeather]);

  if (status === "loading") {
    return (
      <GlassCard>
        <div className="state-box">
          <div className="spinner"></div>
          <h3>Cargando datos...</h3>
          <p>Consultando la API pública de Open-Meteo.</p>
        </div>
      </GlassCard>
    );
  }

  if (status === "error") {
    return (
      <GlassCard>
        <div className="state-box error">
          <h3>No se pudo cargar la información</h3>
          <p>{error}</p>
          <button className="primary-button" onClick={loadWeather} aria-label="Reintentar consulta del clima">
            <RefreshCw size={17} /> Reintentar
          </button>
        </div>
      </GlassCard>
    );
  }

  const current = data.current;

  return (
    <GlassCard>
      <div className="api-result-header">
        <div>
          <span className="eyebrow">Resultado en vivo</span>
          <h2>Clima actual · Buenos Aires</h2>
          <p>Datos aportados por Open-Meteo desde el navegador.</p>
        </div>
        <button className="icon-button" onClick={loadWeather} title="Actualizar" aria-label="Actualizar datos del clima">
          <RefreshCw size={18} />
        </button>
      </div>

      <div className="weather-grid">
        <div className="weather-stat">
          <CloudSun />
          <span>Temperatura</span>
          <strong>{current.temperature_2m} °C</strong>
        </div>
        <div className="weather-stat">
          <Thermometer />
          <span>Humedad</span>
          <strong>{current.relative_humidity_2m} %</strong>
        </div>
        <div className="weather-stat">
          <Wind />
          <span>Viento</span>
          <strong>{current.wind_speed_10m} km/h</strong>
        </div>
      </div>
    </GlassCard>
  );
}