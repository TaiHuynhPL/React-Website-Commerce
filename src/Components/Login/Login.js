import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionUserLogin } from "../../store/userlogin";

import classes from "./Login.module.css";

function Login() {
  //Tạo các state cho ô input
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  //Tạo các state cho việc Validate
  const [isFullInput, setIsFullInput] = useState(true);
  const [isInvalidFullInput, setIsInvalidFullInput] = useState(false);
  const [isIncorectInput, setIsIncorectInput] = useState(false);

  //Sử dụng useNavigate để điều hướng trang
  const navigate = useNavigate();

  //tạo hàm dispatch
  const dispatch = useDispatch();

  //Lấy mảng users có được từ localStorage
  const usersArr = JSON.parse(localStorage.getItem("users")) || [];

  //Hàm thay đổi giá trị ô email, và password
  const handlerChangeEmail = (event) => {
    setInputEmailValue(event.target.value);
  };
  const handlerChangePassword = (event) => {
    setInputPasswordValue(event.target.value);
  };

  useEffect(() => {
    //Khi chưa nhập hết thông tin các ô thì hiển thị chuột không thể nhấn vào nút sign in
    if (inputEmailValue && inputPasswordValue) {
      setIsFullInput(false);
    } else {
      setIsFullInput(true);
    }
  }, [inputEmailValue, inputPasswordValue]);

  //hàm khi click vào nút sign in
  const handlerLogin = (event) => {
    event.preventDefault();

    //Validate cho việc chưa nhập đủ thông tin vào các ô
    if (!inputEmailValue || !inputPasswordValue) {
      setIsInvalidFullInput(true);
      //Validate cho việc 1 trong 2 ô(email và mật khẩu) sai
    } else if (
      !usersArr.map((user) => user.email).includes(inputEmailValue) ||
      !usersArr.map((user) => user.password).includes(inputPasswordValue)
    ) {
      setIsInvalidFullInput(false);
      setIsIncorectInput(true);
      setInputPasswordValue("");
      //Nếu đăng nhập đúng
    } else {
      //tạo biến mới gán cho tài khoản đăng nhập
      const userlogin = usersArr.filter(
        (user) => user.email === inputEmailValue
      )[0];
      //dispatch action login
      dispatch(actionUserLogin.on_login(userlogin));

      //chuyển hướng về trang chủ
      navigate("..");
    }
  };

  return (
    <div className={classes.login}>
      <div className={classes.banner}>
        <div className={classes.signup}>
          <h4>Sign In</h4>
          <form className={classes.inputContainer}>
            <input
              type="email"
              placeholder="Email"
              className={classes.input}
              value={inputEmailValue}
              onChange={handlerChangeEmail}
            />
            <input
              type="password"
              placeholder="Password"
              className={classes.input}
              value={inputPasswordValue}
              onChange={handlerChangePassword}
            />
            <button
              className={isFullInput ? classes.btnDisabled : classes.btnSignup}
              onClick={handlerLogin}
            >
              SIGN IN
            </button>
          </form>
          {isInvalidFullInput && (
            <p className={classes.isInvalidInput}>
              You have not entered all the input!
            </p>
          )}
          {!isInvalidFullInput && isIncorectInput && (
            <p className={classes.isInvalidInput}>
              Incorrect login information!
            </p>
          )}
          <p className={classes.loginclick}>
            Create an account?
            <Link to="../register" className={classes.click}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
