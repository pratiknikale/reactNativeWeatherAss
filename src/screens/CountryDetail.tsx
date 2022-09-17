import {StyleSheet, Text, View, Image, Pressable} from "react-native";
import React, {FC, useEffect, useState} from "react";
import {getCountryDetails} from "../services/api";
// import NA from "../assets/NA1.jpg";

type countryD = {
  capital: string | undefined;
  population: number | undefined;
  lat: number | undefined;
  lng: number | undefined;
  flag: string | undefined;
};

const reqCountryData: countryD = {
  capital: "",
  population: 0,
  lat: 0,
  lng: 0,
  flag: "",
};

const CountryDetail: FC = ({navigation, route}: any) => {
  const [countryData, setCountryData] = useState(reqCountryData);

  useEffect(() => {
    countryDetail(route.params.country);

    return () => {
      setCountryData(reqCountryData);
    };
  }, []);

  const countryDetail = async (country: string) => {
    await getCountryDetails(country).then((resultDetails) => {
      const data: countryD = {
        capital: resultDetails.data[0]?.capital[0] ? resultDetails.data[0]?.capital[0] : "NA",
        population: resultDetails.data[0]?.population ? resultDetails.data[0]?.population : 0,
        lat: resultDetails.data[0]?.latlng[0] ? resultDetails.data[0]?.latlng[0] : 0,
        lng: resultDetails.data[0]?.latlng[1] ? resultDetails.data[0]?.latlng[1] : 0,
        flag: resultDetails.data[0]?.flags.png,
      };
      setCountryData(data);
    });
  };
  return (
    <View style={styles.container}>
      <Image
        source={
          countryData.flag
            ? {uri: countryData.flag}
            : countryData.flag === ""
            ? {uri: undefined}
            : require("../../assets/NA1.png")
        }
        style={{width: 300, height: 200, marginBottom: 60}}
      />
      <View>
        <Text style={styles.txt}>
          <Text style={styles.txtHead}>Capital :</Text> {countryData.capital}
        </Text>
        <Text style={styles.txt}>
          <Text style={styles.txtHead}>Population :</Text> {countryData.population}
        </Text>
        <Text style={styles.txt}>
          <Text style={styles.txtHead}>Latitude :</Text> {countryData.lat} deg
        </Text>
        <Text style={styles.txt}>
          <Text style={styles.txtHead}>Longitude :</Text> {countryData.lng} deg
        </Text>
      </View>
      <Pressable
        disabled={countryData.capital === "" ? true : false}
        style={styles.button}
        onPress={() => navigation.navigate("WeatherDetails", {countryCapital: countryData.capital})}
      >
        <Text style={styles.text}>Capital Weather</Text>
      </Pressable>
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 42,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#6200ee",
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
});

export default CountryDetail;
