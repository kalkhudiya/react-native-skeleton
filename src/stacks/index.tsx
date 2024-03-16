import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { AppStack } from './app-stack';
import { PublicStack } from './public-stack';
import { RootState } from '../store';

export const Stack = (): React.JSX.Element => {
	const isLogIn = useSelector((state: RootState) => state.user.isLogIn)

	return (
		<NavigationContainer>
			{
				isLogIn === true ?
				<AppStack />
				:
				<PublicStack />
			}
		</NavigationContainer>
	);
}