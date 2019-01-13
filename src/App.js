import React, { Component } from 'react';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Dima" surname="Sazonov" link="https://vk.com/eva_ty" />
        <SayFullName name="Dima" surname="Zubrik" link="https://vk.com/idaly_kard" />
        <SayFullName name="Nikita" surname="Korolenok" link="https://vk.com/ameyuriringo" />
        <SayFullName name="Shurek" surname="Kareev" link="https://vk.com/alexkareev" />
      </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1> Мое имя {props.name}, фамилия - {props.surname}</h1>
      <a href={props.link}> Ссылка на мой профиль </a>
    </div>
  )
}
export default App;
