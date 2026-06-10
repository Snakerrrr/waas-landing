import { useEffect, useCallback } from "react";

declare global {
  interface Window {
    particlesJS: (id: string, config: unknown) => void;
    pJSDom: { pJS: { fn: { vendors: { destroypJS: () => void } } } }[];
  }
}

export default function ParticlesBackground() {
  const initParticles = useCallback(() => {
    const oldCanvas = document.querySelector("#particles-js canvas");
    if (oldCanvas) oldCanvas.remove();

    if (window.pJSDom?.length > 0) {
      window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
      window.pJSDom = [];
    }

    window.particlesJS("particles-js", {
      particles: {
        number: { value: 140, density: { enable: true, value_area: 800 } },
        color: { value: "#00f5ff" },
        shape: { type: "circle", stroke: { width: 0.5, color: "#0096c7" } },
        opacity: {
          value: 0.7,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.3 },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 2, size_min: 1 },
        },
        line_linked: {
          enable: true,
          distance: 160,
          color: "#00d9ff",
          opacity: 0.4,
          width: 1.2,
        },
        move: { enable: true, speed: 2, random: true, out_mode: "bounce" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 220, line_linked: { opacity: 0.8 } },
          push: { particles_nb: 4 },
          repulse: { distance: 180, duration: 0.4 },
        },
      },
      retina_detect: true,
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => initParticles();

    return () => {
      if (window.pJSDom?.length > 0) {
        window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
        window.pJSDom = [];
      }
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [initParticles]);

  return (
    <div
      id="particles-js"
      className="fixed inset-0 -z-10 bg-gradient-to-tr from-[#000000] via-[#000a1a] to-[#001a33]"
    />
  );
}
