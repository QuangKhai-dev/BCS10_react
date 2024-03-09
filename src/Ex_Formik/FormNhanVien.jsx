import React from "react";
import InputCustom from "./InputCustom";
import ButtonCustom from "./ButtonCustom";
import { useFormik } from "formik";
// msnv,hoTen,email,soDienThoai,chucVu,tienLuong

const FormNhanVien = () => {
  const { handleChange, handleSubmit, resetForm, values } = useFormik({
    // initialValues định nghĩa các thuộc tính lưu trữ các giá trị cho các input, một lưu ý muốn các input thêm dữ liệu vào đúng các thuộc tính có trong initialValues thì cần truyền thuộc tính name của input đúng tên các thuộc tính muốn lưu trữ
    initialValues: {
      msnv: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      chucVu: "",
      tienLuong: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
        <div>
          <InputCustom
            placeholder="Vui lòng nhập msnv"
            label="MSNV"
            id="msnv"
            name="msnv"
            onChange={handleChange}
            value={values.msnv}
          />
        </div>
        <div>
          <InputCustom
            placeholder="Vui lòng nhập họ tên"
            label="Họ tên"
            id="hoTen"
            name="hoTen"
            onChange={handleChange}
            value={values.hoTen}
          />
        </div>
        <div className="col-span-2">
          <InputCustom
            placeholder="Vui lòng nhập email"
            label="Email"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className="col-span-2">
          <InputCustom
            placeholder="Vui lòng nhập số điện thoại"
            label="Số điện thoại"
            id="soDienThoai"
            name="soDienThoai"
            onChange={handleChange}
            value={values.soDienThoai}
          />
        </div>
        <div>
          <InputCustom
            placeholder="Vui lòng nhập số tiền lương"
            label="Tiền lương"
            id="tienLuong"
            name="tienLuong"
            onChange={handleChange}
            value={values.tienLuong}
          />
        </div>
        <div>
          <label
            htmlFor="chucVu"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Chức vụ
          </label>
          <select
            name="chucVu"
            id="chucVu"
            onChange={handleChange}
            value={values.chucVu}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option selected>Chọn chức vụ</option>
            <option value="Giám đốc">Giám đốc</option>
            <option value="Trưởng phòng">Trưởng phòng</option>
            <option value="Công nhân">Công nhân</option>
            <option value="Lao công">Lao công</option>
          </select>
        </div>
        <div className="space-x-5">
          <ButtonCustom
            type="submit"
            className="bg-black"
            content="Thêm nhân viên"
          />
          <ButtonCustom
            onClick={() => {
              // console.log("Tôi đã bị bấm");
              resetForm();
            }}
            className="bg-purple-500"
            content="Reset"
          />
          <ButtonCustom
            className="bg-orange-600"
            content="Cập nhật nhân viên"
          />
        </div>
      </form>
    </div>
  );
};

export default FormNhanVien;
