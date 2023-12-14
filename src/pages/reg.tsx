"use client"
// @ts-ignore

import {useEffect, useState} from "react";
import classes from "../Style/Components/reg.module.scss";
import UIButton from "../components/UIButton";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import { login, registration, check } from "@/Store/ActionCreators/UserActionCreators";
import UIInput from "../components/UIInput";
import {  motion, useMotionValue, useTransform, animate} from "framer-motion";
import {useRouter} from "next/router"

const Reg = () => {
  const dispatch = useAppDispatch();
  const router = useRouter()
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
      
        <UIInput
            text={"+ 7 (***) *** ** **"}
            value={customPhone}
            setValue={(e) => setCustomPhone(e.currentTarget.value)}
            type={"phone"}
        />
      
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
       
         
          <UIButton type="range" onClick={() => setReg(!reg)}>
            Log in
          </UIButton>
       
      ) : (
        
          
          <UIButton type="range" onClick={() => setReg(!reg)}>
            Sign in
          </UIButton>
        
      )}
      <UIButton type="active" onClick={() => router.push("/")}>
        Back
      </UIButton>
    </div>
      </motion.div>
  );
};
export default Reg;
