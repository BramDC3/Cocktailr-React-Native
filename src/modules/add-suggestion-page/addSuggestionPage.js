import React from 'react';
import { View } from 'react-native';
import { NavigationParams, NavigationScreenComponent } from 'react-navigation';

interface AddSuggestionPageProps {}

const AddSuggestionPage: NavigationScreenComponent<
NavigationParams,
{},
AddSuggestionPageProps
> = () => <View />;

AddSuggestionPage.navigationOptions = {
  title: 'Add a suggestion'
};

export default AddSuggestionPage;
