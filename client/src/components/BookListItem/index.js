import React, { Component } from 'react';
import {
  Form,
  Input,
  Card, 
  Typography,
  Button,
} from 'antd';

export default class BookListItem extends Component {

  formRef = React.createRef();

  onFinish = values => {
    const {id} = this.props;
    this.props.change({...values, id})
  }

  render() {
    const { Text } = Typography;
    const { name, tel, id} = this.props;
    const style = {
      width: '100%',
      marginBottom: '5px'
    }

    return (
      <Card style={style}>
        <Form
          ref={this.formRef}
          initialValues={{ 
            name,
            tel
          }}
          layout='inline'
          name={name}
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
            <Button onClick={this.props.delete} danger style={{float: 'right'}}>Удалить</Button>
            <Button htmlType="submit" style={{float: 'right'}}>Изменить</Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}