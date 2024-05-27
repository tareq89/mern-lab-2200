const callApi = ({ path, filters, body, headers, method = "get" }) => {
  const queryParams = new URLSearchParams(filters).toString();
  return fetch(`https://express-mongodb-app.vercel.app/${path}?${queryParams}`, { method, body: JSON.stringify(body), headers }).then(
    (res) => res.json()
  );
};

export const getPersons = (filters) => {
  return callApi({ path: "persons", filters });
};

export const createPerson = (body) => {
  return callApi({
    path: "persons",
    body,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deletePerson = (id) => {
  return callApi({
    path: `persons/${id}`,
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
