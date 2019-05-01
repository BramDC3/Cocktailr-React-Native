import React from 'react';
import { View } from 'react-native';
import { NavigationParams, NavigationScreenComponent } from 'react-navigation';

interface IngredientListPageProps {}

const IngredientListPage: NavigationScreenComponent<
  NavigationParams,
  {},
  IngredientListPageProps
> = () => <View />;

IngredientListPage.navigationOptions = {
  title: 'Search by ingredient'
};

export default IngredientListPage;
