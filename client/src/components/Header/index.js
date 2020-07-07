import React, { Component } from 'react';
import { Row, Typography, Button } from 'antd';

class Header extends Component {
  render() {
    const { logout } = this.props;
    const { Title } = Typography;

    const style = {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '10px'
    }

    return (
      <div style={style}>
        <Row align='middle' justify='space-between'>
          <Title>Phone Book</Title>
          <Button 
            type='primary'
            onClick={logout}
          >Выйти</Button>
        </Row>
      </div>
    )
  }
}

export default Header;