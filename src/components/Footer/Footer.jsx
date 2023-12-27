import React from "react";
import "./Footer.css";
import { Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Footer() {
  return (
    <div className="footer">
      <Grid container spacing={2}>
        <Grid xs={4}>
          <div className="footer-left">
            <h1>SWP Shop</h1>
            <div>
              <div>
                <LocationOnIcon />
                <span>Hệ thống cửa hàng</span>
                <div>
                  <h4>TP Hồ Chí Minh</h4>
                  <div>
                    <span>
                      5B đường số 2, khu phố 2, phường Tam Bình, TP Thủ Đức
                    </span>
                    <span>182/13A Lê Văn Sỹ, phường 10, quận Phú Nhuận</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid xs={8}>b</Grid>
      </Grid>
    </div>
  );
}
