export default class Introduction {

  private intro: any;
  private introBtn: any;

  constructor() {
    this.intro = document.querySelector('.introduction');
    this.introBtn = document.querySelector('.introduction-button');

    this.load();
    this.close();
  }

  load() {
    let cookie = this.getCookie('fmt-introduction');
    console.log(cookie == '', cookie)
    if (cookie == '') {
      document.body.style.overflow = 'hidden';
      this.intro.classList.add('introduction-active');
    }
  }

  close() {
    this.introBtn.addEventListener('click', () => {
      this.setCookie('fmt-introduction', true, 365);
      document.body.style.overflow = 'auto';
      this.intro.classList.remove('introduction-active');
    });
  }

  getCookie(cname: any) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setCookie(cname: any, cvalue: any, exdays: any) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}