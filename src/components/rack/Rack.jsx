import './Rack.css'
import {useParams} from "react-router-dom";
import {useEffect} from "react";

function Rack(props){
    const { id } = useParams();
    useEffect(()=>{
        async function fetchPosts() {
            try {
                const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                        headers: {
                            'novi-education-project-id': 'c3febb8a-1e6f-4661-b991-14584ed3e91b'
                        }
                    }
                );
                setPosts(response.data);
            } catch(error) {
                console.log(error)
            }}
    })
    return (
        <h1>Rack {id}</h1>
    )
}
export default Rack