/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import {
  View, ActivityIndicator, Dimensions
} from 'react-native';
import { NavigationParams } from 'react-navigation';

const CocktailDetailPageWrapper = styled.ScrollView`
  background-color: #fafafa;
`;

const CocktailDetailsWrapper = styled.View`
  padding: 16px;
`;

const CocktailImage = styled.Image`
  margin-bottom: 8px;
`;

const CocktailName = styled.Text`
  font-size: 24px;
  margin-bottom: 4px;
  text-align: center;
`;

const CocktailCategory = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;
  text-align: center;
`;

const CocktailInstructions = styled.Text`
  margin-bottom: 26px;
`;

const CocktailTable = styled.View`
  border: 1px solid black;
`;

const CocktailTableRow = styled.View`
  flex-direction: row;
`;

const CocktailTableHeaderField = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  border: 1px solid black;
  padding: 4px 10px;
`;

const CocktailTableField = styled.Text`
  flex: 1;
  border: 1px solid black;
  padding: 4px 10px;
`;

export default class CocktailDetailPage extends React.Component<NavigationParams> {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: params.cocktailName
    };
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const { params } = navigation.state;

    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/36578/lookup.php?i=${
        params.cocktailId
      }`
    )
      .then(response => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.drinks[0]
          },
          () => {}
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  createTableRows = () => {
    const { dataSource } = this.state;
    const ingredients = [dataSource.strIngredient1, dataSource.strIngredient2, dataSource.strIngredient3,
      dataSource.strIngredient4, dataSource.strIngredient5, dataSource.strIngredient6, dataSource.strIngredient7,
      dataSource.strIngredient8, dataSource.strIngredient9, dataSource.strIngredient10, dataSource.strIngredient11,
      dataSource.strIngredient12, dataSource.strIngredient13, dataSource.strIngredient14, dataSource.strIngredient15]
      .filter(ingredient => ingredient !== null && ingredient !== undefined && ingredient !== '' && ingredient !== ' ' && ingredient !== '\n');
    const measures = [dataSource.strMeasure1, dataSource.strMeasure2, dataSource.strMeasure3,
      dataSource.strMeasure4, dataSource.strMeasure5, dataSource.strMeasure6, dataSource.strMeasure7,
      dataSource.strMeasure8, dataSource.strMeasure9, dataSource.strMeasure10, dataSource.strMeasure11,
      dataSource.strMeasure12, dataSource.strMeasure13, dataSource.strMeasure14, dataSource.strMeasure15]
      .filter(measure => measure !== null && measure !== undefined && measure !== '' && measure !== ' ' && measure !== '\n');
    while (measures.length < ingredients.length) {
      measures.push('');
    }
    return ingredients.map((ing, index) => (
      <CocktailTableRow key={ing}>
        <CocktailTableField>{ing}</CocktailTableField>
        <CocktailTableField>{measures[index]}</CocktailTableField>
      </CocktailTableRow>
    ));
  }

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
      <CocktailDetailPageWrapper>
        <CocktailImage
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width
          }}
          source={{ uri: dataSource.strDrinkThumb }}
          resizeMode="cover"
        />
        <CocktailDetailsWrapper>
          <CocktailName>{dataSource.strDrink}</CocktailName>
          <CocktailCategory>{`Category: ${dataSource.strCategory}`}</CocktailCategory>
          <CocktailInstructions>{dataSource.strInstructions}</CocktailInstructions>
          <CocktailTable>
            <CocktailTableRow>
              <CocktailTableHeaderField>INGREDIENT</CocktailTableHeaderField>
              <CocktailTableHeaderField>AMOUNT</CocktailTableHeaderField>
            </CocktailTableRow>
            {this.createTableRows()}
          </CocktailTable>
        </CocktailDetailsWrapper>
      </CocktailDetailPageWrapper>
    );
  }
}
