const sounds = ['AKM', 'AUG', 'AWM', 'groza', 'G36C', 'kar-98', 'M16A4', 'mk-47']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

btn.addEventListener('click', () => {

    stopSongs()



    document.getElementById(sound).play()
})



document.getElementById('buttons').
appendChild(btn)

})


function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;


    })
}