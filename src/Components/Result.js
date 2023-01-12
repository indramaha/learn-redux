import { useSelector } from "react-redux";

const Result = () => {

    const {number} = useSelector(numberState => numberState)
    return (  
        <div>
            <h1>This is Result Number From Redux</h1>
            <h3>{number}</h3>
        </div>
    );
}
 
export default Result;