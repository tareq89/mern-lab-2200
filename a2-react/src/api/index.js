let mockData = [
  {
    id: 1,
    name: "Madelon",
    gender: "Female",
    nationality: "Indonesia",
    degree: ["Drama"],
  },
  {
    id: 2,
    name: "Annora",
    gender: "Female",
    nationality: "Sweden",
    degree: ["Comedy|Drama"],
  },
  {
    id: 3,
    name: "Addy",
    gender: "Male",
    nationality: "Philippines",
    degree: ["Drama|Romance"],
  },
  {
    id: 4,
    name: "Levon",
    gender: "Male",
    nationality: "China",
    degree: ["Adventure|Horror|Romance|Sci-Fi"],
  },
  {
    id: 5,
    name: "Samuele",
    gender: "Male",
    nationality: "Indonesia",
    degree: ["Comedy"],
  },
  {
    id: 6,
    name: "Gaby",
    gender: "Male",
    nationality: "Japan",
    degree: ["Drama|Romance"],
  },
  {
    id: 7,
    name: "Quill",
    gender: "Male",
    nationality: "Philippines",
    degree: ["Documentary"],
  },
  {
    id: 8,
    name: "Tracy",
    gender: "Female",
    nationality: "Japan",
    degree: ["Comedy"],
  },
  {
    id: 9,
    name: "Patricia",
    gender: "Female",
    nationality: "Spain",
    degree: ["Comedy"],
  },
  {
    id: 10,
    name: "Gene",
    gender: "Female",
    nationality: "Micronesia",
    degree: ["Crime|Drama"],
  },
  {
    id: 11,
    name: "Tremaine",
    gender: "Male",
    nationality: "Philippines",
    degree: ["Drama|War"],
  },
  {
    id: 12,
    name: "Deane",
    gender: "Female",
    nationality: "Honduras",
    degree: ["Drama|Horror|Mystery"],
  },
  {
    id: 13,
    name: "Fern",
    gender: "Female",
    nationality: "Poland",
    degree: ["Documentary"],
  },
  {
    id: 14,
    name: "Shaylyn",
    gender: "Female",
    nationality: "Denmark",
    degree: ["Crime|Film-Noir|Mystery|Thriller"],
  },
  {
    id: 15,
    name: "Abran",
    gender: "Male",
    nationality: "Japan",
    degree: ["Adventure|Sci-Fi"],
  },
  {
    id: 16,
    name: "Matty",
    gender: "Male",
    nationality: "North Korea",
    degree: ["Drama"],
  },
  {
    id: 17,
    name: "Joey",
    gender: "Female",
    nationality: "Nigeria",
    degree: ["Drama|Romance"],
  },
  {
    id: 18,
    name: "Fielding",
    gender: "Male",
    nationality: "China",
    degree: ["Animation|Children"],
  },
  {
    id: 19,
    name: "Woodie",
    gender: "Male",
    nationality: "Iran",
    degree: ["Comedy|Musical"],
  },
  {
    id: 20,
    name: "Ximenes",
    gender: "Male",
    nationality: "Hungary",
    degree: ["Action|Adventure|Animation|Children|Comedy|Fantasy"],
  },
  {
    id: 21,
    name: "Salomon",
    gender: "Male",
    nationality: "Luxembourg",
    degree: ["Documentary"],
  },
  {
    id: 22,
    name: "Dud",
    gender: "Male",
    nationality: "Portugal",
    degree: ["Drama"],
  },
  {
    id: 23,
    name: "Hastie",
    gender: "Male",
    nationality: "China",
    degree: ["Comedy|Drama"],
  },
  {
    id: 24,
    name: "Claudetta",
    gender: "Female",
    nationality: "Madagascar",
    degree: ["Drama|Romance"],
  },
  {
    id: 25,
    name: "Perkin",
    gender: "Male",
    nationality: "Czech Republic",
    degree: ["Crime"],
  },
  {
    id: 26,
    name: "Shannan",
    gender: "Male",
    nationality: "Bosnia and Herzegovina",
    degree: ["Drama"],
  },
  {
    id: 27,
    name: "Jeniffer",
    gender: "Female",
    nationality: "Serbia",
    degree: ["Comedy|Romance"],
  },
  {
    id: 28,
    name: "Wyn",
    gender: "Male",
    nationality: "China",
    degree: ["Crime|Drama"],
  },
  {
    id: 29,
    name: "Rowen",
    gender: "Male",
    nationality: "Mexico",
    degree: ["Comedy|Drama"],
  },
  {
    id: 30,
    name: "Sayers",
    gender: "Male",
    nationality: "Indonesia",
    degree: ["Comedy"],
  },
  {
    id: 31,
    name: "Robinia",
    gender: "Female",
    nationality: "Russia",
    degree: ["Adventure|Comedy|Documentary"],
  },
  {
    id: 32,
    name: "Oliviero",
    gender: "Male",
    nationality: "Belarus",
    degree: ["Drama|War"],
  },
  {
    id: 33,
    name: "Kirbie",
    gender: "Female",
    nationality: "Indonesia",
    degree: ["Horror|Thriller"],
  },
  {
    id: 34,
    name: "Benedicto",
    gender: "Male",
    nationality: "Uruguay",
    degree: ["Comedy|Drama"],
  },
  {
    id: 35,
    name: "Goddard",
    gender: "Male",
    nationality: "United States",
    degree: ["Drama|Romance"],
  },
  {
    id: 36,
    name: "Randy",
    gender: "Male",
    nationality: "France",
    degree: ["Drama"],
  },
  {
    id: 37,
    name: "Addie",
    gender: "Male",
    nationality: "Philippines",
    degree: ["Crime|Thriller"],
  },
  {
    id: 38,
    name: "Juan",
    gender: "Male",
    nationality: "Vietnam",
    degree: ["Comedy|Romance"],
  },
  {
    id: 39,
    name: "Tomasina",
    gender: "Female",
    nationality: "Indonesia",
    degree: ["Drama"],
  },
  {
    id: 40,
    name: "Jarrad",
    gender: "Male",
    nationality: "Costa Rica",
    degree: ["Children|Drama"],
  },
  {
    id: 41,
    name: "Roberto",
    gender: "Male",
    nationality: "Malaysia",
    degree: ["Action|Adventure|Sci-Fi"],
  },
  {
    id: 42,
    name: "Locke",
    gender: "Male",
    nationality: "China",
    degree: ["Comedy|Drama|Romance"],
  },
  {
    id: 43,
    name: "Greg",
    gender: "Male",
    nationality: "Japan",
    degree: ["Comedy|Drama"],
  },
  {
    id: 44,
    name: "Norean",
    gender: "Female",
    nationality: "Philippines",
    degree: ["Animation|Children|Comedy"],
  },
  {
    id: 45,
    name: "Dar",
    gender: "Male",
    nationality: "Canada",
    degree: ["Documentary"],
  },
  {
    id: 46,
    name: "Freddi",
    gender: "Female",
    nationality: "Micronesia",
    degree: ["Crime|Drama|Romance"],
  },
  {
    id: 47,
    name: "Lowe",
    gender: "Male",
    nationality: "Kyrgyzstan",
    degree: ["Adventure|Sci-Fi|Thriller"],
  },
  {
    id: 48,
    name: "Janaya",
    gender: "Female",
    nationality: "Philippines",
    degree: ["Drama|Romance|War"],
  },
  {
    id: 49,
    name: "Dru",
    gender: "Male",
    nationality: "Albania",
    degree: ["Action|Adventure|Fantasy|Sci-Fi"],
  },
  {
    id: 50,
    name: "Dolli",
    gender: "Female",
    nationality: "China",
    degree: ["Crime|Mystery"],
  },
  {
    id: 51,
    name: "Emmett",
    gender: "Male",
    nationality: "China",
    degree: ["Adventure|Animation|Children|Comedy"],
  },
  {
    id: 52,
    name: "Jean",
    gender: "Male",
    nationality: "Brazil",
    degree: ["Comedy"],
  },
  {
    id: 53,
    name: "Elizabet",
    gender: "Female",
    nationality: "China",
    degree: ["Comedy|Crime"],
  },
  {
    id: 54,
    name: "Dannel",
    gender: "Male",
    nationality: "Russia",
    degree: ["Action|Crime|Drama|Thriller"],
  },
  {
    id: 55,
    name: "Anny",
    gender: "Female",
    nationality: "Venezuela",
    degree: ["Crime|Mystery|Thriller"],
  },
  {
    id: 56,
    name: "Elinor",
    gender: "Female",
    nationality: "Philippines",
    degree: ["Comedy"],
  },
  {
    id: 57,
    name: "Edwina",
    gender: "Female",
    nationality: "Philippines",
    degree: ["Action|Drama"],
  },
  {
    id: 58,
    name: "Harland",
    gender: "Male",
    nationality: "Afghanistan",
    degree: ["Drama"],
  },
  {
    id: 59,
    name: "Arron",
    gender: "Male",
    nationality: "Cuba",
    degree: ["Crime|Drama"],
  },
  {
    id: 60,
    name: "Saxe",
    gender: "Male",
    nationality: "Germany",
    degree: ["Comedy|Fantasy"],
  },
  {
    id: 61,
    name: "Callida",
    gender: "Female",
    nationality: "Russia",
    degree: ["Action|Drama|War"],
  },
  {
    id: 62,
    name: "Harcourt",
    gender: "Male",
    nationality: "Sweden",
    degree: ["Drama"],
  },
  {
    id: 63,
    name: "Gabi",
    gender: "Male",
    nationality: "Indonesia",
    degree: ["Horror|Thriller"],
  },
  {
    id: 64,
    name: "Evan",
    gender: "Male",
    nationality: "China",
    degree: ["Adventure|Drama|Thriller"],
  },
  {
    id: 65,
    name: "Elicia",
    gender: "Female",
    nationality: "Russia",
    degree: ["Drama|Mystery"],
  },
  {
    id: 66,
    name: "Brande",
    gender: "Female",
    nationality: "Azerbaijan",
    degree: ["Adventure|Children|Drama"],
  },
  {
    id: 67,
    name: "Dotty",
    gender: "Female",
    nationality: "South Korea",
    degree: ["Comedy"],
  },
  {
    id: 68,
    name: "Ody",
    gender: "Male",
    nationality: "Kazakhstan",
    degree: ["Comedy|Crime|Mystery"],
  },
  {
    id: 69,
    name: "Lizbeth",
    gender: "Female",
    nationality: "China",
    degree: ["Comedy|Drama"],
  },
  {
    id: 70,
    name: "Conn",
    gender: "Male",
    nationality: "Ireland",
    degree: ["Drama|War"],
  },
  {
    id: 71,
    name: "Emmalynne",
    gender: "Female",
    nationality: "Venezuela",
    degree: ["Drama|Mystery|Thriller"],
  },
  {
    id: 72,
    name: "Sharon",
    gender: "Female",
    nationality: "Kuwait",
    degree: ["Adventure|Animation|Children|Comedy"],
  },
  {
    id: 73,
    name: "Margaretta",
    gender: "Female",
    nationality: "Mayotte",
    degree: ["Adventure|Drama"],
  },
  {
    id: 74,
    name: "Lydie",
    gender: "Female",
    nationality: "China",
    degree: ["Drama"],
  },
  {
    id: 75,
    name: "Matthew",
    gender: "Male",
    nationality: "Georgia",
    degree: ["Action|Crime|Drama"],
  },
  {
    id: 76,
    name: "Aldo",
    gender: "Male",
    nationality: "Mongolia",
    degree: ["Comedy"],
  },
  {
    id: 77,
    name: "Red",
    gender: "Male",
    nationality: "Canada",
    degree: ["Horror|Thriller"],
  },
  {
    id: 78,
    name: "Flemming",
    gender: "Male",
    nationality: "China",
    degree: ["Comedy|Drama"],
  },
  {
    id: 79,
    name: "Reese",
    gender: "Male",
    nationality: "Indonesia",
    degree: ["Children|Sci-Fi"],
  },
  {
    id: 80,
    name: "Persis",
    gender: "Female",
    nationality: "Mongolia",
    degree: ["Drama"],
  },
  {
    id: 81,
    name: "Kerri",
    gender: "Female",
    nationality: "China",
    degree: ["Horror|Thriller"],
  },
  {
    id: 82,
    name: "Theodor",
    gender: "Male",
    nationality: "Luxembourg",
    degree: ["Drama"],
  },
  {
    id: 83,
    name: "Bee",
    gender: "Female",
    nationality: "China",
    degree: ["Comedy|Romance"],
  },
  {
    id: 84,
    name: "Weidar",
    gender: "Male",
    nationality: "Brazil",
    degree: ["Comedy|Drama|Romance"],
  },
  {
    id: 85,
    name: "Mollee",
    gender: "Female",
    nationality: "Philippines",
    degree: ["Action|Fantasy|Horror|Thriller"],
  },
  {
    id: 86,
    name: "Aleta",
    gender: "Female",
    nationality: "Mexico",
    degree: ["Action|Romance|Thriller"],
  },
  {
    id: 87,
    name: "Eustace",
    gender: "Male",
    nationality: "Philippines",
    degree: ["Comedy|Fantasy|Romance"],
  },
  {
    id: 88,
    name: "Giustina",
    gender: "Female",
    nationality: "Haiti",
    degree: ["Action|Adventure|Drama"],
  },
  {
    id: 89,
    name: "Aubert",
    gender: "Male",
    nationality: "Norway",
    degree: ["Drama"],
  },
  {
    id: 90,
    name: "Elianora",
    gender: "Female",
    nationality: "Poland",
    degree: ["Action|Adventure|Comedy|Crime|Thriller"],
  },
  {
    id: 91,
    name: "Berna",
    gender: "Female",
    nationality: "Argentina",
    degree: ["Drama|Thriller"],
  },
  {
    id: 92,
    name: "Giff",
    gender: "Male",
    nationality: "China",
    degree: ["Comedy"],
  },
  {
    id: 93,
    name: "Wandie",
    gender: "Female",
    nationality: "China",
    degree: ["Thriller|War"],
  },
  {
    id: 94,
    name: "Woodrow",
    gender: "Male",
    nationality: "Brazil",
    degree: ["Documentary|Drama"],
  },
  {
    id: 95,
    name: "Ruperta",
    gender: "Female",
    nationality: "Indonesia",
    degree: ["Crime|Horror|Thriller"],
  },
  {
    id: 96,
    name: "Michael",
    gender: "Male",
    nationality: "Peru",
    degree: ["Comedy"],
  },
  {
    id: 97,
    name: "Deva",
    gender: "Female",
    nationality: "Russia",
    degree: ["Documentary"],
  },
  {
    id: 98,
    name: "Ashla",
    gender: "Female",
    nationality: "Philippines",
    degree: ["Documentary"],
  },
  {
    id: 99,
    name: "Daphene",
    gender: "Female",
    nationality: "Indonesia",
    degree: ["Comedy"],
  },
  {
    id: 100,
    name: "Adam",
    gender: "Male",
    nationality: "China",
    degree: ["Drama"],
  },
];
export const getPerons = (filters) => {
  let response = mockData.filter((x) => {
    if (filters && Object.keys(filters).length > 0) {
      const { name, gender, nationality, degree } = filters;
      if (!!name && x.name.includes(name)) {
        return true;
      } else if (!!gender && x.gender.includes(gender)) {
        return true;
      } else if (!!nationality && x.nationality.includes(nationality)) {
        return true;
      } else if (Array.isArray(degree) && degree.length > 0 && x.degree.some((item) => new Set(degree).has(item))) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response);
    }, 3 * 1000);
  });
};

export const deletePerson = (id) => {
  mockData = mockData.filter((x) => x.id !== id);
  return new Promise((resolve) => {
    resolve({ isDeleted: true });
  });
};

export const editPerson = (person) => {
  mockData = mockData.map((x) => {
    if (x.id === person.id) x = person;
    return x;
  });

  return new Promise((resolve) => {
    resolve({ isUpdated: true });
  });
};
