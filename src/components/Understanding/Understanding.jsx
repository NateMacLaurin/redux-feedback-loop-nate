import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const Understanding = () => {
    //local state
    const [feedbackValue, setFeedbackValue] = useState(1);
    //route handler
    const history = useHistory();
    //redux SEND with dispatch
    const dispatch = useDispatch();

    const handleNext = () => {
        console.log(feedbackValue);
        //test logic (between 1 and 5)
        if(1 <= feedbackValue && feedbackValue <= 5){
            //dispatch if test passes
            dispatch({
                type: 'SET_UNDERSTANDING', 
                payload: Number(feedbackValue)
            });
            //push to 'understanding' page on NEXT
        history.push('/3');
        } else {
            alert(`Feedback must be between 1 and 5! Please reselect`);
        }
    }

    return(
        <div className="understanding">
            <h2>How well are you understanding the content?</h2>
            <br />
            <label className="understandingTitle" htmlFor="understandingSelector"><b>Understanding:</b></label>
            <br />
            <label htmlFor="understandingTitle">1 (Not Great) - 5 (Awesome!)</label>
            <br />
            <select 
            className="understandingSelector"
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

export default Understanding;