import { useSelector } from "react-redux";

import classes from "./Checkout.module.css";

//Component thanh toán, check out
function Checkout() {
  //Lấy giá trị mảng sản phẩm và tổng tiền thanh toán từ state listcart của redux
  const cartitems = useSelector((state) => state.listcart.items);
  const totalAmount = useSelector((state) => state.listcart.totalAmount);

  //Hàm để chuyển dãy số thành dãy số được viết theo format tiền
  const convertPrice = (price) => {
    const newprice = new Intl.NumberFormat("vi-VN").format(price);
    return newprice;
  };

  return (
    <div className={classes.checkout}>
      <div className={classes.checkoutBanner}>
        <p className={classes.checkoutlarge}>SHOP</p>
        <p className={classes.checkoutsmall}>
          <span className={classes.navbanner}>HOME / </span>
          <span className={classes.navbanner}>CART / </span>SHOP
        </p>
      </div>
      <h5>BILLING DETAILS</h5>
      <div className={classes.checkoutContainer}>
        <div className={classes.info}>
          <label htmlFor="name" className={classes.infolabel}>
            FULL NAME:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name Here!"
            className={classes.infoinput}
          />
          <label htmlFor="email" className={classes.infolabel}>
            EMAIL:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Here!"
            className={classes.infoinput}
          />
          <label htmlFor="phone" className={classes.infolabel}>
            PHONE NUMBER:
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number Here!"
            className={classes.infoinput}
          />
          <label htmlFor="address" className={classes.infolabel}>
            ADDRESS:
          </label>
          <input
            type="text"
            name="address"
            placeholder="Enter Your Address Here!"
            className={classes.infoinput}
          />
          <button className={classes.infobtn}>Place order</button>
        </div>
        <div className={classes.order}>
          <div className={classes.orderContainer}>
            <p className={classes.ordertitle}>YOUR ORDER</p>
            {cartitems.map((item) => (
              <div key={item.id} className={classes.orderitem}>
                <p className={classes.orderitemName}>{item.name}</p>
                <p className={classes.orderitemPrice}>
                  {convertPrice(item.price)} VND x {item.amount}
                </p>
              </div>
            ))}

            <div className={classes.total}>
              <p className={classes.totalName}>TOTAL</p>
              <p className={classes.totalPrice}>
                {convertPrice(totalAmount)} VND
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
