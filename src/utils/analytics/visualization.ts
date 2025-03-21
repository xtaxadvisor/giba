import { format } from 'date-fns';
import type { ChartDataset } from 'chart.js';
import type { TimeSeriesData } from '../../types/analytics.js';

export function prepareTimeSeriesData(
  data: TimeSeriesData[],
  options: {
    smoothing?: boolean;
    fillGaps?: boolean;
    formatDate?: (date: string) => string;
  } = {}
): ChartDataset[] {
  const {
    smoothing = false,
    fillGaps = true,
    formatDate = (date) => format(new Date(date), 'MMM d')
  } = options;

  return data.map(series => ({
    label: series.label,
    data: series.data.map((d: { date: string; value: any; }) => ({
      x: new Date(formatDate(d.date)).getTime(),
      y: d.value
    })),
    borderColor: series.color,
    backgroundColor: `${series.color}20`,
    fill: true,
    tension: smoothing ? 0.4 : 0,
    spanGaps: fillGaps
  }));
}

export function calculateChartDimensions(
  containerWidth: number,
  aspectRatio: number = 2
): { width: number; height: number } {
  const height = containerWidth / aspectRatio;
  return { width: containerWidth, height };
}