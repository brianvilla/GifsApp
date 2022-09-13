import { useState } from "react";
import { AddCategory, Category, NoData } from "./components/";

export const GifsApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  if (categories.length === 0) {
    return (
      <div className="p-5">
        <h1 className="mb-5">GifsApp</h1>

        <AddCategory onAddCategory={onAddCategory} />

        <NoData />
      </div>
    );
  } else {
    return (
      <div className="p-5">
        <h1 className="mb-5">GifsApp</h1>

        <AddCategory onAddCategory={onAddCategory} />

        {categories.map((category) => (
          <Category key={category} category={category} />
        ))}
      </div>
    );
  }
};
