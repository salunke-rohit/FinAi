import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { getMonthlySummary } from "../services/chartService";

function MonthlyBarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMonthlyData();
  }, []);

  const fetchMonthlyData = async () => {
    try {
      const monthlyData = await getMonthlySummary();

      const months = [
        "",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const formatted = monthlyData.map((item) => ({
        month: `${months[item._id.month]} ${item._id.year}`,
        expense: item.totalAmount,
      }));

      setData(formatted);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chart-card">
      <h2 style={{color:"black"}}>Monthly Expenses</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 40,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip
            formatter={(value) => [
              `₹${Number(value).toLocaleString()}`,
              "Expense",
            ]}
          />

          <Bar
            dataKey="expense"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
            barSize={80}
            animationDuration={1200}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyBarChart;