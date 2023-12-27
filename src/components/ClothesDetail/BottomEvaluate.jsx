import React from "react";

export default function BottomEvaluate(props) {
  const { isOpen } = props;

  return isOpen && <div>Sản phẩm chưa có đánh giá</div>;
}
