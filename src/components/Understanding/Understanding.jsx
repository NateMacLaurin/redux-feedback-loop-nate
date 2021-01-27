import {useHistory} from 'react-router-dom';

const Understanding = () => {
    
    const history = useHistory();

    const handleNext = () => {
        history.push('/3');
    }

    return(
        <>
        <div className="understanding">
            How well are you understanding the content?
        </div>
        <br />
        <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default Understanding;