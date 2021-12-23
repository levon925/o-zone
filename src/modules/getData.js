const getData = (str) =>{
    return fetch(
        `https://ozon-5ebbb-default-rtdb.firebaseio.com/goods.json`
        )
    .then((response)=>{
        return response.json()
    })

}

export default getData