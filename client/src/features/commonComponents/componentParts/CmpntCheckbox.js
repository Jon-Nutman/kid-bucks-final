import React from 'react'
import { Checkbox } from 'antd'

export default function CmpntCheckbox(props) {
  return <Checkbox checked={props.checked} onChange={props.onChange}></Checkbox>
}

// ReactDOM.render(, mountNode);

// Checked-Enabled
