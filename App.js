/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import analytics, {firebase} from '@react-native-firebase/analytics';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {firebaseConfig} from './src/firebase';
// import * as firebase from 'firebase';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const initFirebase = async () => {
    if (!firebase.apps.length) {
      // await firebase.initializeApp({
      //   clientId:
      //     '496546347842-k6u7s0vnlbqcu43nk9mgusds9g9in59r.apps.googleusercontent.com',
      //   appId: '1:276316220537:android:e4c154575b3d6be29938a8',
      //   apiKey: 'AIzaSyBuqGKwqp9lH_F7-_UOLc2UyWxDHKH7QPs',
      //   storageBucket: 'testanalytics-2023.appspot.com',
      //   projectId: 'testanalytics-2023',
      //   databaseURL: 'https://test-firebase-kbd.firebaseio.com',
      //   messagingSenderId: '496546347842',
      //   // enable persistence by adding the below flag
      //   persistence: true,
      // });
    } else {
      // await firebase.app(); // if already initialized, use that one
    }
    const appInstanceId = await analytics().getAppInstanceId();
    console.log(appInstanceId);
  };
  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            title="Sample"
            onPress={async () => {
              await Promise.all([
                // analytics().setUserId('2'),
                analytics().logSelectContent({
                  content_type: 'clothing',
                  item_id: 'abcd',
                }),
                analytics().logScreenView({
                  screen_name: 'Karthik',
                  screen_class: 'Devadiga',
                }),
                analytics().logAppOpen(),
              ]);
              await firebase.analytics().logPurchase({
                value: 100,
                currency: 'usd',
                items: [
                  {
                    item_brand: 'cool-shirt-brand',
                    item_id: '23456',
                    item_name: 'orange t-shirt',
                    item_category: 'round necked t-shirts',
                  },
                ],
              });
              console.log('Sample');
            }}
          />
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
