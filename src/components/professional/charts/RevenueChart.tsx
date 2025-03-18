// src/components/RevenueChart.tsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';


// ✅ Define prop types for RevenueChart
interface RevenueChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      fill?: boolean;
      borderColor?: string;
      backgroundColor?: string;
      borderDash?: number[];
      tension?: number;
    }[];
  };
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// ✅ Make RevenueChart accept `data` as a prop
export function RevenueChart({ data }: RevenueChartProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(context.parsed.y);
            }
            return label;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: any) {
            return new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumSignificantDigits: 3
            }).format(value);
          }
        }
      }
    }
  };

  return (
    <div className="w-full h-[400px] bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Revenue Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
}