import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
