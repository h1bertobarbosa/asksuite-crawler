import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Home" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Ask Suite</strong>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
