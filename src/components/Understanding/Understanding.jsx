import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Understanding = () => {
    //route handler
    const history = useHistory();
    //redux SEND with dispatch
    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch({
            type: 'SET_UNDERSTANDING', 
            payload: 5
        });
        //push to 'support' page on NEXT (a value is REQUIRED)
        history.push('/3');
    }

    return(
        <>
        <div className="understanding">
            How well are you understanding the content?
        </div>
        <br />
        <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default Understanding;