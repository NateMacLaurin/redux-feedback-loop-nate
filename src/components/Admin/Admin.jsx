import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Admin = () => {
    //create a local state to store axios GET data
    const [feedbackData, setFeedbackData] = useState({});
    //on admin page load, run getData once
    useEffect(() => getData(), []);
    //axios GET function
    const getData = () => {
        axios.get('/feedback/admin')
            .then((response) => {
                setFeedbackData(response.data);
            })
            .catch((err) => {
                alert(`ERROR: ${err}`);
            })
    }
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