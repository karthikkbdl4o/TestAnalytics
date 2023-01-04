import {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import {CommonActions} from '@react-navigation/native';

const ChildScreen1 = ({navigation, route}) => {
  return (
    <View style={{padding: 16}}>
      <Text>Child Screen 1</Text>
      <TouchableOpacity onPress={async () => {}}>
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
    </View>
  );
};
export default ChildScreen1;
