import React, { createContext, useState} from "react";


export const JobPostContext = createContext<any>(null);;

export const JobPostProvider = ({ children }: { children: any }) => {
    const [jobPosts,setJobPosts] = useState<any>([]);
    const value = { jobPosts, setJobPosts };
    return (
        <JobPostContext.Provider value={value}>
            {children}
        </JobPostContext.Provider>
    )
};