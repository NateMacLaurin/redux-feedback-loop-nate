import {useHistory} from 'react-router-dom';

const Comments = () => {
    
    const history = useHistory();

    const handleNext = () => {
        history.push('/5');
    }

    return(
        <>
        <div className="comments">
            Any comments you want to leave?
        </div>
        <br />
        <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default Comments;