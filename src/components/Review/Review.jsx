import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';

const Review = () => {
    
    const history = useHistory();

    const handleSubmit = () => {
        //handle axios POST to database
        //push to success page on successful POST
        history.push('/success');
    }

    return(
        <>
        <div className="review">
            Review Your Feedback
        </div>
        <br />
        <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
}

export default Review;