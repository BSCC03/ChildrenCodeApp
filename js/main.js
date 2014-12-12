var obj = {
        name: '',
        score: 0
    };

function start()
{
    obj = {
        scoreUp: 'Dhayalan',
        score: 100
    };
    console.log(obj);
}


function getInfo()
{
    obj = JSON.parse(localStorage.getItem('gameStorage'));
    if(obj == null)
    {
        console.log("There is no file here");
    }
    else
    {
        console.log(obj);
    }
}

function addScore()
{
    obj.score++;
    localStorage.setItem('gameStorage', JSON.stringify(obj));
    console.log(obj);
}

function reset()
{
    obj = null;
    localStorage.setItem('gameStorage', JSON.stringify(obj));
}