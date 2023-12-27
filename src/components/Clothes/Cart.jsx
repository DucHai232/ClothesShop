import { Grid } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BottomClothes from "../../Data/BottomClothes.json";

import "./Cart.css";
export default function Cart() {
  return (
    <div className="cart-container">
      <div className="cart-title">Giỏ hàng</div>
      <div className="cart-product">
        <Grid container spacing={2}>
          <Grid xs={8}>
            {" "}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sản phẩm</TableCell>
                    <TableCell align="right">Giá</TableCell>
                    <TableCell align="right">Số lượng</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {BottomClothes.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="product-desc"
                      >
                        <img src={item.image} className="cart-product-image" />
                        <span className="cart-product-title">{item.title}</span>
                      </TableCell>
                      <TableCell align="right">
                        <div className="cart-price-sale">
                          {(item.price / 0.31).toFixed()}.000đ
                        </div>
                        <div className="cart-price-sell">{item.price}đ</div>
                      </TableCell>
                      <TableCell align="right">
                        <input type="number" min={0} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid xs={4}>
            <div className="cart-right">
              <div className="cart-right-title">Thông tin đơn hàng</div>
              <span className="cart-right-des">
                Phí vận chuyển sẽ được tính ở trang thanh toán
              </span>
              <hr />
              <div className="cart-total-money">
                <span>Tổng cộng:</span>
                <span>500.000đ</span>
              </div>
              <div className="cart-note">
                <span>Ghi chú đơn hàng</span>
                <textarea type="text" />
              </div>

              <button className="cart-button">Thanh toán</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
