import * as React from 'react';
import {DataContext} from './src/components/Context';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Splash
import SplashScreen from './src/pages/Splash/SplashScreen';

// Validation
import LoginScreen from './src/pages/validation/LoginScreen';
import RegisterScreen from './src/pages/validation/RegisterScreen';
import LogoutValidation from './src/pages/validation/LogoutValidation';

// Screen
import HomeScreen from './src/pages/screen/HomeScreen';
import AddScreen from './src/pages/screen/AddScreen';
import SettingScreen from './src/pages/screen/SettingScreen';
import DetailsScreen from './src/pages/screen/DetailsScreen';
import ChangeScreen from './src/pages/screen/ChangeScreen';

// Icons
// Bold
import BoldHome from './src/image/icons/bold-home.png';
import BoldPlus from './src/image/icons/bold-plus.png';
import BoldSetting from './src/image/icons/bold-setting.png';
// Outline
import OutlnHome from './src/image/icons/outline-home.png';
import OutlnPlus from './src/image/icons/outline-plus.png';
import OutlnSetting from './src/image/icons/outline-setting.png';
import OutlnLogout from './src/image/icons/outline-logout.png';
import ProfileScreen from './src/pages/screen/ProfileScreen';
import ProjectUnFinishedScreen from './src/pages/screen/ProjectUnFinishedScreen';
import AboutAppScreen from './src/pages/screen/AboutAppScreen';
import ProjectFinishedScreen from './src/pages/screen/ProjectFinishedScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* Validation */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen
          name="Change"
          component={ChangeScreen}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen
          name="AboutApp"
          component={AboutAppScreen}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen
          name="UnFinished"
          component={ProjectUnFinishedScreen}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen
          name="Finished"
          component={ProjectFinishedScreen}
          // options={{
          //   headerShown: false,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? BoldHome : OutlnHome;
          } else if (route.name === 'Plus') {
            iconName = focused ? BoldPlus : OutlnPlus;
          } else if (route.name === 'Setting') {
            iconName = focused ? BoldSetting : OutlnSetting;
          } else if (route.name === 'LogOut') {
            iconName = OutlnLogout;
          }

          return (
            <Image
              source={iconName}
              alt="icons"
              style={{height: size, width: size, tintColor: color}}
            />
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerStyle: {
          shadowColor: 'black',
          shadowOffset: 10,
          shadowRadius: 5,
          shadowOpacity: 10,
        },
        headerTitleAlign: 'center',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Todo App',
        }}
      />
      <Tab.Screen
        name="Plus"
        component={AddScreen}
        options={{
          headerTitle: 'Add Todo',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerTitle: 'Setting',
        }}
      />
      <Tab.Screen
        name="LogOut"
        component={LogoutValidation}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
