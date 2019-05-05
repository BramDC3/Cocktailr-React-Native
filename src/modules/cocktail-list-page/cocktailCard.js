import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from 'react-native';

const CocktailCardWrapper = styled.TouchableOpacity`
  background-color: white;
  border-radius: 3px;
  flex-direction: row;
  margin-bottom: 8px;
  padding: 6px;
`;

const CocktailImage = styled.Image`
  height: 80;
  width: 80;
`;

const CocktailText = styled.View`
  justify-content: center;
  padding: 16px;
`;

const CocktailName = styled.Text`
  font-size: 15px;
  margin-bottom: 8px;
`;

const CocktailId = styled.Text`
  color: #9D9D9D;
  font-size: 13px;
`;

const styles = StyleSheet.create({
  cardWrapper: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.3
  }
});

const CocktailCard = ({
  id, image, name, onPress,
}) => (
  <CocktailCardWrapper elevation={5} style={styles.cardWrapper} onPress={onPress}>
    <CocktailImage source={{ uri: image }} />
    <CocktailText>
      <CocktailName>{name}</CocktailName>
      <CocktailId>{`ID: ${id}`}</CocktailId>
    </CocktailText>
  </CocktailCardWrapper>
);

export default CocktailCard;
