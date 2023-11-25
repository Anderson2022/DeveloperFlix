const channelData = {
  kind: 'youtube#channel',
  etag: 'rNrI9K7rAdzxtttYX8Hukr-IhRN0',
  id: 'UCefqHZGWIr5I0Wm1KtC9SGQ',
  snippet: {
    country: 'BR',
    customUrl: '@futurodevjohn',
    description: 'Nesse canal vou postar minha evolução nos cursos de desenvolvimento web (HTML, CSS, JScript, Python...)',
    localized: {
      title: 'Futuro Dev - John ',
      description: 'Nesse canal vou postar minha evolução nos cursos de desenvolvimento web (HTML, CSS, JScript, Python...)'
    },
    publishedAt: '2021-10-01T04:22:41.445587Z',
    thumbnails: {
      default: {
        url:"https://yt3.ggpht.com/-tCx3UWPRX5mdYiDZj-eOPkrFqux-g6A28OQpz0Okh_8Feh34XLeR_I2jMDVR1JXgtLnp-JF=s88-c-k-c0x00ffffff-no-rj"
      },
   
    },
    title: 'Futuro Dev - John '
  },
  
  statistics: {
    hiddenSubscriberCount: false,
    subscriberCount: '44100',
    videoCount: '145',
    viewCount: '1584121'
  }
};

const jsonString = JSON.stringify(channelData, null, 2); // O terceiro argumento (2) é para a indentação de 2 espaços

console.log(jsonString);
