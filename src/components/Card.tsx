"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

function Card() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [, setCart] = useState<Product[]>([]);

  const router = useRouter(); // تهيئة useRouter

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  useEffect(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleProductClick = (id: string) => {
    router.push(`/products/${id}`); // التوجيه إلى صفحة تفاصيل المنتج
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? (
        <div className="flex justify-center items-center ">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-yellow-400 border-solid"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="card bg-white rounded-lg shadow-xl p-6 flex flex-col justify-between transition-all transform hover:scale-105 cursor-pointer"
              onClick={() => handleProductClick(product._id)} // إضافة حدث عند النقر
            >
              <div className="relative overflow-hidden h-60 w-full rounded-lg mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">{product.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-semibold text-lg">${product.price}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // منع الحدث من التفعيل عند النقر على الزر
                    addToCart(product);
                  }}
                  className="flex items-center bg-yellow-400 text-white py-2 px-4 rounded-full font-semibold hover:bg-yellow-300 transition duration-200 ease-in-out"
                >
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
