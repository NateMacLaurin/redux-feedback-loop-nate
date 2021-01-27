import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Comment = () => {
    //route handler
    const history = useHistory();
    //redux SEND with dispatch
    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch({
            type: 'SET_COMMENT', 
            payload: 'placeholder.'
        });
        //push to 'review' page on NEXT (no input required here)
        history.push('/review');
    }

    return(
        <>
        <div className="comment">
            Any comments you want to leave?
        </div>
        <br />
        <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default Comment;