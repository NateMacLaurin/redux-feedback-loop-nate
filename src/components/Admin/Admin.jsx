import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Admin = () => {
    
    const history = useHistory();

    const handleNext = () => {
        history.push('/');
    }

    return(
        <>
        <div className="admin">
            Administration Page
        </div>
        <br />
        <button onClick={handleNext}>RETURN</button>
        </>
    )
}

export default Admin;