import { TouchableOpacity } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.green.light};
`

export const PercentHeader = styled.View`
  justify-content: center;
  align-items: center;
  min-height: 200px;
`

export const PercentHeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize['2xl']}px;
    color: ${theme.colors.gray['700']};
  `}
`

export const PercentHeaderSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.sm}px;
    color: ${theme.colors.gray['600']};
  `}
`

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 24px;
`

export const BackButtonIcon = styled(ArrowLeft)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.green.dark};
`
