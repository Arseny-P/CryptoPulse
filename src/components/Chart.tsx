import { LineChart, Line, ResponsiveContainer, YAxis, Tooltip } from "recharts";

const Chart = ({ data }: { data: number[] }) => {
  const formattedData = data.map((p) => ({ p }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={formattedData}>
        <YAxis domain={["auto", "auto"]} hide />

        <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="custom-tooltip" style={{ 
                    background: "rgba(0,0,0,0.8)", 
                    color: "#fff", 
                    padding: "5px 10px", 
                    borderRadius: "5px",
                    fontSize: "12px" 
                  }}>
                    {`Price: $${payload[0].value?.toLocaleString()}`}
                  </div>
                );
              }
              return null;
            }}
          />

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