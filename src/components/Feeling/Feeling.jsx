import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Feeling = () => {
    //route handler
    const history = useHistory();
    //redux SEND with dispatch
    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch({
            type: 'SET_FEELING', 
            payload: 5
        });
        //push to 'understanding' page on NEXT (a value is REQUIRED)
        history.push('/2');
    }
    return(
        <>
        <div className="feeling">
            How are you feeling today?
        </div>
        <br />
        <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default Feeling;