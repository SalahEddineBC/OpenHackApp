import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, ListView, Modal, TouchableHighlight } from 'react-native';
import { Button } from 'native-base';
import DatePicker from 'react-native-datepicker';

export default class ReminderCard extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      modalVisible: false,
      inputValue: '',
      inputDate: '',
      dataSource: ds.cloneWithRows([]),
    };
    this._handleTextChange = this._handleTextChange.bind(this);
    this._handleDeleteButtonPress = this._handleDeleteButtonPress.bind(this);
  }
  _handleTextChange = (value) => {
    const inputValue = value;
    this.setState(() => ({
      inputValue,
    }));
  }
  _handleSendButtonPress = () => {
    if (!this.state.inputValue) {
      return;
    }
    const textArray = this.state.dataSource._dataBlob.s1;
    textArray.push({
      value: this.state.inputValue,
      date: this.state.inputDate
    }
    );
    this.setState(() => ({
      dataSource: this.state.dataSource.cloneWithRows(textArray),
      inputValue: '',
      inputDate: '',
    }));
  };
  _handleDeleteButtonPress = (id) => {
    this.setState((a) => {
      const newItem = a.dataSource._dataBlob.s1.filter((item, i) => (parseInt(id) !== i));
      return {
        dataSource: this.state.dataSource.cloneWithRows(newItem),
      }
    });
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View>
              <View style={styles.formView}>
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <TextInput
                    style={styles.inputForm}
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    placeholder="Reminder"
                  />
                  <DatePicker
                    style={{ width: 200 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    maxDate="2020-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {
                      this.setState({ date: date });
                      this.setState({ inputDate: date });
                    }}
                  />
                </View>
                <Button
                  onPress={this._handleSendButtonPress}
                  style={styles.addButton}
                >
                  <Text style={{
                    color: 'white',
                    fontSize: 15,
                    left: 150
                  }}>Add</Text>
                </Button>
              </View>

              <Button
                style={{
                  position: 'absolute',
                  height: 30,
                  width: 30,
                  left: 320,
                  bottom: 100,
                  zIndex: 2,
                  backgroundColor: '#4ac29a',
                  borderRadius: 15,
                  alignSelf: 'center',
                  alignContent: 'center'
                }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.deleteText}>-</Text>
              </Button>
            </View>
          </View>
        </Modal>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID) => {
            const handleDelete = () => {
              return this._handleDeleteButtonPress(rowID);
            }
            return (
              <View style={styles.todoItem}>
                <Text style={styles.todoText}>{rowData.value}</Text>
                <Text style={styles.greenText}>{rowData.date}</Text>
                <Button
                  onPress={handleDelete}
                  style={styles.deleteButton}
                ><Text style={styles.deleteText}>-</Text></Button>
              </View>
            );
          }
          }
        />
        <Button
          style={styles.addButtonN}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={{
            color: 'white',
            fontSize: 40,
            left: 15
          }}>+</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listView: {
  },
  addButtonN: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#4ac29a',
    borderRadius: 25,
    alignSelf: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  addButton: {
    marginTop: 10,
    height: 30,
    width: 300,
    backgroundColor: '#4ac29a',
    borderRadius: 20,
    alignSelf: 'center',
    alignContent: 'center'
  },
  deleteButton: {
    position: 'absolute',
    height: 30,
    width: 30,
    left: 270,
    bottom: 103,
    backgroundColor: '#4ac29a',
    borderRadius: 15,
    alignSelf: 'center',
    alignContent: 'center',
  },
  deleteText: {
    color: "white",
    fontSize: 70,
    left: 6,
    bottom: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  formView: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 8,
  },
  inputForm: {
    backgroundColor: '#fff',
    width: 250,
    height: 40,
    padding: 8,
    marginBottom: 8,
    borderColor: 'black',
    borderWidth: 1
  },
  todoItem: {
    shadowColor: "grey",
    shadowRadius: 10,
    //marginBottom:10,
    marginTop: 20,
    borderRadius: 20,
    alignItems: 'center',
    padding: 8,
    width: 320,
    height: 120,
    borderBottomWidth: 1.5,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
  },
  todoText: {
    flex: 1,
    fontSize: 20
  },
  greenText: {
    flex: 1,
    fontSize: 20,
    color: '#4ac29a',
    left: 40,
    bottom: 30
  }
});
