/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

StatusBar.setBarStyle('dark-content');

const ThemeScreen = () => {
  const ref = useRef<any>(null);
  const [type, setType] = useState<'down' | 'up'>('down');

  const onClickButton = () => {
    if (type === 'up') {
      setType('down');
      Alert.alert('Change type curve down');
    } else {
      setType('up');
      Alert.alert('Change type curve up');
    }
  };

  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'apps-outline';
        break;
      case 'title3':
        icon = 'bar-chart-outline';
        break;
      case 'title4':
        icon = 'person-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={23}
        color={routeName === selectedTab ? '#FF3030' : 'gray'}
      />
    );
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <CurvedBottomBar.Navigator
          ref={ref}
          type={type}
          height={60}
          circleWidth={55}
          bgColor="white"
          borderTopLeftRight={true}
          strokeWidth={2}
          initialRouteName="title1"
          renderCircle={() => (
            <TouchableOpacity
              style={[type === 'down' ? styles.btnCircle : styles.btnCircleUp]}
              onPress={onClickButton}
            >
              <Ionicons name="chatbubbles-outline" size={23} />
            </TouchableOpacity>
          )}
          tabBar={({ routeName, selectedTab, navigate }) => {
            return (
              <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {_renderIcon(routeName, selectedTab)}
              </TouchableOpacity>
            );
          }}
        >
          <CurvedBottomBar.Screen
            name="title1"
            position="left"
            component={() => (
              <View style={{ backgroundColor: '#BFEFFF', flex: 1 }} />
            )}
          />
          <CurvedBottomBar.Screen
            name="title2"
            component={() => (
              <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />
            )}
            position="left"
          />
          <CurvedBottomBar.Screen
            name="title3"
            position="right"
            component={() => (
              <View style={{ backgroundColor: '#BFEFFF', flex: 1 }} />
            )}
          />
          <CurvedBottomBar.Screen
            name="title4"
            component={() => (
              <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />
            )}
            position="right"
          />
        </CurvedBottomBar.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 28,
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: '#48CEF6',
  },
  img: {
    width: 30,
    height: 30,
  },
});
