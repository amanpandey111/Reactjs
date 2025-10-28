import React, { useEffect, useState } from 'react'
import apiComments, { useGetAllCommentsQuery } from '../store/apiComments'
import { useDispatch } from 'react-redux'
import store from '../store/store'

const ShowComments = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const { data: posts, isLoading, isFetching } = useGetAllCommentsQuery(page)
    // console.log(posts);

    useEffect(()=>{
        store.dispatch(apiComments.endpoints.getAllComments.initiate(page))
    },[])

    return (
        <div>
            {posts?.map(({ id, name, email }) => (
                <div key={id}>
                    {name} - {email} - {id}
                </div>
            ))}
            <button onClick={() => setPage(page - 1)} isLoading={isFetching}>
                Previous
            </button>
            <button onClick={() => setPage(page + 1)} isLoading={isFetching}>
                Next
            </button>
        </div>
    )
}

export default ShowComments