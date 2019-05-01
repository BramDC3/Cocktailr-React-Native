import React from 'react';
import { createAppContainer } from 'react-navigation';
import BottomTabNavigator from './modules/navigation/bottomTabNavigator';

const RootComponent = createAppContainer(BottomTabNavigator);

const RootContainer = () => <RootComponent />;

export default RootContainer;
