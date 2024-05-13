import { useState } from 'react';
import category from "../Data.json";

export default function VegetableCategorycard() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div>
      <div className="container sm:mb-5 lg:mb-16 xl:mb-16 2xl:mb-16 md:mb-5 mb-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 gap-5">
          {category.vegetable_categories.map((item, i) => (
            <div key={i} className="bg-white shadow-md rounded-md p-5" onClick={() => handleCategoryClick(item.category_id)}>
              <img
                src={item.image_url}
                alt="vegetable"
                className="w-full h-40 object-cover rounded-md cursor-pointer"
              />
              <h1 className="text-lg font-bold mt-2">{item.category_name}</h1>
            </div>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div className="container sm:mb-5 lg:mb-16 xl:mb-16 2xl:mb-16 md:mb-5 mb-5">
          <h1 className="text-center text-2xl font-bold">Vegetable Products</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 gap-5">
            {category.vegetable_categories
              .filter((item) => item.category_id === selectedCategory)
              .map((item) => (
                item.products.map((product, idx) => (
                  <div key={idx} className="bg-white shadow-md rounded-md p-5">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h1 className="text-lg font-bold mt-2">{product.name}</h1>
                    <p className="font-bold">{product.price}</p>
                    <button className="bg-secondary text-white px-4 py-2 mt-2 rounded-md">Add to Cart</button>
                  </div>
                ))
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
