import { format } from 'date-fns'
import { View } from 'react-native'
import uuid from 'react-native-uuid'

import { Meal, MealProps } from '@/components/Meal'

import {
  Button,
  ButtonIcon,
  ButtonText,
  Container,
  MealsDate,
  MealsWrapper,
  Title,
} from './styles'

const meals: MealProps[] = [
  {
    id: uuid.v4(),
    name: 'Omelete',
    description: '',
    date: '2025-04-01',
    hour: '08:00',
    inDiet: true,
  },
  {
    id: uuid.v4(),
    name: 'X-tudo',
    description: '',
    date: '2025-04-01',
    hour: '08:00',
    inDiet: false,
  },
  {
    id: uuid.v4(),
    name: 'Whey com leite',
    description: '',
    date: '2025-04-02',
    hour: '08:00',
    inDiet: true,
  },
  {
    id: uuid.v4(),
    name: 'Salada de frutas',
    description: '',
    date: '2025-04-03',
    hour: '08:00',
    inDiet: true,
  },
  {
    id: uuid.v4(),
    name: 'Arroz, feijão e ovo',
    description: '',
    date: '2025-04-02',
    hour: '08:00',
    inDiet: true,
  },
]

function groupMealsByDate(meals: MealProps[]): Record<string, MealProps[]> {
  return meals.reduce((acc: Record<string, MealProps[]>, meal) => {
    if (!acc[meal.date]) {
      acc[meal.date] = []
    }

    acc[meal.date].push(meal)

    return acc
  }, {})
}

export function Meals() {
  const groupedMeals = groupMealsByDate(meals)

  return (
    <Container>
      <View>
        <Title>Refeições</Title>
        <Button>
          <ButtonIcon />
          <ButtonText>Nova Refeição</ButtonText>
        </Button>
      </View>

      {Object.keys(groupedMeals).map((date) => (
        <MealsWrapper key={date}>
          <MealsDate>{format(new Date(date), 'dd.MM.yyyy')}</MealsDate>

          {groupedMeals[date].map((meal) => (
            <Meal key={meal.id} {...meal} />
          ))}
        </MealsWrapper>
      ))}
    </Container>
  )
}
