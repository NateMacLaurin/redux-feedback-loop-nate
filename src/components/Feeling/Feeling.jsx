import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const Feeling = () => {
    //local state
    const [feedbackValue, setFeedbackValue] = useState(1);
    //route handler
    const history = useHistory();
    //redux SEND with dispatch
    const dispatch = useDispatch();
    //button handler to test input, dispatch if it's not empty and (1-5) or alert, then push to next page
    const handleNext = () => {
        console.log(feedbackValue);
        //test logic (between 1 and 5)
        if(1 <= feedbackValue && feedbackValue <= 5){
            //dispatch if test passes
            dispatch({
                type: 'SET_FEELING', 
                payload: feedbackValue
            });
            //push to 'understanding' page on NEXT
        history.push('/2');
        } else {
            alert(`Feedback must be between 1 and 5! Please reselect`);
        }
    }
    return(
        <div className="feeling">
            <h2>How are you feeling today?</h2>
            <br />
            <label className="feelingTitle" htmlFor="feelingSelector"><b>Feeling:</b></label>
            <br />
            <label htmlFor="feelingTitle">1 (Not Great) - 5 (Awesome!)</label>
            <br />
            <select 
            className="feelingSelector"
                onChange={(event) => setFeedbackValue(Number(event.target.value))}
                value={feedbackValue} 
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={handleNext}>NEXT</button>
        </div>
    )
}

export default Feeling;