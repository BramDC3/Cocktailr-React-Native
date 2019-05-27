/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { NavigationParams } from 'react-navigation';
import SearchIcon from '../../../assets/svg/search.svg';
import theme from '../../config/theme';
import CocktailCard from './cocktailCard';

const CocktailListPageWrapper = styled.View`
  background-color: #fafafa;
  padding: 8px;
`;

export default class CocktailListPage extends React.Component<NavigationParams> {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Cocktailr',
      headerRight: (
        <SearchIcon
          style={{ marginRight: 12 }}
          onPress={() => navigation.navigate('IngredientList', {
            ingredients: params.ingredients,
            changeIngredient: params.changeIngredient
          })
          }
          color={theme.colors.primaryText}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true, ingredient: 'tequila' };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      changeIngredient: this.changeIngredient
    });
    this.fetchCocktails();
    this.fetchIngredients();
  }

  changeIngredient = (ingredient) => {
    this.setState(
      {
        ingredient,
        isLoading: true
      },
      this.fetchCocktails
    );
  };

  fetchCocktails = () => {
    const { ingredient } = this.state;
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/36578/filter.php?i=${ingredient}`
    )
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.drinks
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  fetchIngredients = () => {
    const { navigation } = this.props;
    fetch(
      'https://www.thecocktaildb.com/api/json/v1/36578/list.php?i=list'
    )
      .then(response => response.json())
      .then((responseJson) => {
        navigation.setParams({
          ingredients: responseJson.drinks
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  navigateToDetails = (cocktail) => {
    const { navigation } = this.props;
    navigation.navigate('CocktailDetail', {
      cocktailName: cocktail.strDrink,
      cocktailId: cocktail.idDrink
    });
  };

  keyExtractor = item => item.idDrink;

  render() {
    const { isLoading, dataSource } = this.state;

    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <CocktailListPageWrapper>
        <FlatList
          data={dataSource}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <CocktailCard
              id={item.idDrink}
              image={item.strDrinkThumb}
              name={item.strDrink}
              onPress={() => this.navigateToDetails(item)}
            />
          )}
        />
      </CocktailListPageWrapper>
    );
  }
}
