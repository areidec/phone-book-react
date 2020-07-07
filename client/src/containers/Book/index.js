import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { logout, getBooks, addItem, deleteItem, changeItem } from '../../actions';
import { Row, Typography } from 'antd';
import BookListItem from '../../components/BookListItem';
import AddItem from '../../components/AddItem';
import { Input } from 'antd';

class Book extends Component {

  state = {
    searchquery: ''
  }

  componentDidMount() {
    this.props.getBooks(this.props.userId);
  }

  addNewItem = (obj) => {
    this.props.addItem(obj, this.props.bookListReducer.bookList);
  }

  changeItemEvent = (obj) => {
    this.props.changeItem(obj, this.props.bookListReducer.bookList);
  }

  deleteItem = (id) => {
    this.props.deleteItem(id, this.props.bookListReducer.bookList);
  }

  render() {
    const { Title } = Typography;
    const { 
      logout,
      userId,
      bookListReducer
    } = this.props;

    const { bookList } = bookListReducer;
    const { searchquery } = this.state;

    return (
      <>
        <Header logout={logout} />
        <Input.Search 
          style={{maxWidth:'1200px', margin: '0 auto', display:'block', marginBottom: '20px'}} 
          placeholder="input search text"
          defaultValue={this.state.searchquery}
          onChange={e => this.setState({searchquery: e.target.value.trim()})} enterButton />
        <AddItem addNewItem={this.addNewItem}/>

        <Row style={{ maxWidth: '1200px', margin: '0 auto'}}>
          {
            bookList.list ? (
              bookList.list.map(item => {
                if (searchquery === '') {
                  return (
                    <BookListItem 
                      name={item.name}
                      tel={item.tel}
                      key={item.id}
                      id={item.id}
                      delete={() => this.deleteItem(item.id)}
                      change={this.changeItemEvent}
                    />
                  )
                } else if (
                  item.name.toLowerCase().includes(searchquery) || 
                  item.tel.toLowerCase().includes(searchquery)
                  ) {
                  return (
                    <BookListItem 
                      name={item.name}
                      tel={item.tel}
                      key={item.id}
                      id={item.id}
                      delete={() => this.deleteItem(item.id)}
                      change={this.changeItemEvent}
                    />
                  )
                }
              })
            ) : ''
          }
        </Row>
      </>
    )
  }
}

const mapStateToProps = ({ 
  authReducer: {userId},
  bookListReducer
}) => ({
  userId,
  bookListReducer
})

const mapDispatchToProps = {
  logout,
  getBooks,
  addItem,
  deleteItem,
  changeItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)