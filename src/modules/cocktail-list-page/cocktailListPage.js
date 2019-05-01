import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { NavigationParams, NavigationScreenComponent } from 'react-navigation';

const SuperView = styled.View`
  flex: 1;
  background-color: #3a3a;
`;

interface CocktailListPageProps {}

const CocktailListPage: NavigationScreenComponent<
  NavigationParams,
  {},
  CocktailListPageProps
> = () => <SuperView />;

CocktailListPage.navigationOptions = {
  title: 'Cocktailr'
};

export default CocktailListPage;
