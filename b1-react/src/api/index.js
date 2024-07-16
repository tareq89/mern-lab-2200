import axios from "axios";

const API_URL = "http://localhost:3000";
const getProtectedData = async ({ url, params, method }) => {
  try {
    const response = await axios(`${API_URL}/${url}?${new URLSearchParams(params)}`, {
      headers: { Authorization: localStorage.getItem("accessToken") },
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 403) {
      const refreshToken = localStorage.getItem("refreshToken");
      const res = await axios.post(`${API_URL}/token`, { token: refreshToken });
      localStorage.setItem("accessToken", res.data.accessToken);
      getProtectedData({ url, params, method });
    } else {
      return { error: "You are not authorized", code: "401" };
    }
  }
};

export const register = async ({ username, password }) => {
  try {
    await axios.post(`${API_URL}/register`, { username, password });
    return { success: true, message: "Registration successful" };
  } catch (error) {
    return { success: false, message: "Registration failed" };
  }
};

export const login = async ({ username, password }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.status === "403") {
      throw new Error("");
    }
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return { success: true, message: "Login successful" };
  } catch (error) {
    return { success: false, message: "Login failed" };
  }
};

export const getPersons = (params) => getProtectedData({ url: "persons", params });
