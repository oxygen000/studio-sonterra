"use client";

import React from "react";
import JsBarcode from "jsbarcode";

// تعريف واجهة للطلب
interface Order {
  id: number;
  customer: string;
  date: string;
  total: number;
  status: string;
}

const Receipt = ({ order }: { order: Order }) => {
  const barcodeRef = React.useRef<SVGSVGElement | null>(null);

  React.useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, order.id.toString(), { format: "CODE128" });
    }
  }, [order.id]);

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">إيصال الطلب</h2>
      <div className="space-y-4">
        <p>
          <span className="font-bold">رقم الطلب:</span> {order.id}
        </p>
        <p>
          <span className="font-bold">اسم العميل:</span> {order.customer}
        </p>
        <p>
          <span className="font-bold">التاريخ:</span> {order.date}
        </p>
        <p>
          <span className="font-bold">المجموع:</span> ${order.total}
        </p>
        <p>
          <span className="font-bold">الحالة:</span> {order.status}
        </p>
        <div className="flex justify-center">
          <svg ref={barcodeRef}></svg>
        </div>
      </div>
    </div>
  );
};

export default Receipt;