import React, { useEffect, useState } from "react";
import { useParams, Outlet, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
const DemoChiTietProduct = () => {
  // hook useParams giúp lấy các giá trị trên param về để sử dụng
  // vd: /detail/iphone-15 thì sẽ bóc tách được iphone-15 về
  const { id } = useParams();
  const navigation = useNavigate();
  const [detail, setDetail] = useState({});
  console.log(id);

  const getProductById = async () => {
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
    });
    console.log(res);
    setDetail(res.data.content);
  };

  // useEffect chạy component didupdate
  // Thường dùng để xử lí cho các trang chi tiết về sản phẩm, hoặc với trường hợp cần xử lí khi một tham số thay đổi
  useEffect(() => {
    getProductById();

    // lệnh return giúp chạy component willunmount
    return () => {
      console.log("Tôi đã thoát khỏi trang chi tiết");
    };
  }, [id]);
  return (
    <div>
      <Outlet />
      <NavLink to="/">Quay về trang chủ</NavLink>
      <div>
        <img src={detail.image} alt="" />
        <h1>{detail.name}</h1>
        <p>{detail.price}</p>
      </div>
      <div className="row">
        {detail.relatedProducts?.map((item, index) => {
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

export default DemoChiTietProduct;
