import {useHistory} from 'react-router-dom';

const Review = () => {
    
    const history = useHistory();

    const handleNext = () => {
        history.push('/success');
    }

    return(
        <>
        <div className="review">
            Review Your Feedback
        </div>
        <br />
        <button onClick={handleNext}>SUBMIT</button>
        </>
    )
}

export default Review;