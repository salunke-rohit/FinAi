import { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { getCategorySummary } from "../services/chartService";

const COLORS = [
  "#2563eb",
  "#22c55e",
  "#f97316",
  "#e11d48",
  "#8b5cf6",
  "#06b6d4",
  "#facc15",
  "#64748b",
];

function CategoryPieChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchChart();
  }, []);

  const fetchChart = async () => {
    try {
      const categories = await getCategorySummary();

      const formatted = categories.map((item) => ({
        name: item._id,
        value: item.totalAmount,
      }));

      setData(formatted);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chart-card">

      <h2>Expense Categories</h2>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={130}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default CategoryPieChart;