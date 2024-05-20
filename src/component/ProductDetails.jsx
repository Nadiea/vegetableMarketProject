import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import category from "../Data.json"; // Import your JSON data file

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with the matching ID
    let foundProduct = null;
    category.vegetable_categories.forEach((category) => {
      category.products.forEach((item) => {
        if (item.product_id === id) {
          foundProduct = item;
        }
      });
    });
    setProduct(foundProduct);
  }, [id]);

  return (
    <div>
      {product ? (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col md:flex-row -mx-4 gap-10">
              <div className="md:flex-1 border ">
                <img
                  className=" hover:shadow-2xl w-full h-full  hover:border-primary border-secondary shadow-secondary shadow-md"
                  src={product.image_url}
                  alt="Product Image"
                />
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {product.name}
                </p>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Price:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {product.price}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Product Description:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {product.description}
                  </p>
                </div>

                <div className=" mt-5 flex gap-3 ">
                  <div className=" text-3xl font-bold text-secondary w-10 h-10 flex justify-center rounded-full shadow-secondary shadow-md hover:bg-logo hover:text-white border-secondary border  ">+</div>
                  <div className=" text-2xl font-bold">0</div>
                  <div className=" text-3xl font-bold text-secondary w-10 h-10 flex justify-center rounded-full shadow-secondary shadow-md hover:bg-logo hover:text-white border-secondary border text-center items-center  ">-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
