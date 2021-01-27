import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const Review = () => {
    //route handler
    const history = useHistory();
    //redux GET with dispatch
    const dispatch = useDispatch();
    //redux GET with useSelector
    const currentFeedback = useSelector(store => store.feedbackReducer);
    const handleSubmit = () => {
        //handle axios POST to database
        axios.post('/feedback/submit', currentFeedback)
            .then((response) => {
                //dispatch a NEW type to redux
                dispatch({
                    type: 'NEW'
                })
                //push to success page on successful POST
                history.push('/success');
            })
            .catch((err) => {
                alert(`ERROR: ${err}`);
            })
    }

    return(
        <>
        <div className="review">
            Review Your Feedback
            <ul>
                <li>Feeling: {currentFeedback.feeling}</li>
                <li>Understanding: {currentFeedback.understanding}</li>
                <li>Support: {currentFeedback.support}</li>
                <li>Comment: {currentFeedback.comment}</li>
            </ul>
        </div>
        <br />
        <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
}

export default Review;