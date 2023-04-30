import { View } from 'react-native';
import Home from './src/Pages/Home';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";
import { Provider } from 'react-redux';
import { store } from './src/redux';

export default function App() {
  const [loaded] = useFonts({
    "Serif-Bold": require("./assets/fonts/Serif-Bold.ttf"),
    "Serif-Regular": require("./assets/fonts/Serif-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "BebasNeue-Regular": require("./assets/fonts/BebasNeue-Regular.ttf"),

  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <LinearGradient
        colors={['#28B9A0', '#191A42']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0.2 }}
        end={{ x: 1, y: 0.9 }}
      >
        <Home />
      </LinearGradient >
    </Provider>
  );
}


