import Vue from 'vue';
import Router from 'vue-router';

import About from '@/components/Frontstage/About';
import Composition from '@/components/Frontstage/Composition';
import Activity from '@/components/Frontstage/Activity';
import Contact from '@/components/Frontstage/Contact';







Vue.use(Router)


export default new Router({
  routes: [


    {
      name: '關於我們',  //元件呈現的名稱
      path: '/',  //對應的虛擬路徑
      component: About,  //對應的元件
    },

    {
      name: '作品欣賞',  //元件呈現的名稱
      path: '/composition',  //對應的虛擬路徑
      component: Composition,  //對應的元件
    },

    {
      name: '活動快訊',  //元件呈現的名稱
      path: '/activity',  //對應的虛擬路徑
      component: Activity,  //對應的元件
    },

    {
      name: '客服信箱',  //元件呈現的名稱
      path: '/contact',  //對應的虛擬路徑
      component: Contact,  //對應的元件
    },

    {
      path: '/wubaisong001',
      beforeEnter() {location.href = 'https://www.youtube.com/watch?v=7jYDYon4sGQ'}
    },
    
    {
      path: '/wubaisong002',
      beforeEnter() {location.href = 'https://www.youtube.com/watch?v=gPpZJlE0Ca8'}
    },

    {
      path: '/wubaisong003',
      beforeEnter() {location.href = 'https://www.youtube.com/watch?v=ObSPLQ-1fJI'}
    },

    {
      path: '/wubaisong004',
      beforeEnter() {location.href = 'https://www.youtube.com/watch?v=YRMg3smsZTo'}
    },

    {
      path: '/wubaisong005',
      beforeEnter() {location.href = 'https://www.youtube.com/watch?v=jPu3u8kfxCw'}
    },

    {
      path: '/wubaisong006',
      beforeEnter() {location.href = 'https://www.youtube.com/watch?v=JJhlRIN90YY'}
    },

    {
      path: '/wubaisong007',
      beforeEnter() {location.href = 'https://www.youtube.com/watch?v=GUIMi_WoSc4'}
    },

    {
      path: '/wubaisong008',
      beforeEnter() {location.href = 'https://www.youtube.com/watch?v=lGF2QrDLXCM'}
    },

    {
      path: '/wubaisong009',
      beforeEnter() {location.href = 'https://www.youtube.com/watch?v=yGoHsTV6QrE'}
    },

    {
      path: '/wubaisong010',
      beforeEnter() {location.href = 'https://www.youtube.com/watch?v=CgAJAmP14kQ'}
    },

    {
      path: '/wubaiopera',
      beforeEnter() {location.href = 'https://tixcraft.com/activity/detail/22_WuBaiOPR'}
    },

  ],  
});
