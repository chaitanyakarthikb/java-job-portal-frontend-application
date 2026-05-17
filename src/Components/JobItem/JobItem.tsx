import { Link } from "react-router-dom"
import "./JobItem.css"
const JobItem = () => {
    let id:number = 5;
    return (
        <div className="jobItem">
            <div className="jobPost">
                <h1>Job Post Title</h1>
                <span>ID</span>
            </div>

            <div className="jobDescription">
                <p>lorem ipsum dadsjf askldj klajdfja lksjdfjkl jalksdjfkj lkjalksjdflk j</p>
                <h3>Technology Stack:</h3>
                <ul className="lists">
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                   
                </ul>
                <div className="reqYOE">
                    <h3>Req YOE:-</h3>
                    <h2>3</h2>
                </div>
                <div className="buttons">
                    <button className="button" id="delete">Delete</button>
                    <Link className="button" to={`/editJob/${id}`}>
                        <button id="edit">Edit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobItem
