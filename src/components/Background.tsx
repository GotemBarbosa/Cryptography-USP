import { useRef, useEffect } from 'react';

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let binary: string[] = ['0', '1'];
    const fontSize = 20;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'green';
      ctx.font = `${fontSize}px arial`;

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];

        ctx.fillStyle = `rgba(4, 120, 87, ${Math.max(0, 0.2 - drops[i] / 200)})`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) drops[i] = 0;
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 60);
    return () => clearInterval(interval);
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full fixed top-0 left-0 -z-10 bg-slate-900 bg-gradient-to-tr from-cyan-900/50 via-slate-800/10 to-slate-900"
      id="c"
    ></canvas>
  );
}
