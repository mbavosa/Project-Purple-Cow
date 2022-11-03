import { useState, useEffect } from 'react';

function useCounter(initState){
    let [count, setCount] = useState(initState)

    let [loading, setLoading] = useState(false)

    const updateCount = () => {
        // setCount(count + 1)
        getData()
    }

    const getData = () => {
        console.log("api loading...")
        setLoading(true)
        fetch('https://api.countapi.xyz/hit/project-purple-cow/1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
        .then( (response) => {
            response.json().then( (data) => {
                console.log(data)
                setCount(data.value)
                setLoading(false)
            })
            
        })
        .then( () => {
            setLoading(false)
        });
    }

    useEffect( () => {
        console.log("should run only single time")
        getData()
    }, [])
    // above will run only one single time

    return {
        count,
        updateCount,
        loading
    }
}

export default useCounter