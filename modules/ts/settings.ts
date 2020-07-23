export class settings {

  private settingsELM: any;
  private settingsOPN: any;
  private settingsCLS: any;
  private theme: any;
  private navbar: any;
  private navbarCNG: any;

  private settings: { themes: string, navbar: string } = {
    themes: 'theme-light',
    navbar: 'navbar-not-fixed'
  }

  constructor() {
    this.settingsELM = document.querySelector('.settings-content');
    this.settingsOPN = document.querySelector('.open-settings');
    this.settingsCLS = document.querySelector('.settings-close');
    this.theme = document.querySelectorAll('.change-theme');
    this.navbar = document.querySelector('.navbar');
    this.navbarCNG = document.querySelector('.change-navbar');

    this.load();
    this.open();
    this.close();
    this.process();
  }

  private open() {
    this.settingsOPN?.addEventListener('click', () => {
      document.body.classList.add('overlay-active');
      this.settingsELM.classList.add("settings-content-active");
    });
  }


  private close() {
    this.settingsCLS?.addEventListener('click', () => {
      document.body.classList.remove('overlay-active');
      this.settingsELM.classList.remove("settings-content-active");
    });
  }


  private load() {

    //check the localStorage if exist the settings
    let getLocalSettings = localStorage.getItem('fmt-settings');
    if (getLocalSettings) {

      let getSettingsOBJ = JSON.parse(getLocalSettings);
      this.settings = getSettingsOBJ;
    }


    //set the settings when page load
    let

      getTheme = this.settings.themes,
      getNavbar = this.settings.navbar;

    document.body.classList.add(getTheme, getNavbar);

    //set the settings-sidebar value
    this.theme.forEach((el: any) => {
      if ('theme-' + el.getAttribute('data-theme') == getTheme)
        el.classList.add('active');
    });

    this.navbarCNG.checked = getNavbar === 'navbar-fixed';

  }

  private process() {
    this.theme.forEach((elm: HTMLElement) => {
      elm.addEventListener('click', () => {

        this.theme.forEach((el: any) => {
          el.classList.remove('active');
        });

        elm.classList.add('active');

        let getThemeName = 'theme-' + elm.getAttribute('data-theme');
        switch (getThemeName) {
          case 'theme-light':
            document.body.classList.remove('theme-dark');
            document.body.classList.add('theme-light');
            break;

          case 'theme-dark':
            document.body.classList.remove('theme-light');
            document.body.classList.add('theme-dark');
            break;
        }

        this.settings.themes = getThemeName;
        localStorage.setItem("fmt-settings", JSON.stringify(this.settings));
      });
    });

    this.navbarCNG.addEventListener('change', () => {
      this.settings.navbar === 'navbar-fixed' ? this.settings.navbar = 'navbar-not-fixed' : this.settings.navbar = 'navbar-fixed';
      localStorage.setItem("fmt-settings", JSON.stringify(this.settings));
      document.body.classList.toggle('navbar-fixed');
    });

  }

}