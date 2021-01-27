import {useHistory} from 'react-router-dom';

const Success = () => {
    //route handler
    const history = useHistory();

    const handleNext = () => {
        history.push('/');
    }

    return(
        <>
        <div className="success">
            Thank You!
        </div>
        <br />
        <button onClick={handleNext}>Leave New Feedback</button>
        </>
    )
}

export default Success;