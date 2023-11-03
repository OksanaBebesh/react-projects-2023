import React from 'react';

interface Props {
    errorMessage: string
}
const Error: React.FC<Props> = ({errorMessage}) => {
    return (<><div className="error"><div className="error-heading"></div>Something happened wrong :( <p>{errorMessage}</p></div></>)
}


export default Error;