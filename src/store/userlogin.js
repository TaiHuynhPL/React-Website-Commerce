import { createSlice } from "@reduxjs/toolkit";

const userlogin = JSON.parse(localStorage.getItem("userlogin"));

//Giá trị ban đầu của tài khoản sẽ được lấy từ localstorage(nếu có), còn không thì chưa đăng nhập
const initialUserLogin = userlogin
  ? {
      user: userlogin,
      isLogin: true,
    }
  : {
      user: { name: "", email: "", password: "", phone: "" },
      isLogin: false,
    };

const userLoginSlice = createSlice({
  name: "userlogin",
  initialState: initialUserLogin,
  reducers: {
    //action đăng nhập
    on_login(state, action) {
      state.isLogin = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
      state.user.phone = action.payload.phone;

      //lưu tài khoản đăng nhập xuống localStorage
      localStorage.setItem("userlogin", JSON.stringify(state.user));
    },

    //action đăng xuất
    on_logout(state) {
      state.isLogin = false;
      state.user.name = "";
      state.user.email = "";
      state.user.password = "";
      state.user.phone = "";

      //xóa tài khoản trong localStorage
      localStorage.removeItem("userlogin");
    },
  },
});

export const actionUserLogin = userLoginSlice.actions;

export default userLoginSlice.reducer;
