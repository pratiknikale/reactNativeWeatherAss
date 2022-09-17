import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";
import Search from "./src/screens/Search";
import CountryDetails from "./src/screens/CountryDetail";
import WeatherDetails from "./src/screens/WeatherDetails";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Search Country"
            component={Search}
            options={{
              title: "Search Country",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="CountryDetails"
            component={CountryDetails}
            options={{
              title: "Country Details",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="WeatherDetails"
            component={WeatherDetails}
            options={{
              title: "Weather Details",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}
