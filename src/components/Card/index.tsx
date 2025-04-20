import { TextProps, TouchableOpacityProps } from 'react-native'

import {
  LeftButton as CardLeftButton,
  CardProps,
  RightButton as CardRightButton,
  Subtitle as CardSubtitle,
  Title as CardTitle,
  Container,
} from './styles'

function Card({ children, variant = 'success', ...props }: CardProps) {
  return (
    <Container variant={variant} {...props}>
      {children}
    </Container>
  )
}

function Title({ children }: TextProps) {
  return <CardTitle>{children}</CardTitle>
}

function Subtitle({ children }: TextProps) {
  return <CardSubtitle>{children}</CardSubtitle>
}

function LeftButton({ children }: TouchableOpacityProps) {
  return <CardLeftButton>{children}</CardLeftButton>
}

function RightButton({ children }: TouchableOpacityProps) {
  return <CardRightButton>{children}</CardRightButton>
}

Card.Title = Title
Card.Subtitle = Subtitle
Card.LeftButton = LeftButton
Card.RightButton = RightButton

export { Card, CardTitle, CardSubtitle }
