export default class Navbar {

  private navbar: any;
  private toggler: any;
  private overlay: any;

  constructor() {
    this.navbar = document.querySelector('.mobile-navbar-list');
    this.toggler = document.querySelector('.mobile-navbar-toggler');
    this.overlay = document.querySelector('.overlay');


    this.open();
    this.close();
  }


  private open() {
    this.toggler.addEventListener('click', () => {
      document.body.classList.add('overlay-active');
      this.navbar.classList.add('mobile-navbar-list-active');
    });
  }


  private close() {
    this.overlay.addEventListener('click', () => {
      this.navbar.classList.contains('mobile-navbar-list-active') ? document.body.classList.remove('overlay-active') : null;
      this.navbar.classList.remove('mobile-navbar-list-active');
    });
  }
}