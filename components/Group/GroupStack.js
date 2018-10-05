import { createStackNavigator } from 'react-navigation';
import GroupScreen from './GroupScreen';
import GameScreen from './GameScreen';
import GameChat from './GameChat';

const GroupStack = createStackNavigator({
  GroupHome: GroupScreen,
  Game: GameScreen,
  GameChatRoom: GameChat
},
{
  initialRouteName: 'GroupHome'
});

export default GroupStack;