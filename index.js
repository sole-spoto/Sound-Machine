window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "c060d3",
        "d3d160",
        "6860d3",
        "60b2d3"
    ];

    const createEffect = () => {
            anime({
                targets: 'visual',
                left: '240px',
                backgroundColor: '#FFF',
                borderRadius: ['0%', '50%'],
                easing: 'easeInOutQuad'
            })
        }

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createEffect();
        });  
    });

    
}); 

