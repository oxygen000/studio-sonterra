import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        {/* النص */}
        <div className="flex justify-center items-center mb-2">
        <Image src="/logo.png" width={50} height={50} alt="Dev Duck Logo" className="mr-2" />
          <p className="text-sm mr-2">Powered By</p>
          <p className="font-semibold">Dev Duck co</p>
        </div>
        <p className="text-xs">
          © {new Date().getFullYear()} Studio Sonterra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
