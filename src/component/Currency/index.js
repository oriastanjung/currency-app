import React from 'react'

function Currency(props) {
    const exhcangeRate = Number((+props.exchange).toFixed(4));
    const buyRate = Number(+exhcangeRate + (+exhcangeRate * (5/100))).toFixed(4);
    const sellRate = Number(+exhcangeRate - (+exhcangeRate * (5/100))).toFixed(4);

  return (
    <tr>
        <td>{props.name}</td>
        <td>{buyRate}</td>
        <td>{exhcangeRate}</td>
        <td>{sellRate}</td>
    </tr>
  )
}

export default Currency