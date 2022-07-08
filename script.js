
let time = document.getElementById('time');

let screen_time_t = 0
   ,screen_time_s = 0
   ,screen_time_f = 0;


function timer(){screen_time_f = screen_time_f+1
                 if(screen_time_f ==99){
                    screen_time_s = screen_time_s+1;
                    screen_time_f = 0;
                 }
                 if(screen_time_s ==60){
                    screen_time_t = screen_time_t+1;
                    screen_time_f = s;
                 }
                 time.innerHTML = `${screen_time_t}:${screen_time_s}:${screen_time_f}`
                }
    



const interlvaId = setInterval(timer,10);
let touth_count = 1
let touth = window.addEventListener('touchend',()=>{

if(touth_count == 2){
location.reload()
        
touth_count = 1
}
if(touth_count == 1){
    clearInterval(interlvaId)
touth_count = 2
}


})


