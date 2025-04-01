import { Image, Text } from 'react-native'

import { Container, Header, Profile } from './styles'

import logo from '@/assets/logo.png'
import profileMock from '@/assets/profile-mock.png'

export function Home() {
  return (
    <Container>
      <Header>
        <Image source={logo} />
        <Profile source={profileMock} />
      </Header>
    </Container>
  )
}
