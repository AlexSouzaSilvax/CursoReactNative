import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import TelaInicial from './src/TelaInicial';
import ConversationScreen from './src/ConversationScreen';

const Navegador = createMaterialTopTabNavigator({
    Home: {
        screen: TelaInicial
    },
    Conversa: {
        screen: ConversationScreen
    }
});

export default createAppContainer(Navegador);