export function SetTimer(bucketID) {

    const bucket = document.querySelector(bucketID)
    // bucket.presentDefault()
    const set = document.querySelector(`${bucketID} > .set`)
    const reset = document.querySelector(`${bucketID} > .reset`)
    const bucket_timer = document.querySelector(`${bucketID} > .timer`)

    set.addEventListener("click", (e) => {
        // disable any further pointer events
        e.preventDefault()
        set.style.pointerEvents = "none"

        let hh = 0
        let mm = 0
        let ss = 0
        // timer clock
        const timer = setInterval(() => {
            ss = ss + 1
            if (ss === 60) {
                ss = 0
                mm = mm + 1
                if (mm === 60) {
                    mm = 0
                    hh = hh + 1
                }
            }

            bucket_timer.innerHTML = `${hh < 10 ? "0" + hh : hh}:${mm < 10 ? "0" + mm : mm}:${ss < 10 ? "0" + ss : ss}`
        }, 1000)
        
        reset.addEventListener("click", () => {
            clearInterval(timer)
            hh = mm = ss = 0
            bucket_timer.innerHTML = `${hh < 10 ? "0" + hh : hh}:${mm < 10 ? "0" + mm : mm}:${ss < 10 ? "0" + ss : ss}`
            set.style.pointerEvents = "unset"
        })
    })
}

export function createBucket(bucketName) {
    const bucket = document.createElement("div")
    bucket.setAttribute("id", bucketName)
    bucket.classList.add("bucket")

    bucket.innerHTML = `<b class="title">${bucketName}</b>
<div class="timer">00:00:00</div>
<button class="set">Set</button>
<button class="reset">Reset</button>
<div class="log"><button>Log</button></div>`

return bucket
}
