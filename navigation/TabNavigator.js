import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import colors from 'tailwindcss/colors';
import { HomeIcon, BanknotesIcon, UserGroupIcon, UserIcon } from 'react-native-heroicons/outline';
import PaymentNavigation from './PaymentNavigation';
import PersonNavigation from './PersonNavigation';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.slate[900]
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }} />

      <Tab.Screen name="PaymentNavigation"
        component={PaymentNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BanknotesIcon color={color} size={size} />
          ),
          lazy: false
        }} />

      <Tab.Screen name="PersonNavigation"
        component={PersonNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserGroupIcon color={color} size={size} />
          ),
          lazy: false
        }} />

      <Tab.Screen name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <UserIcon color={color} size={size} />
          )
        }} />
    </Tab.Navigator >
  )
}

export default TabNavigator;
