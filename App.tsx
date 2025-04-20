import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'
import { ThemeProvider } from 'styled-components/native'

import { Home } from '@/screens/Home'
import { Statistics } from '@/screens/Statistics'
import theme from '@/theme'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, View } from 'react-native'

export default function App() {
  const [isFontLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent={true} />

      {isFontLoaded ? (
        <Statistics />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </ThemeProvider>
  )
}
