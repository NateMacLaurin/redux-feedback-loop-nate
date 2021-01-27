import {useHistory} from 'react-router-dom';

const Feeling = () => {

    const history = useHistory();

    const handleNext = () => {
        history.push('/2');
    }
    return(
        <>
        <div className="feeling">
            How are you feeling today?
        </div>
        <br />
        <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default Feeling;