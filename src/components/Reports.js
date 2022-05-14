import { useNavigate } from "react-router-dom";

const Reports = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/createreport')
    }

    return (
        <div>
            <h1 className="centerContent">Reports</h1>
            <div className="centerContent container">
                <button onClick={onClick} className="btn btn-primary">Create Report</button>
            </div>
        </div>
    )
}

export default Reports