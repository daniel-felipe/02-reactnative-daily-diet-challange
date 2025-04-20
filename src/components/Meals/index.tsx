import { useState } from 'react'
import { SectionList, View } from 'react-native'
import uuid from 'react-native-uuid'

import { Meal } from '@/components/Meal'

import {
  Button,
  ButtonIcon,
  ButtonText,
  Container,
  MealsDate,
  Separator,
  Title,
} from './styles'

export function Meals() {
  const [meals, setMeals] = useState([
    {
      title: '01.04.2025',
      data: [
        {
          id: uuid.v4(),
          name: 'Omelete',
          description: '',
          hour: '08:00',
          inDiet: true,
        },
        {
          id: uuid.v4(),
          name: 'X-tudo',
          description: '',
          hour: '08:00',
          inDiet: false,
        },
      ],
    },
    {
      title: '02.04.2025',
      data: [
        {
          id: uuid.v4(),
          name: 'Whey com leite',
          description: '',
          hour: '08:00',
          inDiet: true,
        },
        {
          id: uuid.v4(),
          name: 'Arroz, feijão e ovo',
          description: '',
          hour: '08:00',
          inDiet: true,
        },
      ],
    },
  ])

  return (
    <Container>
      <View>
        <Title>Refeições</Title>
        <Button>
          <ButtonIcon />
          <ButtonText>Nova Refeição</ButtonText>
        </Button>
      </View>
      <View>
        <SectionList
          sections={meals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Meal name={item.name} hour={item.hour} inDiet={item.inDiet} />
          )}
          renderSectionHeader={({ section }) => (
            <MealsDate>{section.title}</MealsDate>
          )}
          ItemSeparatorComponent={() => <Separator />}
          stickySectionHeadersEnabled={false}
        />
      </View>
    </Container>
  )
}
