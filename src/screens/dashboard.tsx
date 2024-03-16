import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../store/reducers/user';

export default function Dashboard(): React.JSX.Element {
	const dispatch = useDispatch();

	return (
		<View>
			<TouchableOpacity onPress={() => dispatch(logOut())}>
          <Text>Logout</Text>
        </TouchableOpacity>
		</View>
  );
}
