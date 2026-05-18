import { Link } from "react-router-dom"
import "./JobItem.css"
import type { JobItem } from "../Dashboard/Dashboard";
import { deleteJobURLByID } from "../../Constants/constants";
import axios from "axios";
import { JobPostContext } from "../../Context/jobPostContext";
import { useContext } from "react";
const JobItem = ({job}:{job:JobItem}) => {

    const context = useContext(JobPostContext);
        const {setJobPosts} = context;
    const handleDeleteJobPost = async () => {
      try {
        let jobURL = `${deleteJobURLByID}${job.jobId}`;
        let apiResponse = await axios.delete(jobURL);
        if (apiResponse.status === 200) {
          setJobPosts((prev: JobItem[]) => {
            return prev.filter((j: JobItem) => j.jobId !== job.jobId);
          });
        }
      } catch (error) {
        console.error("Error deleting job:", error);
      }
    };
    return (
        <div className="jobItem">
            <div className="jobPost">
                <h1>{job.jobPost}</h1>
                <span>ID: {job.jobId}</span>
            </div>

            <div className="jobDescription">
                <p>{job.jobDescription}</p>
                <h3>Technology Stack:</h3>
                <ul className="lists">
                    {job.techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}

                </ul>
                <div className="reqYOE">
                    <h3>Req YOE:-</h3>
                    <h2>{job.reqYOE}</h2>
                </div>
                <div className="buttons">
                    <button onClick={()=>handleDeleteJobPost()} className="button" id="delete">Delete</button>
                    <Link className="button" to={`/editJob/${job.jobId}`}>
                        <button id="edit">Edit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobItem
