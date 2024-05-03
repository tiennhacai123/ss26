import React from 'react'
    const user ={
    firstName:'Nguyễn Văn',
    lastName:"Nam"
}
export default function FormatName() {
    let result = user.firstName + " " + user.lastName;
  return (
    <div>
        <p><b>FormatName</b></p> 
        <p>Họ và tên:{result}</p>
    </div>
  )
}
