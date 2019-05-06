/* eslint-disable no-console */
/* eslint-disable global-require */
import React from 'react';
import {
  Picker, Dimensions,
} from 'react-native';
import { NavigationParams } from 'react-navigation';
import styled from 'styled-components';
import { ImagePicker, Permissions } from 'expo';
import Toast from 'react-native-easy-toast';
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

export default class AddSuggestionPage extends React.Component<NavigationParams> {
  constructor(props) {
    super(props);
    this.state = {
      madePhoto: false,
      cocktailSource: require('../../../assets/cocktail_example.jpg'),
      name: '',
      description: ''
    };
  }

  validateSuggestion = () => {
    const { madePhoto, name, description } = this.state;
    if (madePhoto && name !== null && name !== '' && description !== null && description !== '') {
      this.refs.toast.show('Thank you for your suggestion!');
    }
  }

  changeName = (e) => {
    this.setState({
      name: e
    });
  }

  changeDescription = (e) => {
    this.setState({
      description: e
    });
  }

  async makePhoto() {
    await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      const source = { uri: result.uri };
      this.setState({
        madePhoto: true,
        cocktailSource: source
      });
    }
  }

  render() {
    const { cocktailSource } = this.state;

    return (
      <AddSuggestionPageWrapper>
        <SuggestionImage
          style={{
            width: Dimensions.get('window').width - 60,
            height: Dimensions.get('window').width - 60
          }}
          source={cocktailSource}
          resizeMode="cover"
        />
        <SuggestionLabel>Name</SuggestionLabel>
        <NameField onChangeText={this.changeName} />
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
        <DescriptionField onChangeText={this.changeDescription} multiline textAlignVertical="top" />
        <ButtonsView>
          <MakeSuggestionButton onPress={this.validateSuggestion}>
            <MakeSuggestionButtonText>MAKE SUGGESTION</MakeSuggestionButtonText>
          </MakeSuggestionButton>
          <MakePhotoButton onPress={() => this.makePhoto()}>
            <CameraIcon color="#FFFFFF" />
          </MakePhotoButton>
        </ButtonsView>
        <Toast ref="toast" />
      </AddSuggestionPageWrapper>
    );
  }
}

AddSuggestionPage.navigationOptions = {
  title: 'Add a suggestion'
};
