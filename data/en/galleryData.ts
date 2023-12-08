import type { Project_g } from '~/types/data'

export let galleryData: Project_g[] = [
  {
    type: 'self',
    title: 'Customer Feedback Dashboard',
    description: `Costumer feedback data visualization, with prepocessing.`,
    imgSrc: '/static/images/dashboard/CustomerFeedbackDashboard.png',
    url: 'https://dashboard.shizuka.my.id/?id=9f1628d2-b3b2-4dbe-8c23-993a0d47f6b5&title=Customer+Feedback+Dashboard',
  },
  {
    type: 'self',
    title: 'Trending YouTube Video GB Dashboard',
    description: `This is a trending youtube video overview dashboard, study case Great Britain.`,
    imgSrc: '/static/images/dashboard/youtubeTrendingGB.png',
    url: 'https://dashboard.shizuka.my.id/?id=896a8eac-d199-4d3e-871d-d16a18307556&title=Trending+YouTube+Video+GB+Dashboard',
  },
  {
    type: 'self',
    title: 'COVID 19 Dashboard',
    description: `Spreading of covid in Indonesia.`,
    imgSrc: '/static/images/dashboard/covid19.png',
    url: 'https://dashboard.shizuka.my.id/?id=0049e8c6-460c-4102-b343-19d0a04ef58a&title=Spread+of+Covid+in+Indonesia',
  },
  {
    type: 'colab',
    title: 'Gold Prediction with LSTM and ARIMA',
    description: `This is an experiment of gold prediction using LSTM and ARIMA.`,
    imgSrc: '/static/images/dashboard/goldPrediction.png',
    url: 'https://dashboard.shizuka.my.id/colab/gold-prediction.html?title=Gold+Prediction+with+LSTM+and+ARIMA',
  },
  {
    type: 'colab',
    title: 'Used Car EDA and Price Prediction with RFG And LGBM',
    description: `This notebook is showing EDA of dataset car from craiglist, filling up extreme null value and predict the price with Random forest and LGBM.`,
    imgSrc: '/static/images/dashboard/usedCar.png',
    url: 'https://dashboard.shizuka.my.id/colab/used-car.html?title=Used+Car+EDA+and+Price+Prediction+with+RFG+And+LGBM',
  },
  {
    type: 'colab',
    title: 'LVQ Implementation in Hand-written MNIST Dataset',
    description: `This is an experiment of Hand writing prediction using LVQ, LVQ2 and LVQ2.1.`,
    imgSrc: '/static/images/dashboard/lvqMNIST.png',
    url: 'https://dashboard.shizuka.my.id/colab/hand-lvq-prediction.html?title=LVQ+Implementation+in+Hand-written+MNIST+Dataset',
  },
]
