import React, { useEffect, useState } from 'react'
import "./AddJob.css"

interface AddJobPost{
    jobPost:string,
    jobDescription:string,
    reqYOE:number,
    techStack:string[],
}

interface UpdateJobPost extends AddJobPost{
    jobId:number,
}

const AddJob = () => {
    let url:string = window.location.href;
    const isEdit:boolean = url.toLowerCase().includes("edit");

    const [techStackInput,setTechStackInput] = useState("");

    const [addJobPost,setAddJobPost] = useState<AddJobPost>({
        jobPost:"",
        jobDescription:"",
        reqYOE:0,
        techStack:[],
    })

    const [updateJobPost,setUpdateJobPost] = useState<UpdateJobPost>({
        jobPost:"",
        jobDescription:"",
        reqYOE:0,
        techStack:[],
        jobId:0,
    })


    const handleAddOrUpdateJob = (e:any)=>{
        e.preventDefault();
    }

    const handleOnChange = (e: any, field: string) => {
        if (isEdit) {
            field !== "techStack" && setUpdateJobPost((prev) => {
                if (field !== 'reqYOE') {

                    return {
                        ...prev,
                        [field]: e.target.value,
                    }

                } else {
                    return {
                        ...prev,
                        [field]: parseFloat(e.target.value),
                    }
                }
            })
        } else {
            field !== "techStack" && setAddJobPost((prev) => {
                if (field !== "reqYOE") {
                    return {
                        ...prev,
                        [field]: e.target.value,
                    }

                } else {
                    return {
                        ...prev,
                        [field]: parseFloat(e.target.value),
                    }

                }

            })

        }
    }

    useEffect(()=>{
        console.log("=====================addJobPost",addJobPost);
    },[addJobPost])


    useEffect(()=>{
        console.log("=====================updateJobPost",updateJobPost);
    },[updateJobPost])

    const hanldeTechStackEnter = (e: any) => {
        e.preventDefault();
        if (isEdit) {
            setUpdateJobPost((prev) => {
                return {
                    ...prev,
                    techStack: [...prev.techStack, techStackInput]
                }
            })
        } else {
            setAddJobPost((prev) => {
                return {
                    ...prev,
                    techStack: [...prev.techStack, techStackInput]
                }
            })
        }

        setTechStackInput("");

    }

    const generateTechStacks = (jobPosts:string[])=>{
        return (
            <>
            {jobPosts?.map((el:string)=>{
                return <ul className="uLlists">
                    <li>{el}</li>
                </ul>

            })}
            </>
        )
    }


  return (
    <div className="addJob">
      <form>
              <div className="addJobLabel">
                  <label>Job Post</label>
                  <input onChange={(e)=>handleOnChange(e,"jobPost")} placeholder='job post' />
              </div>

              <div className="addJobLabel">
                  <label>Job Description</label>
                  <input onChange={(e)=>handleOnChange(e,"jobDescription")} placeholder='job description' />
              </div>


              <div className="addJobLabel">
                  <label>Req Year Of Experience</label>
                  <input onChange={(e)=>handleOnChange(e,"reqYOE")} placeholder='req YOE' type='number' />
              </div>

              <div className="techStackLabel">
                  <label>TechStack:-</label>
                  <div className="techStackInput">
                      <input value={techStackInput} onChange={(e)=>setTechStackInput(e.target.value)} placeholder='TechStack' />
                      <button onClick={(e)=>hanldeTechStackEnter(e)}>Enter</button>
                  </div>
                  <div className='generatedTechStacksField'>{isEdit ? generateTechStacks(updateJobPost.techStack) : generateTechStacks(addJobPost.techStack)}</div>
              </div>

              <div className="button">
                <button onClick={(e)=>handleAddOrUpdateJob(e)}>{isEdit ? "Update JOB" : "Add JOB"}</button>
              </div>
      </form>
    </div>
  )
}

export default AddJob
