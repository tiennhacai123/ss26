import React, { Component } from 'react'
const a:number=10;
export default class caculation extends Component {
  render() {
    return (
      <div>
        <ul><b>Danh sách kết quả</b></ul>
        <li>{a}+{a}={a+a}</li>
        <li>{a}-{a}={a-a}</li>
        <li>{a}*{a}={a*a}</li>
        <li>{a}/{a}={a/a}</li>
      </div>
    )
  }
}
