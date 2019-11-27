import { TabNavigator  } from 'react-navigation'

import SignIn from './SignInForm'
import SignUp from './SignUpForm'

var config={
  SignIn : {screen: SignIn},
  SignUp : {screen: SignUp},
}

export default TabNavigator(config)
