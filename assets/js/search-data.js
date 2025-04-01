// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-webridge-accpeted-by-sigmod-24",
          title: 'WeBridge accpeted by SIGMOD’24.',
          description: "",
          section: "News",},{id: "news-research-intern-at-alibaba-cloud",
          title: 'Research Intern at Alibaba Cloud.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-member-of-sigmod-24-ari-committee",
          title: 'I will serve as a member of SIGMOD’24 ARI Committee.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-member-of-mlsys-2025-ae-committee",
          title: 'I will serve as a member of MLSys 2025 AE Committee.',
          description: "",
          section: "News",},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=bEtLSugAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
