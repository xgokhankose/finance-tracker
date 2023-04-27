import { View } from 'react-native';
import Home from './src/Pages/Home';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";


export default function App() {
  const [loaded] = useFonts({
    "Serif-Bold": require("./assets/fonts/Serif-Bold.ttf"),
    "Serif-Regular": require("./assets/fonts/Serif-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#393B81', '#191A42']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 1, y: 0.9 }}
    >
      <Home />
    </LinearGradient >
  );
}


