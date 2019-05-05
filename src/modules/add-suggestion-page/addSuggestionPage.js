import React from 'react';
import {
  Picker, Dimensions, TouchableOpacity, Text
} from 'react-native';
import { NavigationParams, NavigationScreenComponent } from 'react-navigation';
import styled from 'styled-components';
import CameraIcon from '../../../assets/svg/camera.svg';

const AddSuggestionPageWrapper = styled.ScrollView`
  padding: 30px;
`;

const SuggestionImage = styled.Image`
  margin-bottom: 24px;
`;

const SuggestionLabel = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
`;

const NameField = styled.TextInput`
  border: 1px solid #333333;
  padding: 8px;
  margin-bottom: 12px;
`;

const DescriptionField = styled.TextInput`
  border: 1px solid #333333;
  padding: 8px;
  height: 100px;
  margin-bottom: 12px;
`;

const SuggestionPicker = styled.Picker`
  border: 1px solid #333333;
  margin-bottom: 12px;
`;

const ButtonsView = styled.View`
  flex-direction: row;
  margin-bottom: 40px;
`;

const MakeSuggestionButton = styled.TouchableOpacity`
  background-color: #FF0000;
  flex-grow: 1;
  padding: 12px;
`;

const MakeSuggestionButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  text-align: center;
`;

const MakePhotoButton = styled.TouchableOpacity`
  background-color: #FF0000;
  padding: 12px 14px;
  margin-left: 14px;
`;

const AddSuggestionPage: NavigationScreenComponent<{}, NavigationParams> = () => (
  <AddSuggestionPageWrapper>
    <SuggestionImage
      style={{
        width: Dimensions.get('window').width - 60,
        height: Dimensions.get('window').width - 60
      }}
      source={require('../../../assets/cocktail_example.jpg')}
      resizeMode="cover"
    />
    <SuggestionLabel>Name</SuggestionLabel>
    <NameField />
    <SuggestionLabel>Category</SuggestionLabel>
    <SuggestionPicker
      style={{ height: 44 }}
      itemStyle={{ height: 44 }}
    >
      <Picker.Item label="Cocktail" value="Cocktail" />
      <Picker.Item label="Ordinary Drink" value="Ordinary Drink" />
      <Picker.Item label="Beer" value="Beer" />
      <Picker.Item label="Punch / Party Drink" value="Punch / Party Drink" />
      <Picker.Item label="Other / Unknown" value="Other / Unknown" />
      <Picker.Item label="Shot" value="Shot" />
    </SuggestionPicker>
    <SuggestionLabel>Description</SuggestionLabel>
    <DescriptionField multiline textAlignVertical />
    <ButtonsView>
      <MakeSuggestionButton>
        <MakeSuggestionButtonText>MAKE SUGGESTION</MakeSuggestionButtonText>
      </MakeSuggestionButton>
      <MakePhotoButton>
        <CameraIcon color="#FFFFFF" />
      </MakePhotoButton>
    </ButtonsView>
  </AddSuggestionPageWrapper>
);

AddSuggestionPage.navigationOptions = {
  title: 'Add a suggestion'
};

export default AddSuggestionPage;
