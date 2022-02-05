import { React, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { newCaptain } from './thunks';

import Form from './Form'

const ManageForm = (props) => {  
    const history = useHistory();

    const [nomeValidation, setNomeValid] = useState(false);
    const [telefoneValidation, setTelefoneValid] = useState(false);
    const [estadoValidation, setEstadoValid] = useState(false);
    const [pswValidation, setPswValid] = useState(false);
    const [emailValidation, setEmailValid] = useState(false);

    const [capitao, setCapitao] = useState({
        nome: '',
        telefone: '',
        estado: '',
        email: '',
        psw: '',
        confirmPsw: '',
    })

    const handleChange = ({ target }) => {
        setValidationsToFalse();
        setCapitao({
            ...capitao,
            [ target.id ]: target.value
        })
    }

    function handleChangeSelect ({ target }) {
        setValidationsToFalse();
        setCapitao({
            ...capitao,
            estado: target.value,
        })
    }

    const handleSubmit = async () => {
        if (nomeIsValidated()  && telefoneIsValidated() && estadoIsValidated() &&
            pswIsValid() && mailIsValidated()) {
                try {
                    await props.onCreateCaptain(capitao);
                    history.push('/login')
                } 
                catch (error) 
                {
                    alert("Erro ao criar capitão" + error);   
                }
            }
    }

    /**Funções de validação de form */
    const setValidationsToFalse = () => {
        setNomeValid(false);
        setTelefoneValid(false);
        setEstadoValid(false);
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
        if(capitao.confirmPsw !== capitao.psw){
            setPswValid(true);
            return false;
        }

        return true;
    }

    const nomeIsValidated = () => {
        if(capitao.nome.length <= 2){
            setNomeValid(true);
            return false
        }

        return true;
    }

    const telefoneIsValidated = () => {
        if(capitao.telefone.length < 12){
            setTelefoneValid(true);
            return false
        }

        return true;
    }


    const estadoIsValidated = () => {
        if(capitao.estado === ''){
            setEstadoValid(true);
            return false
        }

        return true;
    }


    return (
        <Form onHandleChange={handleChange}
              onHandleSubmit={handleSubmit}
              onHandleSelect={handleChangeSelect}
              capitao={capitao}
              nomeValidation={nomeValidation}
              telefoneValidation={telefoneValidation}
              estadoValidation={estadoValidation}
              pswValidation={pswValidation}
              emailValidation={emailValidation}/>
    )
}

const mapDispatchToProps = dispatch => ({
    onCreateCaptain: captain => dispatch(newCaptain(captain)),
})

export default connect(null, mapDispatchToProps)(ManageForm);