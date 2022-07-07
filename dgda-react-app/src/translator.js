class Translator {
    constructor(lang) { 
      this.lang = this.isEmpty(lang) ? 'en' : lang;               // NOTE: size and brand are arguments
      this.en = {
        'HOME': 'MAIN PAGE',
        'BACK': 'Back',
        'MODEL': 'MODEL',
        'LIGHTS': 'LIGHTS',
        'VIDEO_WALL': 'VIDEO WALLS'
      };
      this.ar = {
        'HOME': 'الصفحة الرئيسية',
        'BACK': 'خلف',
        'MODEL': 'المجسم',
        'LIGHTS': 'الإضاءات',
        'VIDEO_WALL': 'الشاشات الجدارية'
      }
    }
  
  
    isEmpty(str) {
      return (!str || str.length === 0 );
    }
    T(txt) {
      if(this.lang === 'en') {
        return this.en[txt];
      }
      if(this.lang === 'ar') {
        return this.ar[txt];
      }
    }
  }
  export default Translator