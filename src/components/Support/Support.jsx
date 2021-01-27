import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Support = () => {
    //route handler
    const history = useHistory();
    //redux SEND with dispatch
    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch({
            type: 'SET_SUPPORT', 
            payload: 5
        });
        //push to 'comments' page on NEXT (a value is REQUIRED)
        history.push('/4');
    }

    return(
        <>
        <div className="support">
            How well are you being supported?
        </div>
        <br />
        <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default Support;