import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import ItemCard from "../components/ItemCard";

export default function FirstScreen() {
  const items = [
    {
      id: 1,
      name: "Ca nấu lẩu, nấu mì mini",
      shopName: "Devang",
      img: require("../assets/ca_nau_lau.png"),
    },
    {
      id: 2,
      name: "1kg Khô gà bơ tỏi",
      shopName: "LTD Food",
      img: require("../assets/ga_bo_toi.png"),
    },
    {
      id: 3,
      name: "Xe cần cẩu đa năng",
      shopName: "Thế giới đồ chơi",
      img: require("../assets/xa_can_cau.png"),
    },
    {
      id: 4,
      name: "Đồ chơi dạng mô hình",
      shopName: "Thế giới đồ chơi",
      img: require("../assets/do_choi_dang_mo_hinh.png"),
    },
    {
      id: 5,
      name: "Lãnh đạo giản đơn",
      shopName: "Minh Long Book",
      img: require("../assets/lanh_dao_gian_don.png"),
    },
    {
      id: 6,
      name: "Hiểu lòng trẻ con",
      shopName: "Minh Long Book",
      img: require("../assets/hieu_long_con_tre.png"),
    },
    {
      id: 7,
      name: "Donald Trump thiên tài lãnh đạo",
      shopName: "Minh Long Book",
      img: require("../assets/trump 1.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            padding: 20,
            backgroundColor: "#73a1eb",
            color: "white",
            fontWeight: "400",
          }}
        >
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngần ngại chat với shop
        </Text>
      </View>
      <FlatList
        ItemSeparatorComponent={() => {
          return <View style={styles.line} />;
        }}
        data={items}
        renderItem={ItemCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "gray",
    marginTop: 10,
  },
  container: {
    height: "100%",
    backgroundColor: "#e6e4e1",
  },
});
