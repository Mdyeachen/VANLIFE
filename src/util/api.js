const getVans = async (id) => {
    const url = !id ? "/api/vans" : `/api/vans/${id}`;
    const res = await fetch(url);
    if(!res.ok) {
        throw {
            message : "Failed to facth vans data",
            code : res.status,
            status : res.statusText
        }
    }

    const data = await res.json();
    return data ? data : []
}

const getHostVans = async (id) => {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
    
    const res = await fetch(url);
    if(!res.ok){
        throw {
            message : "failed to fatch vans api",
            statusCode : res.status,
            status : res.statusText
        };
    }

    return await res.json()   
}

const loginUser = async (creds) => {
    const res = await fetch("/api/login",
        {method : "post", body: JSON.stringify(creds)}
    )
    const data = await res.json()
    if(!res.ok){
        throw {
            message : data.message,
            statusCode : res.status,
            status : res.statusText
        }        
    }
    return data
}

export {getVans, getHostVans, loginUser}