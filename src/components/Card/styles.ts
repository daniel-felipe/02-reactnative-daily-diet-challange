import styled, { css } from 'styled-components/native'

import { TouchableOpacity, ViewProps } from 'react-native'

export type CardProps = ViewProps & {
  variant?: 'success' | 'danger'
}

export const Container = styled.View<CardProps>`
  position: relative;
  padding: 20px 16px;
  background-color: ${({ theme, variant }) => (variant === 'success' ? theme.colors.green.light : theme.colors.red.light)};
  border-radius: 8px;

  align-items: center;
  justify-content: center;
  margin-top: 32px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize['2xl']}px;
    line-height: ${theme.fontSize['2xl'] * 1.3}px;
    color: ${theme.colors.gray['700']};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.sm}px;
    line-height: ${theme.fontSize.sm * 1.3}px;
    font-family: ${theme.fontFamily.regular};
  `}  
`

export const RightButton = styled(TouchableOpacity)`
  position: absolute;
  right: 8px;
  top: 8px;
`

export const LeftButton = styled(TouchableOpacity)`
  position: absolute;
  left: 8px;
  top: 8px;
`
