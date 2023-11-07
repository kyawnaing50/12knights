import React from 'react'
import { useParams } from 'react-router-dom'

const Person = () => {
    const { personID} = useParams();
    return (
      <>
            <div>
                {
                    personID=="name"&&<>This is Name</>
                }
                {
                    personID=="age"&&<>This is age</>
                }
        </div>
        
      </>
    );
}

export default Person
