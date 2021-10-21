import { React, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { authCaptain } from '../captain/thunks';

import FormLogin from './FormLogin'

const ManageFormLogin = (props) => {  
    const history = useHistory();

    const [pswValidation, setPswValid] = useState(false);
    const [emailValidation, setEmailValid] = useState(false);

    const [capitao, setCapitao] = useState({
        email: '',
        psw: '',
    })

    const handleChange = ({ target }) => {
        setValidationsToFalse();
        setCapitao({
            ...capitao,
            [ target.id ]: target.value
        })
    }


    const handleSubmit = () => {
        if (pswIsValid() && mailIsValidated()) {
                props.onLoginCaptain(capitao);
                history.push('/home')
            }
    }

    /**Funções de validação de form */
    const setValidationsToFalse = () => {
        setPswValid(false);
        setEmailValid(false);
    }

    const mailIsValidated = () => {
        if(capitao.email === '' ){
            setEmailValid(true);
            return false;
        }
        else if(!capitao.email.toLowerCase().includes('@') || !capitao.email.toLowerCase().includes('.com')){
            setEmailValid(true);
            return false;
        }
        return true;
    }

    const pswIsValid = () => {
        if(capitao.psw === '' ){
            setPswValid(true);
            return false;
        }
        if(capitao.psw.length <= 3){
            setPswValid(true);
            return false;
        }

        return true;
    }


    return (
        <FormLogin onHandleChange={handleChange}
              onHandleSubmit={handleSubmit}
              capitao={capitao}
              pswValidation={pswValidation}
              emailValidation={emailValidation}/>
    )
}

const mapDispatchToProps = dispatch => ({
    onLoginCaptain: captain => dispatch(authCaptain(captain)),
})

export default connect(null, mapDispatchToProps)(ManageFormLogin);