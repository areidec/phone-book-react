import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions';

import { 
  Card, 
  Typography,
  Form, 
  Input, 
  Button
} from 'antd';

class LogIn extends Component {

  formRef = React.createRef();

  componentDidUpdate() {
    const {errors} = this.props;
    
    if (errors.length > 1) {
      this.formRef.current.setFields([
        {
          name: 'username',
          errors: [errors]
        }
      ])
    }
  }

  onFinish = values => {
    const {logIn} = this.props;
    logIn(values);
  }

  render() {
    const { Title } = Typography;

    const style = {
      width: '500px',
      padding: '50px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    return (
      <Card style={style}>
        <Title style={{ textAlign: 'center', marginBottom: '30px' }} level={4}>Вход</Title>
        <Form
          ref={this.formRef}
          {...layout}
          name="login"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <Form.Item
            
            label="Логин"
            name="username"
            rules={[{ required: true, message: 'введите логин!'}]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'введите пароль!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

const mapStateToProps = ({ authReducer: {errors} }) => ({
  errors
})

const mapDispatchToProps = {
  logIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);