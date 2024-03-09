import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const DemoUseEffect = () => {
  // useNavigate là hook từ react-router-dom giúp chuyển hướng trang sang một component mới
  const navigation = useNavigate();
  // Yêu cầu: thực hiện tạo state tên product và set giá trị mảng được trả về từ backend vào bên trong state đó
  const [product, setProduct] = useState([]);

  const getAllProduct = async () => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    console.log(res);
    setProduct(res.data.content);
  };

  // use effect chạy didmount
  useEffect(() => {
    console.log("Tôi là didmount phiên bản hook");
    getAllProduct();
  }, []);

  return (
    <div>
      <div className="row">
        {product.map((item, index) => {
          return (
            <div className="col-4">
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>Giá tiền: {item.price}</p>
              <p>Số lượng: {item.quantity}</p>
              <button
                onClick={() => {
                  navigation(`/detail/${item.id}`);
                }}
                className="btn btn-dark"
              >
                Xem chi tiết
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DemoUseEffect;
