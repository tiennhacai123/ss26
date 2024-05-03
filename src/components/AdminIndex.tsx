import React from 'react';

export default function AdminIndex() {
  return (
    <div style={{ position: 'relative', margin: '0px', height: '1070px' }}>
      <div style={{ backgroundColor: 'grey', height: '70px', alignItems: 'center', display: 'flex', justifyContent: 'center', color: 'white', margin: '0px 10px 0px 0px' }}>Header</div>
      <div style={{ backgroundColor: 'blue', width: '400px', height: '800px', alignItems: 'center', display: 'flex', justifyContent: 'center', color: 'white', margin: '0px' }}>
        <p style={{ margin: '0px' }}>Menu</p>
      </div>
      <div style={{ backgroundColor: 'grey', height: '50px',width:'1250px' , alignItems: 'center', display: 'flex', justifyContent: 'center', color: 'white', position: 'absolute', bottom: '200px', left: '400px' }}>Footer</div>
      <div style={{ backgroundColor: 'grey', height: '700px',width:'1200px' , alignItems: 'center', display: 'flex', justifyContent: 'center', color: 'white', position: 'absolute', bottom: '280px', left: '420px' }}>Menu</div>

    </div>
  );
}
