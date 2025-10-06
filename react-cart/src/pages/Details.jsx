import { useParams } from "react-router-dom";
function Details(){

    const {slug} = useParams();

    return(
        <>Details {slug}</>
    )
}
export default Details;