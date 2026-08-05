import api from "./api";

export const getRecentTransactions = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/dashboard/recent", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.recentTransactions;
};