import React, { Component } from 'react';
// import Button from './components/Button';
import axios from 'axios';
import './../sass/main.scss';
import UserList from './components/UserList';
import Toolbar from './components/Toolbar';
import SearchBar from './components/SearchBar';
import ActiveUser from './components/ActiveUser';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 'Нажми на кнопку!',
      count: 0,
      nameWay: true,
      usersData: [{ image: 'owl' }],
      foundUsersData: [{ image: 'owl' }],
      curUser: [{ image: 'owl' }],
      curUserId: 0,
    };
    this.loadUsersData();
  }
  loadUsersData = () => {
    axios.get('http://rtivital.github.io/react-challenge-sort-and-search-solution/data.json')
         .then(data => {
           this.setState({
             usersData: data.data,
             foundUsersData: data.data,
             curUser: [data.data[0]],
           });
         })
       .catch((response) => {
         console.log('get data error');
         console.log(response);
       });
  }
  handleClick = (e) => {
    const id = +e.currentTarget.getAttribute('data-id');
    const current = this.state.usersData.filter((obj) => obj.id === id);

    this.setState({
      curUser: current,
      curUserId: id,
    });
  }
  sortNames = (e) => {
    const kind = e.target.getAttribute('data-kind');
    const way = this.state.nameWay ? 1 : -1;
    const compareFunByName = (a, b) => {
      if (a.name > b.name) {
        return way;
      }
      if (a.name < b.name) {
        return -way;
      }
      return 0;
    };
    const compareFunByAge = (a, b) => (this.state.nameWay ? a.age - b.age : b.age - a.age);

    const sortedData = kind ?
      this.state.usersData.sort(compareFunByName) :
      this.state.usersData.sort(compareFunByAge);

    this.setState({
      foundUsersData: sortedData,
      nameWay: !this.state.nameWay,
    });
  }
  handleChange = (e) => {
    const regex = new RegExp(e.target.value, 'i');
    const found = this.state.usersData.filter(obj => regex.test(obj.name));
    this.setState({
      foundUsersData: found,
    });
  }

  render() {
    return (
      <div className='container app'>
        <SearchBar handleChange={this.handleChange} />
        <Toolbar sortNames={this.sortNames} />
        <div className='row'>
          <ActiveUser user={ this.state.curUser[0] } />
          <UserList handleClick={ this.handleClick } users={ this.state.foundUsersData } />
        </div>
      </div>
    );
  }
}
