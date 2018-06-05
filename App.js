import { StackNavigator } from 'react-navigation';

import PrimaryLoginPage from './src/pages/PrimaryLoginPage';
import SecondaryLoginPage from './src/pages/SecondaryLoginPage';
import SyncPage from './src/pages/SyncPage';

export default StackNavigator({
  'PrimaryLogin':{
    screen: PrimaryLoginPage
  },
  'SecondaryLogin':{
    screen: SecondaryLoginPage
  },
  'Sync':{
    screen: SyncPage
  }

},{
  navigationOptions:{
    title: "SoftMobile",
    headerTintColor: "white",
    headerStyle:{
      backgroundColor: "#ddd"
    },
    headerTitleStyle:{
      color: "white",
      fontSize: 25,
    }
  }

})