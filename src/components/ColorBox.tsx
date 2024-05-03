import React from 'react'

export default function ColorBox() {
  return (
    <div style={{display:'flex', flexDirection:'row', gap:'30px'}}><b>ColorBox</b> 
        <p style={{backgroundColor:"red",width:'200px',height:'200px',color:'white',alignItems:'center', display:'flex',justifyContent:'center'}}>Red</p>
        <p style={{backgroundColor:"Blue",width:'200px',height:'200px',color:'white',alignItems:'center', display:'flex',justifyContent:'center'}}>Blue</p>
        <p style={{backgroundColor:"Green",width:'200px',height:'200px',color:'white',alignItems:'center', display:'flex',justifyContent:'center'}}>Green</p>
    </div>
  )
}
