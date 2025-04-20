import { Image } from 'react-native'

import { Meals } from '@/components/Meals'
import { PercentCard } from '@/components/PercentCard'

import logo from '@/assets/logo.png'
import profileMock from '@/assets/profile-mock.png'

import { Container, Header, Profile } from './styles'

export function Home() {
  return (
    <Container>
      <Header>
        <Image source={logo} />
        <Profile source={profileMock} />
      </Header>
      <PercentCard />
      <Meals />
    </Container>
  )
}
