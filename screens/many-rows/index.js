import { api_v1_recipe_list } from "../../store/newlessonAPI/recipes.slice.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useEffect } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

const Row = ({}) => {
  const dispatch = useDispatch();
  const {
    entities: Recipe
  } = useSelector(state => state.Recipe);
  const navigation = useNavigation();
  return <Pressable onPress={() => {
    navigation.navigate("eventDetails");
  }}>
      <View style={styles.row}>
        <View style={styles.rowContent}>
          <Text style={styles.textHeading1}>{Recipe.title}</Text>
          <Text style={styles.textHeading2}>Heading 2</Text>
          <Text style={styles.textHeading3}>Heading 3</Text>
          <Text style={styles.textHeading4}>Heading 4</Text>
          <Text style={styles.textDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </Text>
        </View>
      </View>
    </Pressable>;
};

const ManyRows = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState();
  useEffect(() => {
    setData([{
      id: 1,
      name: "Row 1"
    }, {
      id: 2,
      name: "Row 2"
    }, {
      id: 3,
      name: "Row 3"
    }, {
      id: 4,
      name: "Row 4"
    }, {
      id: 5,
      name: "Row 5"
    }]);
    dispatch(api_v1_recipe_list());
  }, []);
  return <View style={styles.container}>
      <FlatList data={data} renderItem={({
      item
    }) => <Row item={item} />} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  row: {
    flex: 1,
    minHeight: 100,
    backgroundColor: "pink",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15
  },
  rowContent: {
    flex: 1
  },
  textHeading1: {
    fontSize: 24,
    fontWeight: "bold"
  },
  textHeading2: {
    fontSize: 24
  },
  textHeading3: {
    fontSize: 20
  },
  textHeading4: {
    fontSize: 18
  },
  textDescription: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333"
  }
});
export default ManyRows;