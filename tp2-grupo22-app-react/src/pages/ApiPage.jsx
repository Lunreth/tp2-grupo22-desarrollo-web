import React, { useState, useEffect } from 'react';
import GlassCard from '../components/GlassCard';

const ApiPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      // API pública gratuita de clima sin requerir API key
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=-34.6037&longitude=-58.3816&current_weather=true'
      );
      if (!response.ok) {
        throw new Error('Ocurrió un error al consultar la API externa.');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || 'Error de conexión con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2>Consumo de API Pública</h2>
      <p style={{ opacity: 0.85 }}>
        Esta sección consume en tiempo real la API pública de <strong>Open-Meteo</strong> para obtener las condiciones meteorológicas actuales de la Ciudad de Buenos Aires sin exponer claves privadas.
      </p>

      <GlassCard style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ margin: 0 }}>Estado del Clima en Vivo</h3>
          <button
            onClick={fetchWeatherData}
            disabled={loading}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'inherit',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.2s ease'
            }}
          >
            {loading ? 'Cargando...' : '🔄 Reintentar / Actualizar'}
          </button>
        </div>

        {/* Estado de Carga */}
        {loading && (
          <div style={{ padding: '20px', textAlign: 'center', opacity: 0.8 }}>
            ⏳ Consultando datos del servidor meteo... Por favor aguarde.
          </div>
        )}

        {/* Estado de Error */}
        {error && !loading && (
          <div style={{ padding: '16px', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#f87171' }}>
            ⚠️ <strong>Error de carga:</strong> {error}
          </div>
        )}

        {/* Resultados de la API */}
        {data && !loading && !error && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginTop: '16px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '12px' }}>
              <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Temperatura</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '4px' }}>
                {data.current_weather?.temperature} °C
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '12px' }}>
              <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Velocidad del Viento</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '4px' }}>
                {data.current_weather?.windspeed} km/h
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '12px' }}>
              <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Dirección del Viento</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '4px' }}>
                {data.current_weather?.winddirection}°
              </div>
            </div>
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export default ApiPage;