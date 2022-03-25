import { postList } from '../PostData'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap'
import { useState, useEffect } from 'react'


const truncate = (text, limit) => {
    if (typeof text !== 'string') return '';
  
    if (text.length > limit) {
      // truncate string based on limit
      text = text.substring(0, limit);
    }
  
    // truncate to last whitespace if applicable
    const lastSpaceIndex = text.lastIndexOf(' ');
    if (lastSpaceIndex !== -1) {
      text = text.substring(0, lastSpaceIndex);
    }
  
    // trim trailing whitespace/periods
    return text.replace(/[\s.]+$/g, '');
};


function PostList(props) {

    const [ dataList, setDataList ] = useState([])

    useEffect(() => {
        setDataList(postList)
    },[])

    //console.log("PostList",dataList);
    
    const listItems = dataList ? dataList.map((item,index) => { 
        return (
            <ListGroupItem key={index} action tag="button" >

                <Link to={`/post/${item.no}`} style={{ textDecoration: 'none', color:'black' }}>
                    <article style={{ lineHeight: 1.35 }}>
                        <h2>
                            <strong>{item.title}</strong>
                        </h2>
                    
                    <p>{truncate(item.content, 150)}&hellip;</p>
                    
                    <div style={{ textAlign: 'right' }}>
                        <time dateTime={item.createDate}>{item.createDate}</time>
                    </div>
                    
                    
                    </article>
                </Link>
                
            </ListGroupItem>         
        )

    }) : ""
    


    return (
        /**
        <div>
            <p>PostList</p>
        </div> 
         */
        <ListGroup>
            {listItems}

        </ListGroup>
    )
}


export default PostList;