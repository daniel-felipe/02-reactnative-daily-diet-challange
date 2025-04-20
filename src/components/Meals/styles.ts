import styled, { css } from 'styled-components/native'

import { Plus } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  margin-top: 40px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
    line-height: ${theme.fontSize['2xl'] * 1.3}px;
    color: ${theme.colors.gray['700']};
  `}
`

export const Button = styled(TouchableOpacity)`
  padding: 16px 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray[600]};

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    color: ${theme.colors.white};
  `}
`

export const ButtonIcon = styled(Plus).attrs(({ theme }) => ({
  color: theme.colors.white,
  size: 18,
}))``

export const MealsDate = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.lg}px;
    line-height: ${theme.fontSize['2xl'] * 1.3}px;
    color: ${theme.colors.gray['700']};
    margin-top: 32px;
  `}
`

export const Separator = styled.View`
  height: 8px;
`
