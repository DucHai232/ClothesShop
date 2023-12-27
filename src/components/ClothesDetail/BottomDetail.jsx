import React, { useState } from "react";
import { useParams } from "react-router";
import BottomClothes from "../../Data/BottomClothes.json";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import BottomEvaluate from "./BottomEvaluate";
import BottomEvaImage from "./BottomEvaImage";
import ProductSlider from "./ProductSlider";

export default function BottomDetail() {
  const [isOpenDes, setIsOpenDes] = useState(false);
  const [isOpenImage, setIsOpenImage] = useState(false);
  const detailId = useParams();
  const dataDetail = BottomClothes.find((item) => item.id == detailId.id);
  const handleClickEvaluate = () => {
    setIsOpenDes(true);
    setIsOpenImage(false);
  };
  const handleClickImage = () => {
    setIsOpenDes(false);
    setIsOpenImage(true);
  };
  return (
    <Container style={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <div className="bottom-detail-left">
            <span className="left-title">{dataDetail.title}</span>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <span className="detail-price">{dataDetail.price}đ</span>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <span className="detail-status">
                  <b>Tình trạng: </b>Còn hàng
                </span>
              </Grid>
            </Grid>
            <div className="detail-desc">
              <p>Màu sắc: black</p>
              <p>Chất liệu: DÙ + LƯỚI LÓT (MESH) </p>
              <p>Form quần : REGULAR</p>
            </div>
            <div className="detail-size">
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
            <div className="detail-role">
              <span>Hướng dẫn chọn size</span>
              <span>Chính sách đổi trả</span>
            </div>
            <div className="detail-quantity">
              <span>
                {" "}
                <b>Số lượng</b>{" "}
              </span>
              <input type="number" min={0} />
            </div>
            <div className="detail-click">
              <button>Thêm vào giỏ</button>
              <button>Mua ngay</button>
            </div>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="bottom-detail-right">
            <div className="detail-image-left">
              <img src={dataDetail.image} />
            </div>

            <div className="detail-image-right">
              <ul>
                <li>
                  {" "}
                  <img src={dataDetail.image} />
                </li>
                <li>
                  {" "}
                  <img src={dataDetail.image} />
                </li>
                <li>
                  {" "}
                  <img src={dataDetail.image} />
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="detail-evaluate">
        <Grid container spacing={2}>
          <Grid xs={3}>
            <div className="evaluate-star">
              <span> ĐÁNH GIÁ SẢN PHẨM</span>
              <div class="rating">
                <input type="radio" id="star5" name="rating" value="5" />
                <label for="star5"></label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label for="star4"></label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label for="star3"></label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label for="star2"></label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label for="star1"></label>
              </div>
            </div>
          </Grid>
          <Grid xs={9}>
            <div className="detail-user-evaluate">
              <div className="detail-nav">
                <ul>
                  <li>
                    <p onClick={handleClickEvaluate}>Tất cả đánh giá (0)</p>
                  </li>
                  <li>
                    <p onClick={handleClickImage}>Tất cả hình ảnh (1)</p>
                  </li>
                </ul>

                <BottomEvaluate isOpen={isOpenDes} setIsOpen={setIsOpenDes} />
                <BottomEvaImage
                  isOpen={isOpenImage}
                  setIsOpenImage={setIsOpenImage}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="product-related">
        <span className="product-related-title">Sản phẩm liên quan</span>
        <ProductSlider />
      </div>
    </Container>
  );
}
