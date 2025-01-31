import React from 'react';

function FoodCard({ image, name, price }) {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
      {/* รูปภาพ */}
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      
      <div className="p-4">
        {/* ชื่อเมนูอาหาร */}
        <h3 className="text-center font-semibold text-gray-800">{name}</h3>
        
        {/* ขีดยาวข้างล่าง */}
        <div className="my-2 border-t-2 border-gray-300"></div>
        
        {/* ราคา */}
        <p className="text-center font-bold text-gray-600">{price} บาท</p>
        
        {/* ปุ่มสั่งซื้อ */}
        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-700 transition duration-300">
          สั่งซื้อ
        </button>
      </div>
      
    </div>
  );
}

export default FoodCard;
