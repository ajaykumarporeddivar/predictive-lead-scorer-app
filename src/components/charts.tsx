'use client';

interface BarChartProps {
  data: number[];
  labels?: string[];
}

export function BarChart({ data, labels }: BarChartProps) {
  const max = Math.max(...data, 1);
  return (
    <div className="flex items-end gap-1 h-40">
      {data.map((val, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className="w-full bg-zinc-900 rounded-t"
            style={{ height: `${(val / max) * 100}%` }}
          />
          {labels && (
            <span className="text-[10px] text-zinc-400">{labels[i]}</span>
          )}
        </div>
      ))}
    </div>
  );
}

interface SparklineProps {
  data: number[];
  className?: string;
}

export function Sparkline({ data, className }: SparklineProps) {
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const width = 60;
  const height = 24;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg width={width} height={height} className={className}>
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        points={points}
      />
    </svg>
  );
}
