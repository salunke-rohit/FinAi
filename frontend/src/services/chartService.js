import api from "./api";

export const getCategorySummary = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/dashboard/category", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.categories;
};

export const getMonthlySummary = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/dashboard/monthly", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.monthlyExpenses;
};