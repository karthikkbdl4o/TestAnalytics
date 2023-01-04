import {Text, TouchableOpacity, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {CommonActions} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';

const MainScreen = ({navigation, route}) => {
  return (
    <View style={{padding: 16}}>
      <Text>MainScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: 'ChildScreen1',
            }),
          );
        }}>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 4,
            marginTop: 16,
            backgroundColor: '#303F9F',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'white',
              fontSize: 16,
            }}>
            Screen 1
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: 'ChildScreen2',
            }),
          );
        }}>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 4,
            marginTop: 16,
            backgroundColor: '#303F9F',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'white',
              fontSize: 16,
            }}>
            Screen 2
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default MainScreen;
