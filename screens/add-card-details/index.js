import { api_v1_recipe_create } from "../../store/newlessonAPI/recipes.slice.js";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView, TextInput, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AddCardDetailsScreen = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [instructions, setInstuctions] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    dispatch(api_v1_recipecategory_list());
  }, []);

  const onSubmit = () => {
    console.log("submited");
    dispatch(api_v1_recipe_create({
      title,
      instructions,
      prep_time: prepTime,
      cook_time: cookTime,
      rating,
      image
    }));
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}></View>
        <View style={styles.fullInputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Recipe add</Text>
            <Text style={styles.inputText}>Recipe title</Text>
            <TextInput style={styles.input} onChangeText={text => setTitle(text)} placeholder="Enter recipe name" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} value={title} clearTextOnFocus={true} editable={true} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Category</Text>
            <Picker selectedValue={selectedCategory} onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}>
              <Picker.Item label="Dissert" value="Dissert" />
              <Picker.Item label="Breakfast" value="Breakfast" />
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Instuctions</Text>
            <TextInput style={styles.input} onChangeText={text => setInstuctions(text)} value={instructions} placeholder="Instructions" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Prep time</Text>
            <TextInput style={styles.input} onChangeText={text => setPrepTime(text)} value={prepTime} placeholder="Prep time" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Cook time</Text>
            <TextInput style={styles.input} onChangeText={text => setCookTime(text)} value={cookTime} placeholder="Cookt time" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
        </View>
        <View style={styles.halfInputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Rating</Text>
            <TextInput style={styles.input} onChangeText={text => setRating(text)} value={rating} placeholder="rating" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Image</Text>
            <TextInput style={styles.input} onChangeText={text => setImage(text)} value={image} placeholder="image" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
        </View>
        <View style={styles.halfInputs}>
          <View style={styles.inputContainer}></View>
          <View style={styles.inputContainer}></View>
        </View>
        <View style={styles.halfInputs}>
          <View style={styles.inputContainer}></View>
          <View style={styles.inputContainer}></View>
        </View>
        <View style={styles.btnContainer}>
          <Pressable style={styles.btn} onPress={onSubmit}>
            <Text style={styles.btnText}>Update</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    padding: 20
  },
  paletteContainer: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    height: 60,
    width: 250,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 15
  },
  selected: {
    backgroundColor: "#fff",
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e6e6e6"
  },
  unSelected: {
    padding: 10,
    paddingHorizontal: 25
  },
  fullInputs: {
    paddingHorizontal: 20,
    justifyContent: "center"
  },
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5
  },
  inputText: {
    fontSize: 16,
    marginLeft: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginVertical: 10,
    width: "100%"
  },
  halfInputs: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row" // borderColor: '#9B9B9B',
    // borderWidth: 1,

  },
  btnContainer: {
    padding: 30,
    paddingTop: 10,
    paddingHorizontal: 40,
    justifyContent: "center",
    marginTop: 20
  },
  btn: {
    backgroundColor: "black",
    height: 50,
    width: "100%",
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
export default AddCardDetailsScreen;