import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../welcome'
import SignIn from '../signin'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Welcome'
            component={Welcome}
            />
            <Stack.Screen
            name='SignIn'
            component={SignIn}
            />
        </Stack.Navigator>
    )
}