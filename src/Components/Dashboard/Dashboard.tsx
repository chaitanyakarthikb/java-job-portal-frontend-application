import { useContext, useEffect, useState } from "react";
import JobItem from "../JobItem/JobItem";
import "./Dashboard.css";
import { getAllJobsURL } from "../../Constants/constants";
import axios from "axios";
import { JobPostContext } from "../../Context/jobPostContext";

 export interface JobItem  {
        jobId:number,
        jobPost:string,
        jobDescription:string,
        reqYOE:number,
        techStack:string[],
}

const Dashboard = () => {
  

    const context = useContext(JobPostContext);
    const {jobPosts,setJobPosts} = context;

    useEffect(()=>{

        
        const fetchData = async () => {
            let url = getAllJobsURL;
            try{
                let apiResposne = await axios.get(url);
                let data = await apiResposne.data;
                setJobPosts(data);
            }catch(err){
                console.log("error fetching the data")

            }

        };

        fetchData();

    },[]);
  return (
    <section className="job--dashboard">
      {jobPosts && jobPosts.map((el:JobItem)=>{
        return <JobItem job={el}/>
      })}
    </section>
  )
}

export default Dashboard
