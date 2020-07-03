import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen117835Navigator from '../features/BlankScreen117835/navigator';
import BlankScreen107834Navigator from '../features/BlankScreen107834/navigator';
import Messaging7808Navigator from '../features/Messaging7808/navigator';
import EmailAuth7807Navigator from '../features/EmailAuth7807/navigator';
import CalendarView7806Navigator from '../features/CalendarView7806/navigator';
import BlankScreen47805Navigator from '../features/BlankScreen47805/navigator';
import BlankScreen57804Navigator from '../features/BlankScreen57804/navigator';
import BlankScreen67803Navigator from '../features/BlankScreen67803/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen117835: { screen: BlankScreen117835Navigator },
BlankScreen107834: { screen: BlankScreen107834Navigator },
Messaging7808: { screen: Messaging7808Navigator },
EmailAuth7807: { screen: EmailAuth7807Navigator },
CalendarView7806: { screen: CalendarView7806Navigator },
BlankScreen47805: { screen: BlankScreen47805Navigator },
BlankScreen57804: { screen: BlankScreen57804Navigator },
BlankScreen67803: { screen: BlankScreen67803Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
