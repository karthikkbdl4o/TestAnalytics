import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PipHandler, {usePipModeListener} from 'react-native-pip-android';

export default function PipScreen() {
  // Use this boolean to show / hide ui when pip mode changes
  const inPipMode = usePipModeListener();

  if (inPipMode) {
    return (
      <View style={{width: '100%', height: '100%'}}>
        <Text>PIP Mode</Text>
      </View>
    );
  }

  return (
    <View style={{width: '100%', height: '100%'}}>
      <Text>These text components will be hidden in pip mode</Text>
      <TouchableOpacity onPress={() => PipHandler.enterPipMode(300, 214)}>
        <Text>Click to Enter Pip Mode</Text>
      </TouchableOpacity>
    </View>
  );
}
