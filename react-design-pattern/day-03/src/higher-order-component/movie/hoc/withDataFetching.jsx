import { useEffect, useState } from "react"

export function withDataFetching(WrappedComponent) {
    return function WithDataFetchingComponent(props) {
        const [data, setData] = useState([])
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)
        useEffect(() => {
            async function fetchData () {
                try {
                    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/movies`)
                    if (!response.ok) {
                        throw new Error('Failed To Fetch Data');
                    }
                    const result = await response.json()
                    setData(result)
                } catch (err) {
                    setError(err.message)
                } finally {
                    setLoading(false)
                }
            }
            fetchData()
        }, [])
        if (loading) {
            return <p>Loading data...</p>
        }
        if (error) {
            return <p>Error: {error}</p>
        }
        return <WrappedComponent data={data}  {...props} />
    }
}