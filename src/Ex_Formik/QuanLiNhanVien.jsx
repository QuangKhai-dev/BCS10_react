import React, { useState } from "react";
import FormNhanVien from "./FormNhanVien";
import TableNhanVien from "./TableNhanVien";

const QuanLiNhanVien = () => {
  const [arrNhanVien, setArrNhanVien] = useState([]);

  // thêm nhân viên
  const handleAddNhanVien = (nhanVien) => {
    setArrNhanVien(nhanVien);
  };

  return (
    <div>
      <div className="container mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center">
          Bài tập quản lí nhân viên Formik - Yup
        </h1>
        {/* form  */}
        <FormNhanVien />
        {/* table  */}
        <TableNhanVien />
      </div>
    </div>
  );
};

export default QuanLiNhanVien;
