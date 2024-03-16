import React, { memo } from 'react';
import Background from '../components/background';
import Logo from '../components/logo';
import Header from '../components/header';
import Button from '../components/base/button';
import Paragraph from '../components/base/paragraph';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const home = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Login Template</Header>

    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('login')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('register')}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(home);
