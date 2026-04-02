import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type RainBackgroundProps = {
  className?: string;
  children?: React.ReactNode;
  count?: number;
  intensity?: number;
  angle?: number;
  color?: string;
  lightning?: boolean;
};

type Drop = {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  layer: number;
};

export default function RainBackground({
  className,
  children,
  count = 180,
  intensity = 1,
  angle = 14,
  color = "rgba(190, 210, 255, 0.55)",
  lightning = true,
}: RainBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const flash = flashRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const angleRad = (angle * Math.PI) / 180;
    const totalDrops = Math.floor(count * intensity);
    let animationId = 0;

    const createDrop = (layer: number): Drop => {
      const layerConfig = [
        { speed: 10, length: 16, opacity: 0.18 },
        { speed: 16, length: 22, opacity: 0.32 },
        { speed: 24, length: 30, opacity: 0.52 },
      ][layer];

      return {
        x: Math.random() * (width + 120) - 60,
        y: Math.random() * (height + 200) - 200,
        length: layerConfig.length + Math.random() * 10,
        speed: layerConfig.speed + Math.random() * 5,
        opacity: layerConfig.opacity + Math.random() * 0.08,
        layer,
      };
    };

    const drops: Drop[] = [];
    for (let i = 0; i < totalDrops; i++) {
      const layer = i < totalDrops * 0.3 ? 0 : i < totalDrops * 0.65 ? 1 : 2;
      drops.push(createDrop(layer));
    }

    let nextLightning = Date.now() + 3500 + Math.random() * 5000;

    const triggerLightning = () => {
      if (!flash) return;
      flash.style.opacity = "0.45";
      setTimeout(() => {
        if (flash) flash.style.opacity = "0.15";
      }, 60);
      setTimeout(() => {
        if (flash) flash.style.opacity = "0";
      }, 160);
      nextLightning = Date.now() + 3500 + Math.random() * 5000;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      if (lightning && Date.now() > nextLightning) {
        triggerLightning();
      }

      ctx.strokeStyle = color;
      ctx.lineCap = "round";

      for (const drop of drops) {
        drop.y += drop.speed;
        drop.x += Math.sin(angleRad) * drop.speed;

        if (drop.y > height + 60) {
          drop.y = -drop.length - Math.random() * 140;
          drop.x = Math.random() * (width + 120) - 60;
        }

        ctx.globalAlpha = drop.opacity;
        ctx.lineWidth = drop.layer === 2 ? 1.6 : drop.layer === 1 ? 1.1 : 0.7;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(
          drop.x + Math.sin(angleRad) * drop.length,
          drop.y + Math.cos(angleRad) * drop.length,
        );
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [count, intensity, angle, color, lightning]);

  return (
    <div
      className={cn(
        "relative min-h-screen overflow-x-hidden bg-[#070b12] text-white",
        className,
      )}
    >
      {/* Fixed rain layer */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0 "
          style={{
            background:
              "linear-gradient(to bottom, #090d15 0%, #101725 45%, #0b1018 100%)",
          }}
        />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {lightning && (
          <div
            ref={flashRef}
            className="absolute inset-0 bg-slate-200 opacity-0 transition-opacity duration-100"
          />
        )}

        {/* Keep overlays light enough that rain stays visible */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,120,255,0.12),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#070b12]/65 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(4,6,10,0.35)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
