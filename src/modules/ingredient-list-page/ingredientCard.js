import React from 'react';
import styled from 'styled-components';
import CocktailIcon from '../../../assets/svg/cocktail.svg';

const IngredientCardWrapper = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
`;

const IngredientCocktailIcon = styled(CocktailIcon)`
  padding: 0 25px;
`;

const IngredientLabel = styled.Text`
  padding-left: 5px;
`;

const IngredientCard = ({ name, onPress }) => (
  <IngredientCardWrapper onPress={onPress}>
    <IngredientCocktailIcon color="#333333" />
    <IngredientLabel>{name}</IngredientLabel>
  </IngredientCardWrapper>
);

export default IngredientCard;
