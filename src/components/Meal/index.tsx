import { Container, Divider, MealText, Status, TimeText } from './styles'

export function Meal() {
  return (
    <Container>
      <TimeText>20:00</TimeText>
      <Divider />
      <MealText>X-tudo</MealText>
      <Status />
    </Container>
  )
}
