import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { faHome, faMoneyBillTrendUp, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import DashboardScreen from '../screens/DashboardScreen';
import LoanScreen from '../screens/LoanScreen';
import DebtScreen from '../screens/DebtScreen';
import ProfileScreen from '../screens/ProfileScreen';
import colors from 'tailwindcss/colors';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.slate[900]
        }
      }}>
      <Tab.Screen name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHome} color={color} size={size} />
          ),
        }} />

      <Tab.Screen name="Debt"
        component={DebtScreen}
        options={{
          tabBarLabel: 'Debts',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faReceipt} color={color} size={size} />
          )
        }} />

      <Tab.Screen name="Loan"
        component={LoanScreen}
        options={{
          tabBarLabel: 'Loans',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faMoneyBillTrendUp} color={color} size={size} />
          )
        }} />

      <Tab.Screen name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} color={color} size={size} />
          )
        }} />
    </Tab.Navigator >
  )
}

export default TabNavigator;
