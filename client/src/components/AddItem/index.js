import React, { Component } from 'react';
import { 
  Row,
  Form,
  Input,
  Button,
  Card,
} from 'antd';

export default class AddItem extends Component {
  formRef = React.createRef();

  onFinish = values => {
    this.props.addNewItem(values);
    this.formRef.current.resetFields();
  }

  render() {

    return(
      <Row style={{ maxWidth: '1200px', margin: '0 auto',}}>
        <Card style={{width: '100%', marginBottom: '10px'}}>
          <Form
            ref={this.formRef}
            style={{width: '100%'}}
            layout='inline'
            name='addItem'
            onFinish={this.onFinish}
          >
            <Form.Item
              label="Имя"
              name="name"
              rules={[{ required: true, message: 'поле не может быть пустым!'}]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Телефон"
              name="tel"
              rules={[{ required: true, message: 'поле не может быть пустым!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item style={{flexGrow: 1}}>
              <Button type='primary' htmlType="submit" style={{float: 'right'}}>Добавить</Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    )
  }
} 