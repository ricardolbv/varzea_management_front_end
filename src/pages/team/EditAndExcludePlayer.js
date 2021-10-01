import { React, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import DeletAlertDialog from '../../common/DeletAlertDialog';
import { useHistory } from 'react-router-dom';
import { players } from './reducers';
import { deletePlayer } from './thunks';

const RetailEditAndExcludeEnable = (props) => {
    const [openDialog, setHandleDialog] = useState(false);
    const handleCloseDialog = () => setHandleDialog(false);
    const history = useHistory();


    function handleExclude (){
        props.onDeletePlayer(props.player.id)
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
    onDeletePlayer: id => dispatch(deletePlayer(id)),
})

export default connect(null, mapDispatchToProps)(RetailEditAndExcludeEnable);