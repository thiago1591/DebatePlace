import React, { useState } from "react";
import {
  Alert,
  Modal,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <Image resizeMode="contain" style={{width:80}} source={require('../../../../assets/swipeIcon.png')} />

          <Text style={{fontSize:17}}>Deslize para pular</Text>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgb(255,255,255)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;