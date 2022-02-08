import { React, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import DeletAlertDialog from '../../common/DeletAlertDialog';
import { useHistory } from 'react-router-dom';
import { players } from './reducers';
import { deletePlayer } from './thunks';
import { useToken } from '../../auth/useToken';

const RetailEditAndExcludeEnable = (props) => {
    const [token, setToken] = useToken();
    const [openDialog, setHandleDialog] = useState(false);
    const handleCloseDialog = () => setHandleDialog(false);
    const history = useHistory();


    function handleExclude (){
        props.onDeletePlayer(props.player.id, token)
        setHandleDialog(false);
    }

    function handleEdit (){
        history.push(`/home/myteam/edit-player/${props.player.id}`)
    }

    function handleClickDelete () {
        setHandleDialog(true);
    }

    return (
            <div>
                <EditIcon style={{ position:'relative', top:'1vh'}} onClick={handleEdit}/>
                <DeleteIcon style={{ position:'relative', top:'1vh' }} onClick={handleClickDelete}/>
                <DeletAlertDialog openDialog={openDialog} handleCloseDialog={handleCloseDialog} handleExclude={handleExclude} nome={props.player.nome}/>
            </div>
          )
}

const mapDispatchToProps = dispatch => ({
    onDeletePlayer: (id, token) => dispatch(deletePlayer(id, token)),
})

export default connect(null, mapDispatchToProps)(RetailEditAndExcludeEnable);