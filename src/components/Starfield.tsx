import { useEffect, useRef, useState } from "react";

const generateUUID = () => {
  const lut = Array(256).fill(0).map((_, i) => (i < 16 ? "0" : "") + i.toString(16));
  const d0 = Math.random() * 0xffffffff | 0;
  const d1 = Math.random() * 0xffffffff | 0;
  const d2 = Math.random() * 0xffffffff | 0;
  const d3 = Math.random() * 0xffffffff | 0;
  return (
    lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + "-" +
    lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + "-" + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + "-" +
    lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + "-" + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
    lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff]
  );
};

interface StarfieldProps {
  starColor?: string;
  bgColor?: string;
  mouseAdjust?: boolean;
  tiltAdjust?: boolean;
  easing?: number;
  clickToWarp?: boolean;
  hyperspace?: boolean;
  warpFactor?: number;
  opacity?: number;
  speed?: number;
  quantity?: number;
}

type Star = [number, number, number, number, number, number, number, boolean];

export default function Starfield({
  starColor = "rgba(56,189,248,0.6)",
  bgColor = "rgba(11,15,25,1)",
  mouseAdjust = true,
  tiltAdjust = false,
  easing = 1,
  clickToWarp = false,
  hyperspace = false,
  warpFactor = 10,
  opacity = 0.1,
  speed = 0.5,
  quantity = 400,
}: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, setState] = useState({ uid: generateUUID(), running: false });
  const mouse = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  const sd = useRef({
    w: 0, h: 0, ctx: null as CanvasRenderingContext2D | null,
    cw: 0, ch: 0, x: 0, y: 0, z: 0,
    star: { colorRatio: 0, arr: [] as Star[] },
    prevTime: 0,
  });

  const fillColor = hyperspace ? `rgba(11,15,25,${opacity})` : bgColor;
  const compSpeed = hyperspace ? speed * warpFactor : speed;
  const ratio = quantity / 2;

  useEffect(() => {
    const el = canvasRef.current?.parentElement;
    if (!el || !canvasRef.current) return;

    const measureViewport = () => {
      sd.current.w = el.clientWidth;
      sd.current.h = el.clientHeight;
      sd.current.x = Math.round(sd.current.w / 2);
      sd.current.y = Math.round(sd.current.h / 2);
      sd.current.z = (sd.current.w + sd.current.h) / 2;
      sd.current.star.colorRatio = 1 / sd.current.z;
      if (cursor.current.x === 0) cursor.current.x = sd.current.x;
      if (cursor.current.y === 0) cursor.current.y = sd.current.y;
      if (mouse.current.x === 0) mouse.current.x = cursor.current.x - sd.current.x;
      if (mouse.current.y === 0) mouse.current.y = cursor.current.y - sd.current.y;
    };

    const setupCanvas = () => {
      measureViewport();
      const canvas = canvasRef.current!;
      sd.current.ctx = canvas.getContext("2d");
      canvas.width = sd.current.w;
      canvas.height = sd.current.h;
      sd.current.ctx!.fillStyle = fillColor;
      sd.current.ctx!.strokeStyle = starColor;
    };

    const bigBang = () => {
      if (sd.current.star.arr.length !== quantity) {
        sd.current.star.arr = Array.from({ length: quantity }, () => [
          Math.random() * sd.current.w * 2 - sd.current.x * 2,
          Math.random() * sd.current.h * 2 - sd.current.y * 2,
          Math.round(Math.random() * sd.current.z),
          0, 0, 0, 0, true,
        ] as Star);
      }
    };

    const resize = () => {
      const oldArr = [...sd.current.star.arr];
      measureViewport();
      const cw = sd.current.ctx?.canvas.width ?? 0;
      const ch = sd.current.ctx?.canvas.height ?? 0;
      if (cw !== sd.current.w || ch !== sd.current.h) {
        const rw = sd.current.w / (cw || 1);
        const rh = sd.current.h / (ch || 1);
        sd.current.ctx!.canvas.width = sd.current.w;
        sd.current.ctx!.canvas.height = sd.current.h;
        if (!sd.current.star.arr.length) { bigBang(); }
        else {
          sd.current.star.arr = sd.current.star.arr.map((star, i) => {
            const n = [...star] as Star;
            n[0] = oldArr[i][0] * rw;
            n[1] = oldArr[i][1] * rh;
            n[3] = sd.current.x + (n[0] / n[2]) * ratio;
            n[4] = sd.current.y + (n[1] / n[2]) * ratio;
            return n;
          });
        }
        sd.current.ctx!.fillStyle = fillColor;
        sd.current.ctx!.strokeStyle = starColor;
      }
    };

    const update = () => {
      mouse.current.x = (cursor.current.x - sd.current.x) / easing;
      mouse.current.y = (cursor.current.y - sd.current.y) / easing;
      sd.current.star.arr = sd.current.star.arr.map(star => {
        const n = [...star] as Star;
        n[7] = true; n[5] = n[3]; n[6] = n[4];
        n[0] += mouse.current.x >> 4;
        if (n[0] > sd.current.x << 1) { n[0] -= sd.current.w << 1; n[7] = false; }
        if (n[0] < -sd.current.x << 1) { n[0] += sd.current.w << 1; n[7] = false; }
        n[1] += mouse.current.y >> 4;
        if (n[1] > sd.current.y << 1) { n[1] -= sd.current.h << 1; n[7] = false; }
        if (n[1] < -sd.current.y << 1) { n[1] += sd.current.h << 1; n[7] = false; }
        n[2] -= compSpeed;
        if (n[2] > sd.current.z) { n[2] -= sd.current.z; n[7] = false; }
        if (n[2] < 0) { n[2] += sd.current.z; n[7] = false; }
        n[3] = sd.current.x + (n[0] / n[2]) * ratio;
        n[4] = sd.current.y + (n[1] / n[2]) * ratio;
        return n;
      });
    };

    const draw = () => {
      const ctx = sd.current.ctx!;
      ctx.fillStyle = fillColor;
      ctx.fillRect(0, 0, sd.current.w, sd.current.h);
      ctx.strokeStyle = starColor;
      sd.current.star.arr.forEach(star => {
        if (star[5] > 0 && star[5] < sd.current.w && star[6] > 0 && star[6] < sd.current.h && star[7]) {
          ctx.lineWidth = (1 - sd.current.star.colorRatio * star[2]) * 2;
          ctx.beginPath();
          ctx.moveTo(star[5], star[6]);
          ctx.lineTo(star[3], star[4]);
          ctx.stroke();
          ctx.closePath();
        }
      });
    };

    const animate = () => {
      if (sd.current.prevTime === 0) sd.current.prevTime = Date.now();
      resize(); update(); draw();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const mouseHandler = (e: MouseEvent) => {
      cursor.current.x = e.clientX + el.scrollLeft - el.clientLeft;
      cursor.current.y = e.clientY + el.scrollTop - el.clientTop;
    };

    if (mouseAdjust) el.addEventListener("mousemove", mouseHandler);

    measureViewport(); setupCanvas(); bigBang(); animate();
    setState(p => ({ ...p, running: true }));

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      if (mouseAdjust) el.removeEventListener("mousemove", mouseHandler);
    };
  }, [starColor, bgColor, mouseAdjust, easing, hyperspace, warpFactor, opacity, speed, quantity, compSpeed, fillColor, ratio, tiltAdjust, clickToWarp]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} />
    </div>
  );
}
