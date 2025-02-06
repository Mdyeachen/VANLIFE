export async function getVans(){
    const res = await fetch('/api/vans');

    if(!res.ok){
        throw{
            message : "failed to fatch vans api",
            statusCode : res.status,
            status : res.statusText
        }
    }
    const data = await res.json();
    return data;


}

