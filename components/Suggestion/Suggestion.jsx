'use client'
import React, { useRef, useState } from 'react'
import style from './sugg.module.css'
const Suggestion = () => {
  let [name, setName] = useState('name is required');
  let [nameErr, setNameErr] = useState(false);
  let [mail, setMail] = useState('email is required');
  let [mailErr, setMailErr] = useState(false);
  let [phone, setPhone] = useState('phone is required');
  let [phoneErr, setPhoneErr] = useState(false);
  let [text, setText] = useState('');
  let [oky, setOky] = useState(false);
  const formRef = useRef();
  const nnn = useRef();
  function handleName(e) {
    let n = e.target.value;
    localStorage.setItem("name", n);
    if (n === '') setName("name is requird");
    else if (!/^[a-zA-Z ]{2,30}$/.test(n))
      setName("The name must consist of at least two letters and contain only upper and lower case letters and space")
    else setName("")
  }
  function handleMail(e) {
    let m = e.target.value;
    localStorage.setItem("email", m);
    if (m === '') setMail("email is required");
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(m))
      setMail("The email must be in the form 'example@email.com'")
    else setMail("")

  }
  function handlePhone(e) {
    let p = e.target.value;
    localStorage.setItem("phone", p);
    if (p === '') setPhone("phone is requird");
    else setPhone("")


  }
    function handleText(e) {
      const value = e.target.value;
      setText(value);
      localStorage.setItem("suggestion", value); // استخدم القيمة المحدثة هنا بدلاً من text
    }
  
  const handelForm = (event) => {
    event.preventDefault();
    (name !== "") ? setNameErr(true) : setNameErr(false);
    (mail !== '') ? setMailErr(true) : setMailErr(false);
    (phone !== '') ? setPhoneErr(true) : setPhoneErr(false);
    if (name === "" && mail === '' && phone === '') {
      setOky(true);
      formRef.current.reset();
    }
    else { setOky(false) }
  }
  return (
    <div>
      <form className={style.formPer} ref={formRef} onSubmit={handelForm}>
        <h2>Request A Suggestion</h2>
        <input className={style.input} type='text' ref={nnn} placeholder='your name ...' onChange={handleName} />
        {(nameErr === true) && <p className={style.error} id='nerror'>{name}</p>}
        <input className={style.input} type='mail' placeholder='your email ...' onChange={handleMail} />
        {(mailErr === true) && <p className={style.error} id='nerror'>{mail}</p>}
        <input className={style.input} type='number' placeholder='your phone ...' onChange={handlePhone} />
        {(phoneErr === true) && <p className={style.error} id='nerror'>{phone}</p>}
        <textarea className={style.textarea} placeholder=' ' onChange={handleText}>tell us about your suggestion ... </textarea>
        <input className={style.submit} ref={formRef} type='submit' value='send'  />
        {oky === true && <h3 className={style.done}>successfully done</h3>}
      </form>
    </div>
  )
}

export default Suggestion