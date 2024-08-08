'use client'
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import React, { useRef, useState } from 'react'
import { dataComm } from './data'
import style from './Comment.module.css'
import SecName from '../SecName/SecName'
const Comment = () => {
    let [like1, setLike1] = useState(false);
    let [dislike1, setDisLike1] = useState(false);
    const ff = useRef();
    const handellike1 = () => {
        setLike1(!like1)
        if (!like1 === true && dislike1 === true) setDisLike1(false)
    }
    const handeldislike1 = () => {
        setDisLike1(!dislike1)
        if (like1 && !dislike1 === true) setLike1(false)
    }
    let [name, setName] = useState("")
    let [comm, setComm] = useState("")
    let [add, setAdd] = useState(false)
    const handelName = (e) => {
        setName(e.target.value);
        localStorage.setItem('name', e.target.value);
    }
    const handelComm = (e) => {
        setComm(e.target.value);
        localStorage.setItem('comment', e.target.value)
    }
    const handelForm =()=>{
        ff.current.reset();
    }
    let [like, setLike] = useState(false);
    let [dislike, setDisLike] = useState(false);
    let allComm = dataComm.map((item, ind) => {
        const handellike = () => {
            setLike(!like)
            if (!like === true && dislike === true) setDisLike(false)
        }
        const handeldislike = () => {
            setDisLike(!dislike)
            if (like && !dislike === true) setLike(false)
        }

        return (
            <div className={style.comment} key={ind}>
                <h3>{item.name}</h3>
                <p>{item.comm}</p>
                <span className={style.span1}>
                    <span className={style.like} >
                        <span id={item.name} onClick={handellike}>{(like === true) ? <BiSolidLike /> : <BiLike />}</span>
                        <span id={item.name} onClick={handeldislike}>{(dislike === true) ? <BiSolidDislike /> : <BiDislike />}</span>
                    </span>
                </span>
            </div>)

    })
    const addComm = (event) => {
        event.preventDefault();
        if (name != "" && comm != "") {
            setAdd(true);
            ff.current.reset();
        }
    }
    return (
        <div className={style.container}>
            <SecName name='Opinions' />
            <div className={style.con}>
                <div className={style.comments}>
                    {allComm}
                    <div className={`${style.comment} ${style.ex} ${add ? style.visible : ""}`} >
                        <h3>{name}</h3>
                        <p>{comm}</p>
                        <span className={style.span1}>
                            <span className={style.like} >
                                <span  onClick={handellike1}>{(like1 === true) ? <BiSolidLike /> : <BiLike />}</span>
                                <span  onClick={handeldislike1}>{(dislike1 === true) ? <BiSolidDislike /> : <BiDislike />}</span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className={style.addComm}>
                    <h2>Add Comment</h2>
                    <form onClick={addComm} ref={ff}>
                        <div className={style.info}>
                            <label>Enter Your Name</label>
                            <input type='name' placeholder='Full Name...' id='name' onChange={handelName} />
                        </div>
                        <div>
                            <label className={style.info}>Enter Your Comment </label>
                            <textarea className={style.textarea} name="comment" id='comment' cols="30" rows="10" onChange={handelComm}></textarea>
                        </div>
                        <input className={style.submit}  type='submit' value='send' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Comment
