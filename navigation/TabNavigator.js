import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import colors from 'tailwindcss/colors';
import PeopleScreen from '../screens/PeopleScreen';
import { HomeIcon, BanknotesIcon, UserGroupIcon, UserIcon } from 'react-native-heroicons/outline';
import PaymentNavigation from './PaymentNavigation';

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

      <Tab.Screen name="PaymentsNavigation"
        component={PaymentNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BanknotesIcon color={color} size={size} />
          )
        }} />

      <Tab.Screen name="People"
        component={PeopleScreen}
        options={{
          tabBarLabel: 'People',
          tabBarIcon: ({ color, size }) => (
            <UserGroupIcon color={color} size={size} />
          )
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
