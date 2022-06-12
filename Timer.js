export default class Timer {
    constructor(root, initVal) {
        root.innerHTML = Timer.getHTML(initVal);

        this.el = {
            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
            reset: root.querySelector(".timer__btn--reset")
        };

        this.interval = null;
        this.remainingSeconds = initVal * 60;

        

        this.el.control.addEventListener('click', () => {
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        })

        this.el.reset.addEventListener('click', () => {
            const inputMinutes = prompt("How many minutes do you want to stay focused?");
            if (inputMinutes == null) {
                return;
            } else if (inputMinutes < 60) {
                console.log(inputMinutes)
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            } 
        })
    }

    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    updateInterfaceControls() {
        if (this.interval === null) {
            this.el.control.innerHTML = `<span class="material-symbols-outlined">play_circle</span>`;
            this.el.control.classList.add("timer__btn--start");
            this.el.control.classList.remove("timer__btn--stop");
        } else {
            this.el.control.innerHTML = `<span class="material-symbols-outlined">pause</span>`;
            this.el.control.classList.add("timer__btn--stop");
            this.el.control.classList.remove("timer__btn--start");
        }
    }

    start() {
        if (this.remainingSeconds === 0) return;
        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();
            if (this.remainingSeconds === 0) {
                this.stop();
            }
        }, 1000);
        this.updateInterfaceControls();
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.updateInterfaceControls();
    }

    static getHTML(initVal) {
        return `
            <div>
            <span class="timer__part timer__part--minutes">${initVal.toString().padStart(2, "0")}</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--seconds">00</span>
            </div>              
            <button type="button" class="timer__btn timer__btn--control timer__btn--start">
            <span class="material-symbols-outlined">play_circle</span>
            </button>
            <button type="button" class="timer__btn timer__btn--reset">
                <span class="material-symbols-outlined">
                    alarm_off
                </span>
            </button>
        `
    }
}