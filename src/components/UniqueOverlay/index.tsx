import React from 'react'
import { useTransform } from 'framer-motion'

import { useWrapperScroll } from '../Model'

import { Container, Header, Logo, Burger, Footer } from './styles'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay
