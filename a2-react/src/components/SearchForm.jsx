import React from "react";

export const SearchForm = () => {
  return (
    <form>
      <input name="firstName" />
      <input name="lastname" />
      <input type="radio" name="gender" />
      <input type="radio" name="gender" />
      <button>Search</button>
      <button>Reset</button>
    </form>
  );
};
