import React, { Component } from 'react';
import Button from './components/Button';
import axios from 'axios';
import './../sass/main.scss';
import UserList from './components/UserList';
import Toolbar from './components/Toolbar';
import SearchBar from './components/SearchBar';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 'Нажми на кнопку!',
      count: 0,
      nameWay: true,
      usersData: [{
        id: 4,
        name: 'Wayne Joseph',
        age: 45,
        phone: '(962) 536-9686',
        image: 'fox',
        phrase: 'Win ijaj.'
      }],
      curUserId: []
    };
    this.loadUsersData();
  }
  loadUsersData = () => {
    axios.get('../data.json')
         .then(data => {
           let curUserId = false;

           if (data.data instanceof Array && data.data.length) {
             curUserId = data.data[0].id;
           }
           this.setState({
             usersData: data.data,
             curUserId
           });
         })
       .catch((response) => {
         console.log('get data error');
         console.log(response);
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
      usersData: sortedData,
      nameWay: !this.state.nameWay
    });
  }

  updateBtn = () => {
    const phrases = [
      'ЖМИ!', 'Не останавливайся!',
      'У тебя хорошо получается!', 'Красавчик!',
      'Вот это и есть React!', 'Продолжай!',
      'Пока ты тут нажимаешь кнопку другие работают!',
      'Всё хватит!', 'Ну и зачем ты нажал?',
      'В следующий раз тут будет полезный совет',
      'Чего ты ждешь от этой кнопки?',
      'Если дойдёшь до тысячи, то сразу научищься реакту',
      'ой, всё!', 'Ты нажал кнопку столько раз, что обязан на ней жениться',
      'У нас было 2 npm-пакета с реактом, 75 зависимостей от сторонних библиотек, '
      + '5 npm-скриптов и целое множество плагинов галпа всех сортов и расцветок, '
      + 'а также redux, jquery, mocha, пачка плагинов для eslint и ингерация с firebase. '
      + 'Не то что бы это был необходимый набор для фронтенда. Но если начал собирать '
      + 'вебпаком, становится трудно остановиться. Единственное, что вызывало у меня '
      + 'опасения - это jquery. Нет ничего более беспомощного, безответственного и испорченного, '
      + 'чем рядовой верстальщик без jquery. '
      + 'Я знал, что рано или поздно мы перейдем и на эту дрянь.',
      'coub про кота-джедая: http://coub.com/view/spxn',
      'Дальнобойщики на дороге ярости: http://coub.com/view/6h0dy',
      'Реакция коллег на ваш код: http://coub.com/view/5rjjw',
      'Енот ворует еду: http://coub.com/view/xi3cio',
      'Российский дизайн: http://coub.com/view/16adw5i0'
    ];
    this.setState({
      count: this.state.count + 1,
      phrase: phrases[parseInt(Math.random() * phrases.length, 10)]
    });
  }

  render() {
    return (
      <div className="container app">
        <SearchBar />
        <Toolbar sortNames={this.sortNames} />
        <Button count={this.state.count} update={this.updateBtn} />
        <p style={{ marginTop: '2rem' }}>{this.state.phrase}</p>
        <UserList users={this.state.usersData} />
      </div>
    );
  }
}
