import { View } from 'react-native'

import { Meal } from '@/components/Meal'

import { Button, ButtonIcon, ButtonText, Container, Title } from './styles'

export function Meals() {
  return (
    <Container>
      <View>
        <Title>Refeições</Title>
        <Button>
          <ButtonIcon />
          <ButtonText>Nova Refeição</ButtonText>
        </Button>
      </View>

      <Meal />
    </Container>
  )
}
