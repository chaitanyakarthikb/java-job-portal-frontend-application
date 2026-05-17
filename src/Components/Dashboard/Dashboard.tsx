import JobItem from "../JobItem/JobItem";
import "./Dashboard.css";

const Dashboard = () => {
    interface JobItem  {
        jobId:number,
        jobTitle:string,
        jobDescription:string,
        reqYOE:number,
        techStack:string[],
    }
    const jobItems:JobItem[] = [
        {
            jobId:1,
            jobTitle:"Software Engineer",
            jobDescription:"Hello world, this is my Job Description",
            reqYOE:3,
            techStack:["one","two","three","four","five","six"]
        },
        {
            jobId:2,
            jobTitle:"Senior Software Engineer",
            jobDescription:"Hello world, this is my Job Description for Senior SE",
            reqYOE:4,
            techStack:["six","seven","eight","nine"]
        },
        {
            jobId:2,
            jobTitle:"Senior Software Engineer",
            jobDescription:"Hello world, this is my Job Description for Senior SE",
            reqYOE:4,
            techStack:["six","seven","eight","nine"]
        },{
            jobId:2,
            jobTitle:"Senior Software Engineer",
            jobDescription:"Hello world, this is my Job Description for Senior SE",
            reqYOE:4,
            techStack:["six","seven","eight","nine"]
        },{
            jobId:2,
            jobTitle:"Senior Software Engineer",
            jobDescription:"Hello world, this is my Job Description for Senior SE",
            reqYOE:4,
            techStack:["six","seven","eight","nine"]
        },{
            jobId:2,
            jobTitle:"Senior Software Engineer",
            jobDescription:"Hello world, this is my Job Description for Senior SE",
            reqYOE:4,
            techStack:["six","seven","eight","nine"]
        },{
            jobId:2,
            jobTitle:"Senior Software Engineer",
            jobDescription:"Hello world, this is my Job Description for Senior SE",
            reqYOE:4,
            techStack:["six","seven","eight","nine"]
        }
    ]
  return (
    <section className="job--dashboard">
      {jobItems.map((el:JobItem)=>{
        return <JobItem/>
      })}
    </section>
  )
}

export default Dashboard
