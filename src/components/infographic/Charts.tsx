import { PieChart, Pie, Cell, ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Legend, BarChart, Bar, CartesianGrid, LabelList } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
type ChartLoaderProps = {
  className?: string;
};
const ChartLoader = ({ className }: ChartLoaderProps) => (
  <div className={className}>
    <Skeleton className="w-full h-full" />
  </div>
);
// --- Language Distribution Chart (Pie) ---
type LanguageData = { name: string; value: number; fill: string };
type LanguageDistributionChartProps = {
  data?: LanguageData[];
  isLoading: boolean;
};
export const LanguageDistributionChart = ({ data, isLoading }: LanguageDistributionChartProps) => {
  if (isLoading || !data) return <ChartLoader className="h-80 w-full" />;
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={100} dataKey="value" nameKey="name">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
// --- Complexity vs Value Chart (Scatter/Bubble) ---
type ComplexityData = { x: number; y: number; z: number; name: string; category: string; fill: string };
type ComplexityValueChartProps = {
  data?: ComplexityData[];
  isLoading: boolean;
};
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">Tool</span>
            <span className="font-bold text-foreground">{data.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">Category</span>
            <span className="font-bold" style={{ color: data.fill }}>{data.category}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">Complexity</span>
            <span className="font-bold text-muted-foreground">{data.x}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">Value</span>
            <span className="font-bold text-muted-foreground">{data.y}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
export const ComplexityValueChart = ({ data, isLoading }: ComplexityValueChartProps) => {
  if (isLoading || !data) return <ChartLoader className="h-96 w-full" />;
  const categories = [...new Set(data.map(item => item.category))];
  const colors = [...new Set(data.map(item => item.fill))];
  return (
    <ResponsiveContainer width="100%" height={384}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="Implementation Difficulty" unit="" domain={[0, 10]} label={{ value: 'Implementation Difficulty (1-10)', position: 'insideBottom', offset: -10 }} />
        <YAxis type="number" dataKey="y" name="Business ROI Potential" unit="" domain={[0, 12]} label={{ value: 'Business ROI Potential (1-10)', angle: -90, position: 'insideLeft' }} />
        <ZAxis type="number" dataKey="z" range={[100, 1000]} name="Adoption" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
        <Legend />
        {categories.map((category, i) => (
          <Scatter key={category} name={category} data={data.filter(d => d.category === category)} fill={colors[i % colors.length]} shape="circle" />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
};
// --- Top 10 Ranking Chart (Horizontal Bar) ---
type RankingData = { name: string; score: number; fill: string };
type Top10RankingChartProps = {
  data?: RankingData[];
  isLoading: boolean;
};
export const Top10RankingChart = ({ data, isLoading }: Top10RankingChartProps) => {
  if (isLoading || !data) return <ChartLoader className="h-80 w-full" />;
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" domain={[0, 100]} />
        <YAxis dataKey="name" type="category" width={120} />
        <Tooltip formatter={(value) => [value, 'Weighted Score']} />
        <Bar dataKey="score" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
          <LabelList dataKey="score" position="right" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};