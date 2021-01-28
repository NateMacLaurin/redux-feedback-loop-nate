import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const Comment = () => {
    //local state (initialize to empty string in case user does not input anything)
    const [feedbackValue, setFeedbackValue] = useState('');
    //route handler
    const history = useHistory();
    //redux SEND with dispatch
    const dispatch = useDispatch();
    //button handler 
    const handleNext = () => {
        console.log(feedbackValue);
        //check for too large value so no user input gets truncated in database
        if(feedbackValue.length < 250){
            dispatch({
                type: 'SET_COMMENT', 
                payload: feedbackValue
            });
            //push to 'review' page on NEXT (no input test required here)
            history.push('/review');
        } else {
            alert(`Your comment has exceeded the maximum of 250 characters! Please edit.`);
        }
    }
    return(
        <>
        <div className="comment">
            <h2>Any comments you want to leave?</h2>
            <br />
            <label className="commentsTitle" htmlFor="commentsSelector"><b>Comments:</b></label>
            <br />
            <label htmlFor="commentsTitle">Max 250 words</label>
            <br />
            <textarea
                className="commentsSelector"
                rows="5" 
                cols="50"
                onChange={(event) => setFeedbackValue(event.target.value)}
                value={feedbackValue}
            >
            </textarea>
            <button onClick={handleNext}>NEXT</button>
        </div>
        </>
    )
}

export default Comment;