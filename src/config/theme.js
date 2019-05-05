interface Theme {
  colors: Colors;
}

interface Colors {
  tab: string;
  tabSelected: string;
  background: string;
  primaryText: string;
  infoText: string;
  primaryButton: string;
  hashText: string;
  labelText: string;
  disabledText: string;
  pureBlack: string;
  pureWhite: string;

  lightBlueText: string;
  lightGreyText: string;
  lightGreenText: string;

  buttonYellow: string;
  buttonYellowBorder: string;

  dashboardListItemEvenBackground: string;
  dashboardListItemUnevenBackground: string;
  transactionListItemEvenBackground: string;
  transactionListItemUnevenBackground: string;
}

const theme: Theme = {
  colors: {
    tab: '#7F7F7F',
    tabSelected: '#FF0000',
    background: '#FF0000',
    primaryText: '#FFF',
    infoText: '#8F8F91',
    primaryButton: '#E7B354',
    hashText: '#446186',
    labelText: '#71B9F9',
    disabledText: '#4B4B4B',
    pureBlack: '#000',
    pureWhite: '#fff',

    lightBlueText: '#5BB9FF',
    lightGreyText: '#748391',
    lightGreenText: '#9DD46F',

    buttonYellow: '#F1B237',
    buttonYellowBorder: '#F5DDB3',

    dashboardListItemEvenBackground: '#3A3A3A',
    dashboardListItemUnevenBackground: '#464748',
    transactionListItemEvenBackground: '#181819',
    transactionListItemUnevenBackground: '#2D2D2E',
  },
};

export default theme;
