import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../screens/dashboard';

const Stack = createNativeStackNavigator();

export function AppStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					title: 'Dashboard'
				}}
			/>
		</Stack.Navigator>
	);
}
