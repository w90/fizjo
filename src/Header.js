import React, { Component } from 'react' ;
import logo from './images/fizjodentika_logo.jpg';
import {Grid, Row, Col} from 'react-bootstrap';

function Header( props ) {
  return (
    <header className="fi-header">

      <Grid>
      <Row>
      <Col xs={3} className={'fi-header-col'}>
      <a href="#" className="fi-header-logo">
        <img src={logo} className="fi-header-logo-image" />
      </a>
      </Col>

      <Col xs={3} className={'fi-header-col'}>
      <a href="#" className="fi-header-info">
        <i class="fa fa-calendar fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;Pon-Pt 08:00-18:00
      </a>
      </Col>

      <Col xs={3} className={'fi-header-col'}>
      <a href="#" className="fi-header-info">
        <i class="fa fa-envelope-o fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;info@fizjodentika.pl
      </a>
      </Col>

      <Col xs={3} className={'fi-header-col'}>
      <a href="#" className="fi-header-info fi-header-info-border">
<i class="fa fa-phone fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;502-521-685
      </a>
      </Col>

      </Row>
      </Grid>

    </header>
  )
}

export default Header;
