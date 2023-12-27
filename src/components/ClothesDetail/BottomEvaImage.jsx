import React from "react";
import "./BottomEvaImage.css";
export default function BottomEvaImage(props) {
  const { isOpen, setIsOpen } = props;
  return (
    isOpen && (
      <div className="image-container">
        <img
          src="https://bizweb.dktcdn.net/thumb/grande/100/399/392/files/ao-thun-nam-co-tron-quan-ao-chat-luong-den-tu-hiddle-min.jpg?v=1677053410046"
          width={"200px"}
          height={"200px"}
        />
        <span className="image-des">
          Chất lượng quần đẹp, trải nghiệm rất tuyệt vời cảm ơn shop!
        </span>
      </div>
    )
  );
}
