import { TouchableOpacity } from 'react-native'

import styled, { css } from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  padding: 14px 16px 14px 14px;
  border-radius: 6px;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray['300']};
`

export const TimeText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xs}px;
    color: ${theme.colors.gray['700']};
  `}
`

export const Divider = styled.View`
  height: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray['400']};
`

export const MealText = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
    color: ${theme.colors.gray['600']};
  `}
`

type StatusProps = {
  inDiet: boolean
}

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({ theme, inDiet }) => (inDiet ? theme.colors.green.light : theme.colors.red.light)};
`
