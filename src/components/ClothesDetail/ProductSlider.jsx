import React, { useEffect, useRef, useState } from "react";
import BottomClothes from "../../Data/BottomClothes.json";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styled from "@emotion/styled";
import { SmoothHorizontalScrolling } from "../../utils/index";
export default function ProductSlider() {
  const sliderRef = useRef();
  const productRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) {
        handleScrollRight();
      }
      if (dragMove > dragDown) {
        handleScrollLeft();
      }
    }
  }, [dragDown, dragMove, isDrag]);
  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        productRef.current.clientWidth,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -productRef.current.clientWidth,
        sliderRef.current.scrollLeft
      );
    }
  };

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };

  const onDragEnd = (e) => {
    setIsDrag(false);
  };

  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };
  return (
    <ProductRowContainer draggable="false">
      <ProductSilder
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
      >
        {BottomClothes.map((item) => (
          <div
            key={item.id}
            className="product-item"
            ref={productRef}
            draggable="false"
          >
            <img src={item.image} draggable="false" />
            <div className="product-title">{item.price}đ</div>
          </div>
        ))}
      </ProductSilder>
      <div className="btnLeft" onClick={handleScrollLeft}>
        <ArrowBackIosIcon />
      </div>
      <div className="btnRight" onClick={handleScrollRight}>
        {" "}
        <ArrowForwardIosIcon />
      </div>
    </ProductRowContainer>
  );
}

const ProductRowContainer = styled.div`
  backgroundcolor: black;
  color: black;
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;
  .heading {
    font-size: 18px;
    user-select: none;
  }
  .btnLeft {
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100px;
    width: 50px;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-20%);
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  .btnRight {
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100px;
    width: 50px;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-20%);
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
`;
const ProductSilder = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${BottomClothes.length}, 300px);
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;
  &:hover .product-item {
    opacity: 0.5;
  }
  .product-item {
    transform: scale(1);
    max-width: 400px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .product-title {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 4px;
      text-align: center;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
    }
  }
`;
