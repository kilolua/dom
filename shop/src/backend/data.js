let reqTimeout = 7000;

export function fetchTimeout(url, options, timeout = reqTimeout) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout error')), timeout)
        )
    ]);
}

export function getCards(callback) {
    // console.log('get profile')
    let promise = fetch('/api/cards')
    promise.then(resp=>{
            return resp.json()
        }).then(res=>{
            //console.log('res', res)
            callback(res)
    })
    //console.log(promise);
}

export function addCard(data, callback) {
    // console.log('add task')
    //console.log('data', data)
    fetch('/api/add_card', {
        body: JSON.stringify(data),
        method: 'POST',
    })
        .then(resp => {
            // console.log('add task resp', resp);
            return resp.json();
        })
        .then(res => {
            // console.log('resp json', res)
            callback(res.status == 'ok');
        })
}