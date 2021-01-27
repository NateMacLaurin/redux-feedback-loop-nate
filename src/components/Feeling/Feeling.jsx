import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Feeling = () => {
    //route handler
    const history = useHistory();
    //redux SEND with dispatch
    const dispatch = useDispatch();
    //button handler to test input, dispatch if it's not empty and (1-5) or alert, then push to next page
    const handleNext = () => {
        //test logic

        //dispatch if test passes
        dispatch({
            type: 'SET_FEELING', 
            payload: 5
        });
        //push to 'understanding' page on NEXT
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