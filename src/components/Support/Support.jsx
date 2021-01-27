import {useHistory} from 'react-router-dom';

const Support = () => {
    
    const history = useHistory();

    const handleNext = () => {
        history.push('/4');
    }

    return(
        <>
        <div className="support">
            How well are you being supported?
        </div>
        <br />
        <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default Support;