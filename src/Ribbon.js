import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
function Ribbon(props) {
  return (
    <div  className={'fi-ribbon'} >
      <Grid>
      <Row>
      <Col xs={12}>

            <nav className="fi-nav">
              <a href="#" className="fi-nav-item"><i class="fa fa-id-card fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;O Nas</a>
              <a href="#" className="fi-nav-item"><i class="fa fa-medkit fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;Oferta</a>
              <a href="#" className="fi-nav-item"><i class="fa fa-list-ul fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;Cennik</a>
              <a href="#" className="fi-nav-item"><i class="fa fa-users fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;Współpraca</a>
              <a href="#" className="fi-nav-item"><i class="fa fa-address-book-o fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;Kontakt</a>
              <a href="#" className="fi-nav-item"><i class="fa fa-facebook-square fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;Blog</a>
            </nav>
      </Col>
      </Row>
      </Grid>
</div>
  )
}

export default Ribbon;
