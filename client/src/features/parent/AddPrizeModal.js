import React from 'react'
import { Input, Form, InputNumber, Button } from 'antd';

const { TextArea } = Input;

export default function AddPrizeModal() {
    return (
        <div>
            <h1>Add Prize Modal</h1>
            <Form>
                <Input placeholder='Add Prize Name Here'/>
                <InputNumber placeholder='Points' />
                <TextArea rows={4} placeholder='description...' />
                <Button type="primary" htmlType="submit">
            Add Prize
          </Button>
            </Form>
        </div>
    )
}
