import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './style.scss';

Header.propTypes = {};

function Header(props) {
  return (
    <header className='header'>
      <Container>
        <Row className='justify-content-between'>
          <Col xs='auto'>
            <a
              className='header__link header__title'
              href=''
              target='_bank'
              rel='noopener noreferrer'>
              Wolfag
            </a>
          </Col>

          <Col xs='auto'>
            <NavLink
              exact
              className='header__link'
              to='/photos'
              activeClassName='header__link--active'>
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
