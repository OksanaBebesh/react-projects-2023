import React from 'react';

interface Props {
  searchTitle: string,
  setSearchTitle: React.Dispatch<React.SetStateAction<string>>,
  setSearch: React.Dispatch<React.SetStateAction<boolean>>, 
}

const InputComponent: React.FC<Props> = ({searchTitle, setSearchTitle, setSearch}) => {
  return (
    <>
      <div className="input">
        <input type="text" className=" input_box" value={searchTitle} onChange={(e)=>setSearchTitle(e.target.value)} placeholder="Enter a task" />
        <button className="input_submit" onClick={()=>setSearch(true)}>Go</button>
      </div>
    </>
  );
};
export default InputComponent;
