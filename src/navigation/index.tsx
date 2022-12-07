import { createStackNavigator } from '@react-navigation/stack'
import { DetailScreen } from '../screens/DetailScreen'
import { HomeScreen } from '../screens/HomeScreen'

const Stack = createStackNavigator()

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  )
}
