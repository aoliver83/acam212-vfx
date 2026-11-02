import { useCurrentFrame, useVideoConfig, interpolate } from 'remotion';

export const Acam212Scene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const translateY = interpolate(frame, [0, 30], [20, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{
      flex: 1,
      backgroundColor: '#0a0e17',
      color: '#e0e6ed',
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4rem',
      opacity,
      transform: `translateY(${translateY}px)`
    }}>
      <div style={{
        fontSize: '1.2rem',
        color: '#00e5cc',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
        fontWeight: 600
      }}>
        ACAM 212 • Compliance Intelligence
      </div>
      <h1 style={{
        fontSize: '3.5rem',
        fontWeight: 800,
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: '2rem',
        letterSpacing: '-0.03em'
      }}>
        Monitoramento de Transações
      </h1>
      <div style={{
        background: 'rgba(0, 229, 204, 0.08)',
        border: '1px solid rgba(0, 229, 204, 0.2)',
        borderRadius: '16px',
        padding: '2.5rem 4rem',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '5rem',
          fontWeight: 900,
          color: '#00e5cc',
          fontVariantNumeric: 'tabular-nums'
        }}>
          {Math.min(999, Math.floor(frame * 33.3))}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#6b7a8d',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginTop: '0.5rem'
        }}>
          Registros Analisados em Tempo Real
        </div>
      </div>
    </div>
  );
};
