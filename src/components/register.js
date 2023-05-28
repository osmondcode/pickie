import { FaShoppingBag } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import { Link } from 'react-router-dom';


    const RegUser = () => {
        const [UserData, setRegUser] = useState("");
        const [UserDatas, setRegUsers] = useState([]);
        
        const addRegUsers = async (e) => {
            e.preventDefault();  
            const displayName = document.getElementById('displayName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const buyer = document.getElementById('buyer').checked;

            
            try {
                const docRef = await addDoc(collection(db, "UserDatas"), {
                  UserData: displayName,    
                  UserData1: email,    
                  UserData2: password,    
                  UserData3: buyer,    
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }     
         
        const fetchPost = async () => {
           
            await getDocs(collection(db, "todos"))
                .then((querySnapshot)=>{              
                    const newData = querySnapshot.docs
                        .map((doc) => ({...doc.data(), id:doc.id }));
                    setRegUser(newData);                
                    console.log(UserDatas, newData);
                })
           
        }
       
        useEffect(()=>{
            fetchPost();
        }, [])
     
     

    return ( 
        <section className="w-full h-screen flex items-center justify-center relative">
            <span className="absolute w-[150px] overflow-hidden h-[60px] flex items-center justify-center gap-[15px]  top-[3%] lg:right-[1.5%] right-[40%.5%]">
            <button className="text-[23px] bg-[#29b6f6] px-2 rounded-lg text-white flex items-center justify-center gap-[8px]">Pickie<FaShoppingBag/></button>
            </span>
            <div className="w-[85%]  lg:w-2/3 py-4 mt-[40px] lg:mt-0 flex flex-col items-center">
                <h1 className="text-[#4128b8] text-[1.6rem] font-bold">Create new account</h1>
                <form className="SignIn text-[#333] w-full 2sm:w-3/4 sm:w-2/3 text-start px-2 mt-3">
                    <label htmlFor="username">Name</label><br/>
                    <input className="w-full h-[35px] border border-[#888] rounded-sm mb-2 text-[22px] px-2 py-1  outline-[#00c0ff]" type="text" id="displayName"  onChange={(e)=>setRegUser(e.target.value)} required/><br/>
                    <label htmlFor="email">Email</label><br/>
                    <input className="w-full h-[35px] border border-[#888] rounded-sm mb-2 text-[22px] px-2 py-1  outline-[#00c0ff]" type="email" id="email" onChange={(e)=>setRegUser(e.target.value)} required/><br/>
                    <label htmlFor="password">Password</label><br/>
                    <input className="w-full h-[35px] border border-[#888] rounded-sm mb-2 text-[22px] px-2 py-1  outline-[#00c0ff]" type="password" id="password" onChange={(e)=>setRegUser(e.target.value)} required/><br/>
                    <label className="text-[14px] ml-1">Signing As</label><br/>
                    <input className="mr-2" type="radio" name="who" id="buyer" onChange={(e)=>setRegUser(e.target.value)}/>
                    <label className="mr-[30%] lg:mr-[45%]" htmlFor="buyer">Buyer</label>
                    <input className="mr-2" type="radio" name="who" id="buyer" onChange={(e)=>setRegUser(e.target.value)}/>
                    <label htmlFor="seller">Supplier</label><br/>
                    <button  className="w-full bg-[#00c0ff] text-white py-2 text-[18px] rounded-sm mt-4" onClick={addRegUsers}>
                        <Link to="/">SIGN UP</Link>
                    </button>
                </form>
                <span className="text-[#4128b8] my-4 sm:text-[16px] text-[14px]">
                    By registering, you argree to the <span className="underline cursor-pointer">terms and conditions</span>
                </span>
                <button className="text-[20px] mt-5 text-[#231951]">Already registered? <Link to="/" className="underline cursor-pointer">Login</Link></button>
            </div>
        </section>
     );
}

export default RegUser;
