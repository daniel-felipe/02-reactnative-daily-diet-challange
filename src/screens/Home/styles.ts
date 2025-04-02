import { SafeAreaView } from 'react-native-safe-area-context'

import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  padding: 24px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.gray['300']};
`
