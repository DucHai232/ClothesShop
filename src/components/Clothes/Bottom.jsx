import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BottomClothes from "../../Data/BottomClothes.json";
import { Link } from "react-router-dom";
export default function Bottom() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      style={{ marginTop: "50px" }}
    >
      {BottomClothes.map((item) => (
        <Grid item xs={2} sm={4} md={4} key={item.id}>
          <Item>
            <div>
              <Link className="link-text" to={`/Bottom/${item.id}`}>
                <img src={item.image} className="bottom-img" />
                <span className="bottom-title">{item.title}</span>
              </Link>

              <div className="bottom-price">
                <span className="bottom-sale-percent">-69%</span>
                <span className="bottom-sale-price">
                  {(item.price / 0.31).toFixed()}.000đ
                </span>
                <span className="bottom-sell-price">{item.price}đ</span>
              </div>
            </div>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}
