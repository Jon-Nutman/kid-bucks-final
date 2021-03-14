import React, { useState } from "react"
import { Input, Form, InputNumber, Button } from "antd"
import SwitchablePicker from "./SwitchablePicker"

const { TextArea } = Input

export default function AddGoalModal() {
  return (
    <div>
      <h1>Add Goal Modal</h1>
      <Form>
        <Input placeholder="Add Goal Here" />
        <InputNumber placeholder="Points" />
        <SwitchablePicker />
        <TextArea rows={4} placeholder="description..." />
        <Button type="primary" htmlType="submit">
          Add Goal
        </Button>
      </Form>
    </div>
  )
}
