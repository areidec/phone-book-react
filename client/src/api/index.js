export default class {
  _baseUrl = 'http://localhost:8080';

  _getData = async (url) => {
    const res = await fetch(`${this._baseUrl}/${url}`);

    if(res.status === 200) {
      const data = await res.json();
      return data;
    }

    throw new Error(res.status)
  }

  getUser = async (name) => {
    const users = await this._getData('users');
    const user = users.find(user => user.name === name);
    return user || {error: 'Пользователь не найден'}
  }

  getBookList = async (userId) => {
    const list = await this._getData(`usersBookList/${userId}`);
    return list
  }

  patchPhoneBook = (id, booklist) => {
    fetch(`${this._baseUrl}/usersBookList/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: booklist
    })
  }
}