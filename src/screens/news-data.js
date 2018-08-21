// @flow
type NewsItem = {
  key: String,
  date: String,
  body: String,
  cta?: {
    title: String,
    link: String
  }
}

const news: [NewsItem] = [{
  key: '0',
  date: '15.02.2018',
  body: 'Who invented #Bitcoin ? There\'s a lot more to the question than you might think. http://bit.ly/2GxAUSV',
}, {
  key: '1',
  date: '11.02.2018',
  body: 'Just as terms changed and took on new meaning as the internet evolved, we may see similar progressions in the crypto world. Either way, staying informed is key.\n\nDo you know the difference between #blockchain and #DLT? http://bit.ly/2ETIxpv',
}, {
  key: '2',
  date: '08.02.2018',
  body: 'Der Aktionär TV met up with @social_nakamoto founder and Advanced Blockchain AG CVO, Robert A. Küfner, to discuss the evolution of DLT and the @iotatoken Project. @deraktionaertv #Blockchain #IOTA #Tangle',
  cta: {
    title: 'Here\'s the full interview:',
    link: 'https://t.co/BMVOs6cR7X',
  },
}, {
  key: '3',
  date: '27.11.2017',
  body: 'The first blog in the @social_nakamoto Knowledge Base series sheds light on the evolution of the ledger, and the natural next step - #DLT. #Blockchain #Tangle',
  cta: {
    title: 'What is DLT?\' is available here:',
    link: 'https://bitly.com/',
  },
}];

export default news;
