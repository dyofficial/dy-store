// import React from "react";
import { Grid } from "@material-ui/core";

import React from "react";
import Product from "./Product/Product";
import useStyles from "./styles";

// const products = [
//   {
//     id: 1,
//     name: "Playstation 5",
//     description: "Playstation console",
//     price: "$500",
//     image:
//       "https://www.cnet.com/a/img/VMa73_-Y0shIMY9o-1ZiqJ9Mv2U=/2021/03/08/b3cb8ee9-8eca-4097-a50f-7224e51b2afe/ps5-playstation-5-sony-hoyle-promo-11.jpg",
//   },
//   {
//     id: 2,
//     name: "Macbook",
//     description: "Apple macbook",
//     price: "$1000",
//     image:
//       "https://s.yimg.com/uu/api/res/1.2/LxtU3q9lL8SNrQlJxYoLcw--~B/aD0xMDg3O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-10/fc27e1e0-350a-11ec-8d7e-26deaf2f6d2b.cf.jpg",
//   },
// ];

function Products({ products, onAddToCart }) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
