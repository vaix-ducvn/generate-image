const btn = document.querySelector('.btn')

btn.onclick = () => {
    fetch('https://api.imaginepro.ai/api/v1/midjourney/imagine', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjM0ODksImVtYWlsIjoiZHVjd2ViZGV2QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZHVjd2ViZGV2QGdtYWlsLmNvbSIsImlhdCI6MTcyNDk4Njc2OX0.ArDWfx1QwX4PDbmRwH5tMGwjhBSbM9t_KFiMuJ4CCLw',
            'Access-Control-Allow-Origin': 'no-cors'
        },
        body: JSON.stringify({
            "prompt": "A little cat running on the grass"
        })
    })
    .then(res => {
        console.log(res);
    })
}