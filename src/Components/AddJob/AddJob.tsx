import React, { useEffect, useState } from "react";
import "./AddJob.css";
import axios from "axios";
import { getJOBByIDURL, postJOBURL, updateJobURLById } from "../../Constants/constants.ts";

interface AddJobPost {
  jobPost: string;
  jobPostDescription: string;
  reqYOE: number;
  techStack: string[];
}

interface UpdateJobPost extends AddJobPost {
  jobId: number;
}

const AddJob = () => {
  let url: string = window.location.href;
  const isEdit: boolean = url.toLowerCase().includes("edit");

  const [techStackInput, setTechStackInput] = useState("");

  const [addJobPost, setAddJobPost] = useState<AddJobPost>({
    jobPost: "",
    jobPostDescription: "",
    reqYOE: 0,
    techStack: [],
  });

  const [updateJobPost, setUpdateJobPost] = useState<UpdateJobPost>({
    jobPost: "",
    jobPostDescription: "",
    reqYOE: 0,
    techStack: [],
    jobId: 0,
  });

  const handleAddOrUpdateJob = async (e: any) => {
    e.preventDefault();
    if (isEdit) {
      let url = `${updateJobURLById}${updateJobPost.jobId}`;
      try {
        let apiResponse = await axios.put(url, updateJobPost, {
          headers: {
            "Content-Type": "application/json", // ← Important!
          },
        });
        let data = await apiResponse.data;
        window.location.href = "/";
      } catch (err) {
        console.log("error while updating job", err);
      }
    } else {
      console.log("inside else block");
      let url = postJOBURL;
      let updatedJobPost = {
        ...addJobPost,
        jobId: Math.floor(Math.random() * 1000000),
      };

      try {
        let apiResponse = await axios.post(url, updatedJobPost, {
          headers: {
            "Content-Type": "application/json", // ← Important!
          },
        });
        let data = await apiResponse.data;
        window.location.href = "/";

      } catch (err) {
        console.log("error while adding job", err);
      }
    }
  };

  const handleOnChange = (e: any, field: string) => {
    if (isEdit) {
      field !== "techStack" &&
        setUpdateJobPost((prev) => {
          if (field !== "reqYOE") {
            return {
              ...prev,
              [field]: e.target.value,
            };
          } else {
            return {
              ...prev,
              [field]: parseFloat(e.target.value),
            };
          }
        });
    } else {
      field !== "techStack" &&
        setAddJobPost((prev) => {
          if (field !== "reqYOE") {
            return {
              ...prev,
              [field]: e.target.value,
            };
          } else {
            return {
              ...prev,
              [field]: parseFloat(e.target.value),
            };
          }
        });
    }
  };

  useEffect(() => {
    console.log("=====================addJobPost", addJobPost);
  }, [addJobPost]);

  useEffect(() => {
    console.log("=====================updateJobPost", updateJobPost);
  }, [updateJobPost]);

  useEffect(()=>{
    if(isEdit){
        let jobId = parseInt(url.split("/").pop() ?? "");
      // Fetch the job details based on jobId and populate the form

      const fetchJobDetails = async () => {
        try {
const jobURL = await axios.get(`http://localhost:8080/get-job/${jobId}`);
          setUpdateJobPost(jobURL.data);
        } catch (err) {
          console.log("error while fetching job details", err);
        }
      };

      fetchJobDetails();


    }

  },[]);

  const hanldeTechStackEnter = (e: any) => {
    e.preventDefault();
    if (isEdit) {
      setUpdateJobPost((prev) => {
        return {
          ...prev,
          techStack: [...prev.techStack, techStackInput],
        };
      });
    } else {
      setAddJobPost((prev) => {
        return {
          ...prev,
          techStack: [...prev.techStack, techStackInput],
        };
      });
    }

    setTechStackInput("");
  };

  const generateTechStacks = (jobPosts: string[]) => {
    return (
      <>
        {jobPosts?.map((el: string) => {
          return (
            <ul className="uLlists">
              <li>{el}</li>
            </ul>
          );
        })}
      </>
    );
  };

  return (
    <div className="addJob">
      <form>
        <div className="addJobLabel">
          <label>Job Post</label>
          <input
          value={isEdit ? updateJobPost.jobPost : addJobPost.jobPost}
            onChange={(e) => handleOnChange(e, "jobPost")}
            placeholder="job post"
          />
        </div>

        <div className="addJobLabel">
          <label>Job Description</label>
          <input
            value={isEdit ? updateJobPost.jobPostDescription : addJobPost.jobPostDescription}
            onChange={(e) => handleOnChange(e, "jobPostDescription")}
            placeholder="job post description"
          />
        </div>

        <div className="addJobLabel">
          <label>Req Year Of Experience</label>
          <input
            value={isEdit ? updateJobPost.reqYOE : addJobPost.reqYOE}
            onChange={(e) => handleOnChange(e, "reqYOE")}
            placeholder="req YOE"
            type="number"
          />
        </div>

        <div className="techStackLabel">
          <label>TechStack:-</label>
          <div className="techStackInput">
            <input
              value={techStackInput}
              onChange={(e) => setTechStackInput(e.target.value)}
              placeholder="TechStack"
            />
            <button onClick={(e) => hanldeTechStackEnter(e)}>Enter</button>
          </div>
          <div className="generatedTechStacksField">
            {isEdit
              ? generateTechStacks(updateJobPost.techStack)
              : generateTechStacks(addJobPost.techStack)}
          </div>
        </div>

        <div className="button">
          <button onClick={(e) => handleAddOrUpdateJob(e)}>
            {isEdit ? "Update JOB" : "Add JOB"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
