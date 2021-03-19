import React from 'react'
import { Checkbox } from 'antd'

export default function CmpntCheckbox() {
  function checked(e) {
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <>
      <Checkbox onChange={checked}> </Checkbox>
    </>
  )
}

// ReactDOM.render(, mountNode);

// Checked-Enabled
