class Type {

    public toRotate: any;
    public el: any;
    public period: any;
    public loopNum = 0;
    public txt = '';
    public isDeleting = false;

    constructor(el: any, toRotate: any, period: any) {
        this.toRotate = toRotate;
        this.el = el;
        this.period = parseInt(period, 10) || 2000;

        let css = document?.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .display-typewrite { border-right: 0.08em solid #202020}";
        document.head.appendChild(css);
        this.process();
    }

    process() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="display-typewrite">' + this.txt + '</span>';
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => {
            this.process();
        }, delta);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    var elements = document?.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i]?.getAttribute('data-type');
        var period = elements[i]?.getAttribute('data-period');
        if (toRotate) {
            new Type(elements[i], JSON.parse(toRotate), period);
        }
    }
})

// window.onload = () => {
//     console.log("FUCK");

//     var elements = document?.getElementsByClassName('typewrite');
//     for (var i = 0; i < elements.length; i++) {
//         var toRotate = elements[i]?.getAttribute('data-type');
//         var period = elements[i]?.getAttribute('data-period');
//         if (toRotate) {
//             new Type(elements[i], JSON.parse(toRotate), period);
//         }
//     }
// }