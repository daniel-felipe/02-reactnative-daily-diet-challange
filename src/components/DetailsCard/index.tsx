import { ReactNode } from 'react'

import { Container } from './styles'

type DetailsProps = {
  children: ReactNode
}

export function DetailsCard({ children }: DetailsProps) {
  return <Container>{children}</Container>
}
