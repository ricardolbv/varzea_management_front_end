import { React, useState } from 'react'
import { useHistory } from 'react-router-dom';

import Form from './Form'

const ManageForm = () => {  
    const history = useHistory();

    const [nomeValidation, setNomeValid] = useState(false);
    const [cpfValidation, setCpfValid] = useState(false);
    const [telefoneValidation, setTelefoneValid] = useState(false);
    const [enderecoValidation, setEnderecoValid] = useState(false);
    const [cepValidation, setCepValid] = useState(false);
    const [cidadeValidation, setCidadeValid] = useState(false);
    const [estadoValidation, setEstadoValid] = useState(false);

    const [capitao, setCapitao] = useState({
        nome: '',
        cpf: '',
        telefone: '',
        endereco: '',
        cep: '',
        numero: '',
        complemento: '',
        cidade: '',
        estado: '',
    })

    const handleChange = ({ target }) => {
        setValidationsToFalse();
        setCapitao({
            ...capitao,
            [ target.id ]: target.value
        })
    }

    function handleChangeSelect ({ target }) {
        setCapitao({
            ...capitao,
            estado: target.value,
        })
    }

    const handleSubmit = () => {
        if (!nomeIsValidated() || !CPFIsValidated() || !telefoneIsValidated() || !enderecoIsValidated() 
            || !cepIsValidated() || !cidadeIsValidated() || !estadoIsValidated())
            return alert('erro')

        setValidationsToFalse();
        history.push('/home')
        return alert('form validado!');
    }

    /**Funções de validação de form */
    const setValidationsToFalse = () => {
        setNomeValid(false);
        setCpfValid(false);
        setTelefoneValid(false);
        setEnderecoValid(false);
        setCepValid(false);
        setCidadeValid(false);
        setEstadoValid(false);
    }

    const nomeIsValidated = () => {
        if(capitao.nome.length <= 2){
            setNomeValid(true);
            return false
        }

        return true;
    }

    const CPFIsValidated = () => {
        if(capitao.cpf.includes('_')){
            setCpfValid(true);
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

    const enderecoIsValidated = () => {
        if(capitao.endereco.length <= 2){
            setEnderecoValid(true);
            return false
        }

        return true;
    }

    const cepIsValidated = () => {
        if(capitao.cep.includes('_')){
            setCepValid(true);
            return false
        }

        return true;
    }

    const cidadeIsValidated = () => {
        if(capitao.cidade.length <= 2){
            setCidadeValid(true);
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
              cpfValidation ={cpfValidation}
              telefoneValidation={telefoneValidation}
              enderecovalidation={enderecoValidation}
              cepValidation={cepValidation}
              cidadeValidation={cidadeValidation}
              estadoValidation={estadoValidation}/>
    )
}

export default ManageForm;