import React, {FC, useState} from "react";
import {View, Text, Pressable, StyleSheet, TextInput} from "react-native";

const Search: FC = ({navigation}: any) => {
  const [country, setCountry] = useState("");

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setCountry} value={country} placeholder="Enter Country" />

      <Pressable
        disabled={country === "" ? true : false}
        style={country === "" ? styles.buttonDisable : styles.buttonEnable}
        onPress={() => navigation.navigate("CountryDetails", {country: country})}
      >
        <Text style={styles.btnText}>
          <Text style={country === "" ? {color: "#a0a3a4"} : {color: "white"}}>Submit</Text>
        </Text>
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
  buttonEnable: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#6200ee",
  },
  buttonDisable: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#d5d5d5",
  },
  btnText: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  input: {
    height: 65,
    color: "grey",
    width: 220,
    marginBottom: 60,
    borderRadius: 5,
    borderColor: "#a7a7a7",
    borderWidth: 1.6,
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Search;
