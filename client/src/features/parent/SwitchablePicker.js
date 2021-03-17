import React, { useState } from "react"
import { DatePicker, TimePicker, Select, Space } from "antd"

const { Option } = Select

function PickerWithType({ type, onChange }) {
  if (type === "time") return <TimePicker onChange={onChange} />
  if (type === "date") return <DatePicker onChange={onChange} />
  return <DatePicker picker={type} onChange={onChange} />
}

export default function SwitchablePicker(props) {
  // const [type, setType] = useState("time")
  // console.log("p", props)
  return (
    <Space>
      <Select value={props.type} onChange={props.onChange}>
        <Option value="time">Time</Option>
        <Option value="date">Date</Option>
      </Select>
      <PickerWithType
        type={props.type}
        onChange={(value) => console.log(value)}
      />
    </Space>
  )
}
