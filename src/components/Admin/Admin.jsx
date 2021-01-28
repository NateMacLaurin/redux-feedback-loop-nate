import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Admin = () => {
    //create a local state to store axios GET data
    const [feedbackData, setFeedbackData] = useState([]);
    //on admin page load, run getData once
    useEffect(() => getData(), []);
    //axios GET function
    const getData = () => {
        axios.get('/feedback/admin')
            .then((response) => {
                console.log(response.data);
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
            <h2>Feedback Results</h2>
        </div>
        <table align="center" border="solid">
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                {feedbackData.map((feedback) => {
                    return(
                        <tr key={feedback.id}>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        <br />
        <button onClick={handleReturn}>RETURN</button>
        </>
    )
}

export default Admin;