import { Image, ScrollView } from 'react-native'

import { PercentCard } from '@/components/PercentCard'

import logo from '@/assets/logo.png'
import profileMock from '@/assets/profile-mock.png'

import { Meals } from '@/components/Meals'
import { Container, Header, Profile } from './styles'

export function Home() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <Image source={logo} />
          <Profile source={profileMock} />
        </Header>
        <PercentCard />
        <Meals />
      </ScrollView>
    </Container>
  )
}
