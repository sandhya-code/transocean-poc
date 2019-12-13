import React from 'react';

const EquipmentInstruction = () => {
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th scope='col'>Equipment</th>
          <th scope='col'>Operational Instructions</th>
          <th scope='col'>Safety Instructions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>Main Rig Floor</th>
          <td>
            Planned depth is 22,349’ MD <br /> Do not exceed 100’/hr ROP due to
            hole cleaning issues<br /> Suspected loss zone at ~23,050’ MD<br /> LCM pill in
            slug pit 1
          </td>
          <td>Use JBD and strictly enforce Red Zone Management</td>
        </tr>
        <tr>
          <th scope='row'>Aux Rig Floor</th>
          <td>
            Shuffle the 5-7/8 XTM57 pipe from rows 30-33 to 57-60<br /> Pick up 14”
            liner – 30 stands and rack in rows 5-9 Strap cement assembly
          </td>
          <td>Utilize safe step back area at all times</td>
        </tr>
      </tbody>
    </table>
  );
};

export default EquipmentInstruction;
