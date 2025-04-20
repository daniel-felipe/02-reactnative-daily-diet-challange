import {
  BackButton,
  BackButtonIcon,
  Container,
  PercentHeader,
  PercentHeaderSubtitle,
  PercentHeaderTitle,
} from './styles'

export function Statistics() {
  return (
    <Container>
      <PercentHeader>
        <BackButton>
          <BackButtonIcon />
        </BackButton>

        <PercentHeaderTitle>90,86%</PercentHeaderTitle>
        <PercentHeaderSubtitle>
          das refeições dentro da dieta
        </PercentHeaderSubtitle>
      </PercentHeader>
    </Container>
  )
}
