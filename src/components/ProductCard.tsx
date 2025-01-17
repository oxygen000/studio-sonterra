import Image from 'next/image';
interface ProductProps {
    id: string;
    name: string;
    price: number;
    image: string;
  }
  
  export default function ProductCard({ id, name, price, image }: ProductProps) {
    return (
      <div className="border rounded-lg shadow-md p-4">
        <Image src={image} alt={name} className="w-full h-48 object-cover" />
        <h2 className="mt-2 text-lg font-bold">{name}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
        <button className="mt-4 bg-accent text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    );
  }
  