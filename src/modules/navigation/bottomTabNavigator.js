import React from 'react';
import { Icon } from 'react-native-elements';
import {
  createBottomTabNavigator,
  createStackNavigator,
  NavigationScreenConfig,
  NavigationScreenOptions
} from 'react-navigation';
import AddPhotoIcon from '../../../assets/svg/addphoto.svg';
import CocktailIcon from '../../../assets/svg/cocktail.svg';
import theme from '../../config/theme';
import { TAB_ICON_SIZE } from '../styles/constants';
import CocktailListPage from '../cocktail-list-page/cocktailListPage';
import AddSuggestionPage from '../add-suggestion-page/addSuggestionPage';
import CocktailDetailPage from '../cocktail-detail-page/cocktailDetailPage';
import IngredientListPage from '../ingredient-list-page/ingredientListPage';

const defaultNavigationOptions: NavigationScreenConfig<NavigationScreenOptions> = {
  headerStyle: {
    backgroundColor: theme.colors.background,
    borderBottomWidth: 0
  },
  headerTintColor: theme.colors.primaryText,
  headerTitleStyle: {
    textAlign: 'center'
  },
  headerBackImage: (
    <Icon
      name="arrowleft"
      type="antdesign"
      size={30}
      color={theme.colors.primaryText}
      containerStyle={{ paddingLeft: 8 }}
    />
  ),
  headerBackTitle: null
};

const CockailsNavigator = createStackNavigator(
  {
    CocktailList: { screen: CocktailListPage },
    CocktailDetail: { screen: CocktailDetailPage },
    IngredientList: { screen: IngredientListPage }
  },
  {
    defaultNavigationOptions,
    headerLayoutPreset: 'center'
  }
);

const SuggestionNavigator = createStackNavigator(
  {
    AddSuggestion: { screen: AddSuggestionPage },
  },
  {
    defaultNavigationOptions,
    headerLayoutPreset: 'center'
  }
);

interface IconProps {
  height: number;
  width: number;
  color: string | null;
}

const getIcon = (props: IconProps, routeName: string) => {
  switch (routeName) {
    case 'Cocktails':
      return <CocktailIcon {...props} />;
    case 'Suggestion':
      return <AddPhotoIcon {...props} />;
    default:
      return null;
  }
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    Cocktails: { screen: CockailsNavigator },
    Suggestion: { screen: SuggestionNavigator }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        return getIcon(
          {
            height: TAB_ICON_SIZE,
            width: TAB_ICON_SIZE,
            color: tintColor
          },
          routeName
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: theme.colors.tabSelected,
      inactiveTintColor: theme.colors.tab,
      iconStyle: {
        height: TAB_ICON_SIZE,
        width: TAB_ICON_SIZE,
        padding: 8
      },
      labelStyle: {}
    }
  }
);

export default BottomTabNavigator;
