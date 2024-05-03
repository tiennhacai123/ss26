import React, { Component } from 'react'
interface UserInformation {
  fullname: string;
  gender: string;
  date: string;
  email: string;
  address: string;
}
export default class UserInfor extends Component<{},UserInformation>{
  constructor(props:{}){
    super(props);
    this.state = {
      fullname: "Nguyễn Văn A",
      gender:"male",
      date:"06/03/2024",
      email:'nva@gmail.com',
      address:'Thanh Xuân,Hà Nội',
    }

  }
  render() {
    return (
      <div>
        <ul><b>Thông tin cá nhân</b></ul>
        <li>Họ và tên:{this.state.fullname}</li>
        <li>Giới tính:{this.state.gender}</li>
        <li>Ngày sinh:{this.state.date}</li>
        <li>Email:{this.state.email}</li>
        <li>Address:{this.state.address}</li>
      </div>
    )
  }
}

