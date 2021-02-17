import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Absensi,
  Chat,
  Chatting,
  DetailMapel,
  DetailMateri,
  EditUser,
  FinishQuiz,
  GetStarted,
  HistoryAbsensi,
  Home,
  Intro,
  IntroDua,
  IntroTiga,
  Mapel,
  MapelScore,
  PenjelasanMateri,
  QuizOpening,
  QuizPilihanGanda,
  QuizScore,
  SignIn,
  SignUp,
  SplashScreen,
  User,
} from '../Pages';
import BottomNavigation from '../Components/Molekuls/BottomNavigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigation {...props} />}
      screenOptions={{gestureEnabled: true, gestureDirection: 'horizontal'}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Mapel" component={Mapel} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IntroDua"
        component={IntroDua}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="IntroTiga"
        component={IntroTiga}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailMapel"
        component={DetailMapel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailMateri"
        component={DetailMateri}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Absensi"
        component={Absensi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizOpening"
        component={QuizOpening}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizPilihanGanda"
        component={QuizPilihanGanda}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FinishQuiz"
        component={FinishQuiz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizScore"
        component={QuizScore}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MapelScore"
        component={MapelScore}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PenjelasanMateri"
        component={PenjelasanMateri}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HistoryAbsensi"
        component={HistoryAbsensi}
        options={{headerShown: false}}
      />
      <Stack.Screen name="HistoryAbsensi" component={HistoryAbsensi} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
