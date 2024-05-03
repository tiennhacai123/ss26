import React from 'react'
export default function b9() {
  return (
    <div>b9
        <table style={{border:'1px solid',height:'100px'}}>
  <thead>
    <tr>
      <th>STT</th>
      <th>Họ và tên</th>
      <th>Ngày sinh</th>
      <th>Giới tính</th>
      <th>Địa chỉ</th>
      <th>Hành động</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Hiếu</td>
      <td>28/07/2005</td>
      <td>Nam</td>
      <td>HN</td>
      <td>
        <button>Sửa</button>
        <button style={{backgroundColor:"red",color:'white'}}>Xoá</button>
      </td>
    </tr>
    <tr>
      <th>2</th>
      <td>Tiến</td>
      <td>23/32/2005</td>
      <td>Nam</td>
      <td>HN</td>
      <td>
        <button>Sửa</button>
        <button style={{backgroundColor:"red",color:'white'}}>Xoá</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
