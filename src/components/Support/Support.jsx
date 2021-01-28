import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const Support = () => {
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
                type: 'SET_SUPPORT', 
                payload: Number(feedbackValue)
            });
            //push to 'understanding' page on NEXT
        history.push('/4');
        } else {
            alert(`Feedback must be between 1 and 5! Please reselect`);
        }
    }

    return(
        <div className="support">
            <h2>How well do you feel supported?</h2>
            <br />
            <label className="supportTitle" htmlFor="supportSelector"><b>Support:</b></label>
            <br />
            <label htmlFor="supportTitle">1 (Not Great) - 5 (Awesome!)</label>
            <br />
            <select 
            className="supportSelector"
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

export default Support;