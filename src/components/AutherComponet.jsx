import React from 'react'

const AutherComponet = ({ img, name,degree,email }) => {
  return (
    <div className=" pr-3 pl-3 py-3 px-3">
      <img
        class=" w-20 h-20 object-cover rounded-full max-w-sm mx-auto"
        src={img}
        alt="image description"
      />
      <ul className=" text-center text-xs space-y-1 mt-3">
              <li>{ name}</li>
              <li>{ degree}</li>
              <li>{ email}</li>
      </ul>
    </div>
  );
};

export default AutherComponet