// const data = [
//   {
//     id: 1,
//     name: "Seline",
//     age: 44,
//     gender: "Female",
//     nationality: "Morocco",
//   },
//   {
//     id: 2,
//     name: "Franz",
//     age: 43,
//     gender: "Male",
//     nationality: "Philippines",
//   },
//   {
//     id: 3,
//     name: "Aleksandr",
//     age: 64,
//     gender: "Male",
//     nationality: "Serbia",
//   },
//   {
//     id: 4,
//     name: "Edward",
//     age: 88,
//     gender: "Male",
//     nationality: "China",
//   },
//   {
//     id: 5,
//     name: "Helaine",
//     age: 92,
//     gender: "Female",
//     nationality: "Portugal",
//   },
//   {
//     id: 6,
//     name: "Lindsey",
//     age: 10,
//     gender: "Male",
//     nationality: "China",
//   },
//   {
//     id: 7,
//     name: "Haroun",
//     age: 19,
//     gender: "Male",
//     nationality: "Thailand",
//   },
//   {
//     id: 8,
//     name: "Jonas",
//     age: 34,
//     gender: "Male",
//     nationality: "United States",
//   },
//   {
//     id: 9,
//     name: "Steward",
//     age: 75,
//     gender: "Male",
//     nationality: "China",
//   },
//   {
//     id: 10,
//     name: "Orton",
//     age: 55,
//     gender: "Male",
//     nationality: "France",
//   },
// ];
// export const getPersons = (filters) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(
//         data.filter((x) => {
//           if (!!filters && Object.keys(filters).length > 0) {
//             if (!!filters.name && x.name.includes(filters.name)) return true;
//             else if (!!filters.age && x.age.includes(filters.age)) return true;
//             else if (!!filters.gender && x.gender.includes(filters.gender)) return true;
//             else if (!!filters.nationality && x.nationality.includes(filters.nationality)) return true;
//             return false;
//           }
//           return true;
//         })
//       );
//     }, 3 * 1000);
//   });
// };
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
