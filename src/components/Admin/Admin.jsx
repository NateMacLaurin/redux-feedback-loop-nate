import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

const Admin = () => {
    //on admin page load, run getData once
    useEffect(() => getData(), []);
    //route handler
    const history = useHistory();

    //return to client feedback page
    const handleReturn = () => {
        history.push('/');
    }

    return(
        <>
        <div className="admin">
            Administration Page
        </div>
        <br />
        <button onClick={handleReturn}>RETURN</button>
        </>
    )
}

export default Admin;