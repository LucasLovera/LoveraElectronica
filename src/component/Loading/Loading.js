import Spinner from 'react-bootstrap/Spinner';
import "./Loading.css"
function Loading() {
  return (<div className='loading' >
    <Spinner className='m-5'>
      <span className="visually-hidden ">Loading...</span>
    </Spinner> 
    </div>
  );
}

export default Loading;