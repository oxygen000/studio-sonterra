import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { gsap } from 'gsap';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

function Card() {
  const [, setCart] = useState<Product[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);

  const product: Product = {
    id: 1,
    name: 'Product Name',
    price: 29.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/300',
  };

  const addToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  useEffect(() => {
    if (cardRef.current) {
      // تطبيق الأنيميشن باستخدام GSAP
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 }, // الحالة الأولية
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' } // الحالة النهائية
      );
    }
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div
        ref={cardRef} // ربط الكارد بـ GSAP
        className="bg-white rounded-lg shadow-lg p-8 max-w-sm mx-auto"
      >
        <div className="relative overflow-hidden h-48 w-full rounded-md">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-4">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-900 font-bold text-lg">${product.price}</span>
          <button
            onClick={addToCart}
            className="flex items-center bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
          >
            <FaShoppingCart className="mr-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
