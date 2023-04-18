import { api_v1_recipe_create } from "../../store/newlessonAPI/recipes.slice.js";
import { useDispatch } from "react-redux";
import { Pressable } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  const dispatch = useDispatch();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.DlpCZwyY}></TextInput><TextInput style={styles.qnDBOseA}></TextInput><TextInput style={styles.YoeRUnmA}></TextInput><TextInput style={styles.szJrrPKB}></TextInput><TextInput style={styles.afmtOhRw}></TextInput><TextInput style={styles.XsVmWJJX}></TextInput><Pressable onPress={onSubmit}><View style={styles.adVcCPOj}></View></Pressable></ScrollView>
    </SafeAreaView>;

  const onSubmit = () => {
    dispatch(api_v1_recipe_create({
      title,
      instructions,
      cook_time,
      prep_time,
      rating,
      image
    }));
  };
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  DlpCZwyY: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  qnDBOseA: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    top: 0
  },
  YoeRUnmA: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  szJrrPKB: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  afmtOhRw: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  XsVmWJJX: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  adVcCPOj: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled4;