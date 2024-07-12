import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1.25rem',
        md: '2rem',
        lg: '1.5rem',
      },
    },
    extend: {
      spacing: {
        '26': '5.8rem',
      },
      colors: {
        primary: '#FF5757',
        'gray-900': '#010A05',
      },
      content: {
        iconBeforeLg: 'url("/icons/before-lg.svg")',
        iconBeforeMd: 'url("/icons/before-md.svg")',
        iconBeforeSm: 'url("/icons/before-sm.svg")',
        iconAfterLg: 'url("/icons/before-lg.svg")',
        iconAfterMd: 'url("/icons/before-md.svg")',
        iconAfterSm: 'url("/icons/before-sm.svg")',
      },
      backgroundImage: {
        heroMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/hero/hero_bg_mob.jpg") 1x, url("/hero/hero_bg_mob@2x.jpg") 2x)',
        heroTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/hero/hero_bg_tab.jpg") 1x, url("/hero/hero_bg_tab@2x.jpg") 2x)',
        heroDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/hero/hero_bg_desk.jpg") 1x, url("/hero/hero_bg_desk@2x.jpg") 2x)',

        aboutMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/about/about_bg_mob.jpg") 1x, url("/about/about_bg_mob@2x.jpg") 2x)',
        aboutTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/about/about_bg_tab.jpg") 1x, url("/about/about_bg_tab@2x.jpg") 2x)',
        aboutDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/about/about_bg_desk.jpg") 1x, url("/about/about_bg_desk@2x.jpg") 2x)',

        offersATVsMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_ATVs_mob.jpg") 1x, url("/offers/bg/offers_bg_ATVs_mob@2x.jpg") 2x)',
        offersATVsTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_ATVs_tab.jpg") 1x, url("/offers/bg/offers_bg_ATVs_tab@2x.jpg") 2x)',
        offersATVsDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_ATVs_desk.jpg") 1x, url("/offers/bg/offers_bg_ATVs_desk@2x.jpg") 2x)',
        offersRockClimbingMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_rock-climbing_mob.jpg") 1x, url("/offers/bg/offers_bg_rock-climbing_mob.jpg@2x.jpg") 2x)',
        offersRockClimbingTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_rock-climbing_tab.jpg") 1x, url("/offers/bg/offers_bg_rock-climbing_tab.jpg@2x.jpg") 2x)',
        offersRockClimbingDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_rock-climbing_desk.jpg") 1x, url("/offers/bg/offers_bg_rock-climbing_desk.jpg@2x.jpg") 2x)',
        offersBallooningMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_ballooning_mob.jpg") 1x, url("/offers/bg/offers_bg_ballooning_mob.jpg@2x.jpg") 2x)',
        offersBallooningTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_ballooning_tab.jpg") 1x, url("/offers/bg/offers_bg_ballooning_tab.jpg@2x.jpg") 2x)',
        offersBallooningDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_ballooning_desk.jpg") 1x, url("/offers/bg/offers_bg_ballooning_desk.jpg@2x.jpg") 2x)',
        offersSkydivingMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_skydiving_mob.jpg") 1x, url("/offers/bg/offers_bg_skydiving_mob.jpg@2x.jpg") 2x)',
        offersSkydivingTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_skydiving_tab.jpg") 1x, url("/offers/bg/offers_bg_skydiving_tab.jpg@2x.jpg") 2x)',
        offersSkydivingDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_skydiving_desk.jpg") 1x, url("/offers/bg/offers_bg_skydiving_desk.jpg@2x.jpg") 2x)',
        offersRaftingMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_rafting_mob.jpg") 1x, url("/offers/bg/offers_bg_rafting_mob.jpg@2x.jpg") 2x)',
        offersRaftingTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_rafting_tab.jpg") 1x, url("/offers/bg/offers_bg_rafting_tab.jpg@2x.jpg") 2x)',
        offersRaftingDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/offers/bg/offers_bg_rafting_desk.jpg") 1x, url("/offers/bg/offers_bg_rafting_desk.jpg@2x.jpg") 2x)',

        careerMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.75), rgba(2, 15, 8, 0.75)), image-set(url("/career/career_bg_mob.jpg") 1x, url("/career/career_bg_mob@2x.jpg") 2x)',
        careerTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.75), rgba(2, 15, 8, 0.75)), image-set(url("/career/career_bg_tab.jpg") 1x, url("/career/career_bg_tab@2x.jpg") 2x)',
        careerDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.75), rgba(2, 15, 8, 0.75)), image-set(url("/career/career_bg_desk.jpg") 1x, url("/career/career_bg_desk@2x.jpg") 2x)',

        galleryMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.85), rgba(2, 15, 8, 0.85)), image-set(url("/gallery/bg/gallery_bg_mob.jpg") 1x, url("/gallery/bg/gallery_bg_mob@2x.jpg") 2x)',
        galleryTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.85), rgba(2, 15, 8, 0.85)), image-set(url("/gallery/bg/gallery_bg_tab.jpg") 1x, url("/gallery/bg/gallery_bg_tab@2x.jpg") 2x)',
        galleryDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.85), rgba(2, 15, 8, 0.85)), image-set(url("/gallery/bg/gallery_bg_desk.jpg") 1x, url("/gallery/bg/gallery_bg_desk@2x.jpg") 2x)',

        contactMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.75), rgba(2, 15, 8, 0.75)), image-set(url("/contactUs/contact_bg_mob.jpg") 1x, url("/contactUs/contact_bg_mob@2x.jpg") 2x)',
        contactTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.75), rgba(2, 15, 8, 0.75)), image-set(url("/contactUs/contact_bg_tab.jpg") 1x, url("/contactUs/contact_bg_tab@2x.jpg") 2x)',
        contactDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.75), rgba(2, 15, 8, 0.75)), image-set(url("/contactUs/contact_bg_desk.jpg") 1x, url("/contactUs/contact_bg_desk@2x.jpg") 2x)',
      },

      variants: {
        filter: ['responsive', 'hover', 'focus'],
      },
    },
  },
  plugins: [],
};
export default config;
