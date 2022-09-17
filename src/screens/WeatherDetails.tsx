import {StyleSheet, Text, View, Image} from "react-native";
import React, {FC, useEffect, useState} from "react";
import {getWeatherDetails} from "../services/WeatherApi";

type weatherD = {
  temperature: number | undefined;
  precipitation: number | undefined;
  windSpeed: number | undefined;
  weatherIcon: string | undefined;
};

const reqWeatherData: weatherD = {
  temperature: 0,
  precipitation: 0,
  windSpeed: 0,
  weatherIcon: "",
};

const WeatherDetails: FC = ({navigation, route}: any) => {
  const [weatherData, setWeatherData] = useState(reqWeatherData);

  useEffect(() => {
    capitalWeatherDetail(route.params.countryCapital);
  }, []);

  const capitalWeatherDetail = async (countryCapital: string) => {
    await getWeatherDetails(countryCapital).then((resultDetails) => {
      const data: weatherD = {
        temperature: resultDetails.data.current?.temperature,
        precipitation: resultDetails.data.current?.precip,
        windSpeed: resultDetails.data.current?.wind_speed,
        weatherIcon: resultDetails.data.current?.weather_icons[0],
      };
      setWeatherData(data);
    });
  };
  return (
    <View style={styles.container}>
      <Image
        source={{uri: weatherData.weatherIcon !== "" ? weatherData.weatherIcon : undefined}}
        style={{width: 300, height: 200, marginBottom: 60}}
      />
      <View>
        <Text style={styles.txt}>
          <Text style={styles.txtHead}>Temperature :</Text> {weatherData.temperature} &#8451;
        </Text>
        <Text style={styles.txt}>
          <Text style={styles.txtHead}>Precipitation :</Text> {weatherData.precipitation} %
        </Text>
        <Text style={styles.txt}>
          <Text style={styles.txtHead}>Wind Speed :</Text> {weatherData.windSpeed} kmph
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 20,
    paddingBottom: 35,
  },
  txtHead: {
    fontWeight: "bold",
  },
});

export default WeatherDetails;
