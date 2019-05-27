/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { NavigationParams } from 'react-navigation';
import IngredientCard from './ingredientCard';

const IngredientListPageWrapper = styled.View`
  background-color: #fafafa;
  padding: 8px;
`;

const IngredientFilterer = styled.TextInput`
  border: 1px solid #333333;
  border-radius: 2px;
  padding: 8px;
  margin: 0 12px 16px 12px;
`;

export default class IngredientListPage extends React.Component<NavigationParams> {
  static navigationOptions = () => ({
    title: 'Search by ingredient'
  });

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const { params } = navigation.state;

    this.setState({
      dataSource: params.ingredients,
      filteredData: params.ingredients,
      isLoading: false
    });
  }

  keyExtractor = item => item.strIngredient1;

  navigateBackToCocktailList = (ingredient) => {
    const { navigation } = this.props;
    const { params } = navigation.state;
    params.changeIngredient(ingredient);
    navigation.navigate('CocktailList');
  };

  filterIngredients(text) {
    const { dataSource } = this.state;
    const filtered = dataSource.filter(
      ingredient => ingredient.strIngredient1.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({
      filteredData: filtered
    });
  }

  render() {
    const { isLoading, filteredData } = this.state;

    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <IngredientListPageWrapper>
        <IngredientFilterer
          placeholder="Search by ingredient..."
          onChangeText={text => this.filterIngredients(text)}
        />
        <FlatList
          data={filteredData}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <IngredientCard
              name={item.strIngredient1}
              onPress={() => this.navigateBackToCocktailList(item.strIngredient1)
              }
            />
          )}
        />
      </IngredientListPageWrapper>
    );
  }
}
