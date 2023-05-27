import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./Register.module.css";

function Register() {
  //Sử dụng useRef để lưu element cho các ô input
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputPhoneRef = useRef();

  //Tạo các state cho việc Validate
  const [isInvalidFullInput, setIsInvalidFullInput] = useState(false);
  const [isInvalidEmailInput, setIsInvalidEmailInput] = useState(false);
  const [isInvalidPasswordInput, setIsInvalidPasswordInput] = useState(false);

  //Sử dụng useNavigate để điều hướng trang
  const navigate = useNavigate();

  //Lấy mảng users có được từ localStorage
  const usersArr = JSON.parse(localStorage.getItem("users")) || [];

  //hàm khi submit form
  const handlersubmit = (event) => {
    event.preventDefault();
    //Validate nếu người dùng chưa nhập đầy đủ thông tin các ô input
    if (
      !inputNameRef.current.value ||
      !inputEmailRef.current.value ||
      !inputPasswordRef.current.value ||
      !inputPhoneRef.current.value
    ) {
      setIsInvalidFullInput(true);
      //validate nếu email đã bị trùng
    } else if (
      usersArr.map((user) => user.email).includes(inputEmailRef.current.value)
    ) {
      setIsInvalidFullInput(false);
      setIsInvalidEmailInput(true);
      //validate nếu mật khẩu <= 8 ký tự
    } else if (inputPasswordRef.current.value.length <= 8) {
      setIsInvalidFullInput(false);
      setIsInvalidEmailInput(false);
      setIsInvalidPasswordInput(true);
      //Nếu không có validate
    } else {
      //Lưu thông tin tài khoản cho 1 biến mới
      const newuser = {
        name: inputNameRef.current.value,
        email: inputEmailRef.current.value,
        password: inputPasswordRef.current.value,
        phone: inputPhoneRef.current.value,
      };
      //thêm tài khoản đó vào mảng tài khoản
      usersArr.push(newuser);
      //lưu mảng tài khoản xuống localStorage
      localStorage.setItem("users", JSON.stringify(usersArr));
      //reset các ô input
      inputNameRef.current.value = "";
      inputEmailRef.current.value = "";
      inputPasswordRef.current.value = "";
      inputPhoneRef.current.value = "";
      //Reset các state validate
      setIsInvalidFullInput(false);
      setIsInvalidEmailInput(false);
      setIsInvalidPasswordInput(false);
      //chuyển hướng sang trang login
      navigate("../login");
    }
  };
  return (
    <div className={classes.register}>
      <div className={classes.banner}>
        <div className={classes.signup}>
          <h4>Sign Up</h4>
          <form onSubmit={handlersubmit} className={classes.inputContainer}>
            <input
              type="text"
              placeholder="Full Name"
              className={classes.input}
              name="fullname"
              ref={inputNameRef}
            />
            <input
              type="email"
              placeholder="Email"
              className={classes.input}
              name="email"
              ref={inputEmailRef}
            />
            <input
              type="password"
              placeholder="Password"
              className={classes.input}
              name="password"
              ref={inputPasswordRef}
            />
            <input
              type="tel"
              placeholder="Phone"
              className={classes.input}
              name="phone"
              ref={inputPhoneRef}
            />

            <button className={classes.btnSignup}>SIGN UP</button>
          </form>
          {isInvalidFullInput && (
            <p className={classes.isInvalidInput}>
              You have not entered all the input!
            </p>
          )}
          {!isInvalidFullInput && isInvalidEmailInput && (
            <p className={classes.isInvalidInput}>Your email is registered!</p>
          )}
          {!isInvalidFullInput &&
            !isInvalidEmailInput &&
            isInvalidPasswordInput && (
              <p className={classes.isInvalidInput}>
                Your password must be more than 8 characters!
              </p>
            )}
          <p className={classes.loginclick}>
            Login?
            <Link to="../login" className={classes.click}>
              Click
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
