import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";

const Chart = ({ data }: { data: number[] }) => {
  const formattedData = data.map((p) => ({ p }));

  return (
    <ResponsiveContainer width="50%" height={100}>
      <LineChart data={formattedData}>
        <YAxis domain={["auto", "auto"]} hide /> 
        <Line 
            type="monotone" 
            dataKey="p" 
            stroke="#8884d8" 
            strokeWidth={2} 
            dot={false} 
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;