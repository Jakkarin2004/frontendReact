import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import FoodCard from "../function/FoodCard";
import axios from "axios";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [product, setProduct] = useState([]);

  //ดึงข้อมูลทั้งหมด
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="body-home">
      <div className="body-main">
        <div className="categories-container">
          <div className="categories-list">
            <div className="category-item">หมวดผัด</div>
            <div className="category-item">หมวดต้ม</div>
            <div className="category-item">หมวดทอด</div>
            <div className="category-item">หมวดยำ</div>
            <div className="category-item">หมวดขนม</div>
            <div className="category-item">หมวดของหวาน</div>
            <div className="category-item">หมวดน้ำพริก</div>
            <div className="category-item">หมวดซุป</div>
            <div className="category-item">หมวดเส้น</div>
            <div className="category-item">หมวดสเต็ก</div>
            <div className="category-item">หมวดข้าว</div>
            <div className="category-item">หมวดสลัด</div>
            <div className="category-item">หมวดเบเกอรี่</div>
            <div className="category-item">หมวดเครื่องดื่ม</div>
            <div className="category-item">หมวดผลไม้</div>
          </div>
        </div>
        <div className="img-home">
          <img
            src="https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="content-menu">
          <div className="">
            <h2 class="text-xl font-bold text-gray-800 m-2">รายการเมนูอาหาร</h2>
            <div className="menu-general">
              <FoodCard
                image="https://cdn.prod.website-files.com/629732c7c0e1401011449adc/6350f5166cfda1f319196a94_CrabFriedRice%402x.webp"
                name="ข้าวผัดปู"
                price="44"
              />
              <FoodCard
                image="https://cdn.prod.website-files.com/629732c7c0e1401011449adc/6350f5166cfda1f319196a94_CrabFriedRice%402x.webp"
                name="ข้าวผัดปู"
                price="44"
              />
              <FoodCard
                image="https://cdn.prod.website-files.com/629732c7c0e1401011449adc/6350f5166cfda1f319196a94_CrabFriedRice%402x.webp"
                name="ข้าวผัดปู"
                price="44"
              />
              <FoodCard
                image="https://cdn.prod.website-files.com/629732c7c0e1401011449adc/6350f5166cfda1f319196a94_CrabFriedRice%402x.webp"
                name="ข้าวผัดปู"
                price="44"
              />
              <FoodCard
                image="https://cdn.prod.website-files.com/629732c7c0e1401011449adc/6350f5166cfda1f319196a94_CrabFriedRice%402x.webp"
                name="ข้าวผัดปู"
                price="44"
              />
              {product.map((data, i) => (
                <FoodCard
                  key={i}
                  image={'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGhhaSUyMGZvb2R8ZW58MHx8MHx8fDA%3D'}
                  name={data.product_name}
                  price={data.product_price}
                />
              ))}
            </div>
          </div>
          <div className="menu-group">
            <h2 class="text-xl font-bold text-gray-800 m-2">เมนูยอดฮิต</h2>
            <div className="special-menu">
              <img
                src="https://cdn.prod.website-files.com/629732c7c0e1401011449adc/6350f5166cfda1f319196a94_CrabFriedRice%402x.webp"
                alt=""
              />
              <div className="">
                <p>ข้าวผัดปู</p>
                <p>44 บาท</p>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-700 transition duration-300">
                  สั่งซื้อ
                </button>
              </div>
            </div>
            <div className="special-menu">
              <img
                src="https://cdn.prod.website-files.com/629732c7c0e1401011449adc/6350f5166cfda1f319196a94_CrabFriedRice%402x.webp"
                alt=""
              />
              <div className="">
                <p>ข้าวผัดปู</p>
                <p>44 บาท</p>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-700 transition duration-300">
                  สั่งซื้อ
                </button>
              </div>
            </div>
            <div className="special-menu">
              <img
                src="https://cdn.prod.website-files.com/629732c7c0e1401011449adc/6350f5166cfda1f319196a94_CrabFriedRice%402x.webp"
                alt=""
              />
              <div className="">
                <p>ข้าวผัดปู</p>
                <p>44 บาท</p>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-700 transition duration-300">
                  สั่งซื้อ
                </button>
              </div>
            </div>
            <div className="special-menu">
              <img
                src="https://cdn.prod.website-files.com/629732c7c0e1401011449adc/6350f5166cfda1f319196a94_CrabFriedRice%402x.webp"
                alt=""
              />
              <div className="">
                <p>ข้าวผัดปู</p>
                <p>44 บาท</p>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-700 transition duration-300">
                  สั่งซื้อ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
