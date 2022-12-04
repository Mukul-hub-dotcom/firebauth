import React,{useState,useEffect} from 'react'
import {auth} from '../firebase'

const Fireauth = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[user,setUser]=useState('')
    let create=async()=>{
        let res=await auth.signInWithEmailAndPassword(email,password)
        console.log(res)
    }

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>
            setUser(user)
        )
    })

  return (
    <>
    {
      user==null?
    <div>
        <label htmlFor="email">Email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={create}>Create</button>
    </div>:
    <div>
      {user.uid}
      </div>
    }
    </>
  )
}

export default Fireauth