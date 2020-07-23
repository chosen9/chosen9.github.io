export class Header {

    private navbar: any = document.querySelector('.navbar');
    private mNavbar: any = document.querySelector('.mobile-navbar');

    public constructor() {
        this.headerSticky();
    }


    public headerSticky() {
        let sticky: any = this.navbar?.scrollTop;
        let mobileSticky: any = this.mNavbar?.scrollTop;

        window.onscroll = () => {
            window.pageYOffset > (sticky + 80) ? this.navbar?.classList.add('navbar-appearance-active') : this.navbar?.classList.remove('navbar-appearance-active');

            window.pageYOffset > (mobileSticky + 150) ?
                this.mNavbar?.classList.add('mobile-navbar-appearance-active') : this.mNavbar?.classList.remove('mobile-navbar-appearance-active');
        }
    }
}