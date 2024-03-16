import { createNativeStackNavigator } from '@react-navigation/native-stack';

import forgotPassword from '../screens/forgotPassword';
import home from '../screens/home';
import login from '../screens/login';
import register from '../screens/register';

const Stack = createNativeStackNavigator();

export function PublicStack() {
	return (
		<Stack.Navigator
		screenOptions={{
			headerShown: false
		}}
		>
			<Stack.Screen
				name="home"
				component={home}
			/>
			<Stack.Screen
				name="register"
				component={register}
			/>
			<Stack.Screen
				name="login"
				component={login}
			/>
			<Stack.Screen
				name="forgotPassword"
				component={forgotPassword}
			/>
		</Stack.Navigator>
	);
}
