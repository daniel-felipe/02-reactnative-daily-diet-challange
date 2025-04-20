import { Image } from 'react-native'

import { Card } from '@/components/Card'
import { Meals } from '@/components/Meals'

import logo from '@/assets/logo.png'
import profileMock from '@/assets/profile-mock.png'

import { ArrowIcon, Container, Header, Profile } from './styles'

export function Home() {
  return (
    <Container>
      <Header>
        <Image source={logo} />
        <Profile source={profileMock} />
      </Header>

      <Card variant="success">
        <Card.RightButton>
          <ArrowIcon />
        </Card.RightButton>
        <Card.Title>90,86%</Card.Title>
        <Card.Subtitle>das refeições dentro da dieta</Card.Subtitle>
      </Card>
      <Meals />
    </Container>
  )
}
