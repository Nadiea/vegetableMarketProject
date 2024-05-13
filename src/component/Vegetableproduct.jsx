
import product from "/src/Data.json"; // Import the JSON data

export default function Vegetableproduct() {
  return (
    <>
    <div className="container sm:mb-5 lg:mb-16 xl:mb-16 2xl:mb-16 md:mb-5 mb-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 gap-5">
        {product.vegetable_categories.map((category, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-5">
            <ul className="list-disc ml-6">
              {category.products.map((product, idx) => (
                <li key={idx}>
                  <img src={product.image_url} alt={product.name} className="w-8 h-8 inline-block mr-2" />
                  <span className="font-semibold">{product.name}</span>: {product.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
}
