import {createStackNavigator} from 'react-navigation-stack';
import RequestScreen from '../screens/requestScreen';
import SuggestScreen from '../screens/suggestionScreen';
import RecieverDetails from '../screens/receiverDetails';

export const AppStackNavigator = createStackNavigator({
    RequestScreen : {
      screen : RequestScreen,
      navigationOptions:{
        headerShown : false
      }
    },
    RecieverDetails : {
      screen : RecieverDetails,
      navigationOptions:{
        headerShown : false
      }
    },
  
  },
    {
      initialRouteName: 'RequestScreen'
    }
  );