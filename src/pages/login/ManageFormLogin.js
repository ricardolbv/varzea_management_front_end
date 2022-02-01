import { React, useState } from 'react';
import axios from 'axios';
import { useToken } from '../../auth/useToken';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { authCaptain } from '../captain/thunks';

import { openToast } from '../../common/actions';
import FormLogin from './FormLogin'

const ManageFormLogin = (props) => {
    const [token, setToken] = useToken();  
    const history = useHistory();
    const [pswValidation, setPswValid] = useState(false);
    const [emailValidation, setEmailValid] = useState(false);

    const [capitao, setCapitao] = useState({
        email: '',
        password: '',
    })

    const handleChange = ({ target }) => {
        setValidationsToFalse();
        setCapitao({
            ...capitao,
            [ target.id ]: target.value
        })
    }


    const handleSubmit = async () => {
        if (pswIsValid() && mailIsValidated()) {
                const response = await axios.post(
                    'https://localhost:44320/User/Login',
                    { email: capitao.email, password: capitao.password } 
                )    
                const {token} = response.data.data;
                setToken(token);
                    response.status === 200 ? 
                        history.push('/home') && props.onOpenToast("Logado com sucesso", "success") :
                        props.onOpenToast("Erro ao logar", "error");
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
        if(capitao.password === '' ){
            setPswValid(true);
            return false;
        }
        if(capitao.password.length <= 2){
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
    onOpenToast: (message, status) => dispatch(openToast({open: true, status: status, message:message})),
})

export default connect(null, mapDispatchToProps)(ManageFormLogin);