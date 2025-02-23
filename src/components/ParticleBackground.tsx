import { useCallback } from 'react';
import Particles from 'react-particles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          opacity: 0
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: "#a855f7"
          },
          links: {
            color: "#a855f7",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.3
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
      className="absolute inset-0"
    />
  );
}