// @ts-ignore

import {useEffect, useState} from "react";
import classes from "../Style/Components/reg.module.scss";
import UIButton from "./UIButton";
import { useNavigate } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import { login, registration, check } from "../Store/ActionCreators/UserActionCreators";
import { data } from "./data";
import UIInput from "./UIInput";
import {  motion, useMotionValue, useTransform, animate} from "framer-motion";
const Reg = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [reg, setReg] = useState(true);


  const [customLogin, setCustomLogin] = useState("");
  const [customPhone, setCustomPhone] = useState("");

   

      const onSubmit = () => {
          const userData = {number: customPhone, password: customLogin};
          reg ? dispatch(login({userData})) : dispatch(registration({userData}));
      };



  return (

      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 3 }}

      >

    <div className={classes["Card"]}>
      {reg ? <h1>Registration</h1> : <h1>Login</h1>}
      <p>Phone number:</p>
        <UIInput
            text={"+ 7 (***) *** ** **"}
            value={customPhone}
            setValue={(e) => setCustomPhone(e.currentTarget.value)}
            type={"phone"}
        />
      <p>Password:</p>
        <UIInput
            text={"пароль"}
            value={customLogin}
            setValue={(e) => setCustomLogin(e.currentTarget.value)}
            type={"password"}
        />

      <UIButton type="radio" onClick={() => onSubmit()}>
        {reg ? "Log In" : "Register"}
      </UIButton>

      {reg ? (
        <p>
          Have an account?{" "}
          <UIButton type="range" onClick={() => setReg(!reg)}>
            Log in
          </UIButton>
        </p>
      ) : (
        <p>
          Don`t have an account?{" "}
          <UIButton type="range" onClick={() => setReg(!reg)}>
            Sign in
          </UIButton>
        </p>
      )}
      <UIButton type="active" onClick={() => navigate("/")}>
        Back
      </UIButton>
    </div>
      </motion.div>
  );
};
export default Reg;
