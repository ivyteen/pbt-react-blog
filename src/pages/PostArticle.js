import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getPostByNo } from "../PostData"

function PostArticle(props) {

    const [ data, setData ] = useState({});


    const param = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    
  
    useEffect(() => {
        setData(getPostByNo(parseInt(param.no)));
    },[]);

    console.log(data)

    const article = data ? (
        <div>
        
            <div className="post-view-row">
                <label>
                    <h2>{ data.title }</h2>
                </label>
            </div>
            <div className="post-view-row">
                <label>{ data.createDate }</label>
            </div>
            
            <div className="post-view-row">
                <div>
                    {
                    data.content
                    }
                </div>
            </div>            
            
        </div>

    ) : (<p>Cannot Find The Article</p>)

    return (
        <div>
            {article}
            <button className="post-view-go-list-btn" onClick={() => navigate('/')}>list</button>
        </div>
        
    )
}


export default PostArticle;