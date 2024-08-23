import './App.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import React, { useEffect } from 'react'

function App(){

    //testing 
    // async function generateAnswer(){
    //   console.log("loadingggggggg")
    //   const response = await axios({
    //       url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDRyOGDb_5i0appD5_u0ITsrEUwAYVD4Zg",
    //       method:"post",
    //       data:{
    //         contents:[
    //           {parts:[{text : ""}]},
    //         ],
    //       },
    //   });
    //   console.log(response);
    //   console.log(response['data']['candidates'][0]['content']['parts'][0]['text']);
    // }
    
    // useEffect(()=> {
    //   generateAnswer();
    // } ,[]);




    return (
      <>
       <Sidebar/>
       <Home/>
      </> 
       
       
      
    );
}



export default App
