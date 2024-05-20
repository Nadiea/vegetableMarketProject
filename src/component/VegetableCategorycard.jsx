import { useContext, useState } from "react";
import category from "../Data.json";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";


export default function VegetableCategorycard() {
  const [selectedCategory, setSelectedCategory] = useState(null);



  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };


//addtocart function
const { cart, setCart } = useContext(CartContext);



const handleAddtoCart = (product) => {
  console.log(product);
  setCart(cart + 1);
  localStorage.setItem("cart", cart + 1);

 

 
}



  return (
    <div>
      <h1 className="text-center text-2xl font-bold m-10">
        Please Select Vegetable
      </h1>
      <div className="container sm:mb-5 lg:mb-16 xl:mb-16 2xl:mb-16 md:mb-5 mb-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 gap-5">
          {category.vegetable_categories.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-md p-5"
              onClick={() => handleCategoryClick(item.category_id)}
            >
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
              .map((item) =>
                item.products.map((product, idx) => (
                  <div key={idx} className="bg-white border mt-4 border-secondary shadow-md rounded-md p-5">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h1 className="text-lg font-bold mt-2">{product.name}</h1>
                    <p className="font-bold">{product.price}</p>
                    <div className=" flex-none sm:flex-none md:flex-none lg:flex-none xl:flex  2xl:flex justify-between        ">
                      <button  onClick={() => handleAddtoCart({product})} className="bg-secondary text-white px-2 py-1 mt-2 rounded-md">
                        Add to Cart
                      </button>
                      <Link to={`/products/${product.product_id}`}>
                        <button className="bg-logo text-white px-2 py-1 mt-2 rounded-md">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>
      )}
    </div>
  );
}
