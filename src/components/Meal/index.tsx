import { Container, Divider, MealText, Status, TimeText } from './styles'

export type MealProps = {
  id: string
  name: string
  description: string
  date: string
  hour: string
  inDiet: boolean
}

export function Meal({ name, hour, inDiet }: MealProps) {
  return (
    <Container>
      <TimeText>{hour}</TimeText>
      <Divider />
      <MealText>{name}</MealText>
      <Status inDiet={inDiet} />
    </Container>
  )
}
