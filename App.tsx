import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'
import { ThemeProvider } from 'styled-components/native'

import { Home } from '@/screens/Home'
import theme from '@/theme'

export default function App() {
  useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
