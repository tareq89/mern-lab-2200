const persons = [
  {
    id: 1,
    name: "Caddric",
    age: 2,
    gender: "Male",
    nationality: "China",
  },
  {
    id: 2,
    name: "Parker",
    age: 55,
    gender: "Male",
    nationality: "China",
  },
  {
    id: 3,
    name: "Tricia",
    age: 94,
    gender: "Female",
    nationality: "China",
  },
  {
    id: 4,
    name: "Michail",
    age: 92,
    gender: "Male",
    nationality: "Albania",
  },
  {
    id: 5,
    name: "Jori",
    age: 87,
    gender: "Female",
    nationality: "Greece",
  },
  {
    id: 6,
    name: "Sherry",
    age: 42,
    gender: "Female",
    nationality: "China",
  },
  {
    id: 7,
    name: "Christabella",
    age: 68,
    gender: "Female",
    nationality: "Thailand",
  },
  {
    id: 8,
    name: "Malia",
    age: 22,
    gender: "Female",
    nationality: "Namibia",
  },
  {
    id: 9,
    name: "Truman",
    age: 93,
    gender: "Male",
    nationality: "China",
  },
  {
    id: 10,
    name: "Desmond",
    age: 57,
    gender: "Male",
    nationality: "Egypt",
  },
];
export const getPersons = (filters) => {
  const result = persons.filter((x) => {
    if (!!filters && Object.keys(filters).length > 0) {
      if (x.name.includes(filters.name)) return true;
      else if (x.age === filters.age) return true;
      else if (x.gender.includes(filters.gender)) return true;
      else if (x.nationality.includes(filters.nationality)) return true;
      return false;
    }
    return true;
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, 3 * 1000);
  });
};
