const values= [
    {id: 'scissors', value: '✌️'},
    {id: 'rock', value: '👊'},
    {id: 'paper', value: '🤚'}
]
let i=0

//compare
const compare= (value1, value2)=>{
    const index1= values.findIndex(item=> item.id=== value1)
    const index2= values.findIndex(item=> item.id=== value2)
    if(index1===0 && index2.length-1){
        return 1// scissos> paper, win
    }
    else if(index1=== values.length-1 && index2===0){
        return -1; // lose
    }
    else if(index1 === index2){
        return 0; // equal
    }
    else{
        return index1>index2?1:-1
    }
}
//change
const change= ()=>{
    const computer= document.querySelector('.computer')
    computer.textContent= values[i].value
    computer.dataset.id= values[i].id
    if(i=== values.length-1){
        i=0
    }
    else{
        i++
    }
}
let interval= setInterval(change, 100)// infinity loop
//user click
document.querySelectorAll('.user').forEach(item=>{
    item.addEventListener('click', event=>{
        const alert= document.querySelector('.notice .alert')
        event.target.classList.add('active')
        const value1= event.target.id// player
        const value2= document.querySelector('.computer').dataset.id// computer
        clearInterval(interval)
        const result= compare(value1, value2)
        let meassage
      document.querySelector('.notice').classList.remove('d-none') // when you click item, notification will pop up and ur will end
        if(result===-1){
            meassage='You lose'
            alert.classList.add('alert-dark')
        }
        else if(result===1){
            meassage='You win'
            alert.classList.add('alert-success')
        }
        else{
            meassage='Equal'
            alert.classList.add('alert-warning')
        }
        alert.textContent=meassage
        document.querySelector('.play-again').classList.remove('d-none')
        document.querySelectorAll('.user').forEach(item=>{
            item.style.pointerEvents='none' // disabel other items when i click one item
        })
    })
})

//play again
document.querySelector('.play-again').addEventListener('click', event=>{
    interval= setInterval(change, 100)
    document.querySelectorAll('.user').forEach(item=>{
        item.style.pointerEvents=''
        item.classList.remove('active')
        document.querySelector('.notice .alert').classList.remove('alert-dark', 'alert-warning', 'alert-success')
        document.querySelector('.notice').classList.add('d-none') // hide notification
        document.querySelector('.play-again').classList.add('d-none')
    })
})