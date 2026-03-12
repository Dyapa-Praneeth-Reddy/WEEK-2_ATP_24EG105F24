// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
//         Simulate OTP sending flow in Node.js:
//         Show “OTP Sent Successfully”
//         Start 10-second countdown
//         Allow resend only after countdown ends
console.log("OTP Sent Successfully")
let countdown=10
let timer=setInterval(()=>{
    console.log(countdown)
    countdown--
    if(countdown<0){
        clearInterval(timer)
        console.log("You can resend OTP now")
    }
},1000)
