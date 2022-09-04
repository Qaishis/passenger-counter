const increment = document.getElementById('increment-btn')
const save = document.getElementById('save-btn')
const countview = document.getElementById('count')
const pEntries= document.getElementById('save')


let count = 0

increment.addEventListener('click',button=> {
    count += 1
    countview.textContent=count
})

save.addEventListener('click', button => {
    let counstr = count+ ' - '
    pEntries.textContent += counstr
    countview.textContent = 0
    count=0
    
 })