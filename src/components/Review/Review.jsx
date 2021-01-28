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
    //axios POST to postgres DB on final submit after user review
    const handleSubmit = () => {
        //handle axios POST to database
        axios.post('/feedback/submit', currentFeedback)
            .then((response) => {
                //dispatch a NEW type to redux
                dispatch({
                    type: 'NEW',
                    payload: currentFeedback
                })
                //push to success page on successful POST
                history.push('/success');
            })
            .catch((err) => {
                alert(`ERROR: ${err}`);
            })
    }
    //routes via useHistory to handle editing values before submission
    const handleEdit = (target) => {
        //redirect based on the class name of the button clicked
        switch(target){
            case 'feelingEdit':
                history.push('/1');
                return;
            case 'understandingEdit':
                history.push('/2');
                return;
            case 'supportEdit':
                history.push('/3');
                return;
            case 'commentEdit':
                history.push('/4');
                return;
            default:
                return;
        }
    }

    return(
        <>
        <div className="review">
            <h2>Review Your Feedback</h2>
            <table align="center" border="solid">
                <tbody>
                    <tr>
                        <td>Feeling:</td>
                        <td>{currentFeedback.feeling}</td>
                        <td><button 
                                value="feelingEdit" 
                                onClick={(event) => handleEdit(event.target.value)}
                            >Edit</button></td>
                    </tr>
                    <tr>
                        <td>Understanding:</td>
                        <td>{currentFeedback.understanding}</td>
                        <td><button 
                                value="understandingEdit" 
                                onClick={(event) => handleEdit(event.target.value)}
                            >Edit</button></td>
                    </tr>
                    <tr>
                        <td>Support:</td>
                        <td>{currentFeedback.support}</td>
                        <td><button 
                                value="supportEdit" 
                                onClick={(event) => handleEdit(event.target.value)}
                            >Edit</button></td>
                    </tr>
                    <tr>
                        <td>Comment:</td>
                        <td>{currentFeedback.comments}</td>
                        <td><button 
                                value="commentEdit" 
                                onClick={(event) => handleEdit(event.target.value)}
                            >Edit</button></td>
                    </tr>
                </tbody>               
            </table>
        </div>
        <br />
        <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
}

export default Review;