import {isValidUsername} from '6pp'

const Validator=(username) =>{
  
    if(!isValidUsername(username))
    
    return{isValid:false,errorMessage:'please enter a valid username'}
}
export default Validator;