import Vue from 'vue'
import App from './App.vue'

import Hello from './Components/Hello.vue'
import Services from './Components/Services.vue'
import Portfolio from './Components/Portfolio.vue'
import Contacts from './Components/Contacts.vue'
import Form from './Components/Form.vue'
import Readmore from './Components/Readmore.vue'
import NotFoundPage from './Components/NotFoundPage.vue'


import Works from './Components/portfolio_components/Works.vue'
import Branding from './Components/portfolio_components/Branding.vue'
import Html from './Components/portfolio_components/Html.vue'
import Identity from './Components/portfolio_components/Identity.vue'
import Print from './Components/portfolio_components/Print.vue'
import Web from './Components/portfolio_components/Web.vue'
import Wordpress from './Components/portfolio_components/Wordpress.vue'



import './less/fonts.less';
import './less/style.less';

import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter({
    routes: [
        {path: '/', component: Hello},
        {path: '/services', component: Services},
        {path: '/portfolio',
        component: Portfolio,
        children: [
            {
            path: '/',
            component: Works,
            name: 'works'
            
        },
          {
            path: '/branding',
            component: Branding,
            name: 'branding'
            
        },
        {
            path: '/html',
            component: Html,
            name: 'html'
            
        },
            {
            path: '/identity',
            component: Identity,
            name: 'identity'
            
        },
            {
            path: '/print',
            component: Print,
            name: 'print'
        },
            {
            path: '/web',
            component: Web,
            name: 'web'
            
        },
            {
            path: '/wordpress',
            component: Wordpress,
            name: 'wordpress'
            
        }
        ]
        },
        {path: '/contacts', component: Contacts},
        {path: '/form', component: Form},
        {path: '/readmore', component: Readmore},
        {path: '/*', component: NotFoundPage}
    ],
    scrollBehavior (to, from, savedPosition) {
        console.log(to.hash)
        if(to.path == '/readmore' || to.path == '/contacts' || to.path == '/portfolio' || to.path == '/services' || to.path == '/'){
            return { x: 0, y: 0 }
        }
    }
   
})
Vue.component('header-menu', {
    template: `<div class="head-wrapper">
                    <a class="logo-item">BOUNCY</a>
                    <ul class="home-page-menu-item">
                        <li><router-link to="/" exact class-active="active"><div class="hello"><div>Hello</div></div></router-link></li>
                        <li><router-link to="/services">Services</router-link></li>
                        <li><router-link to="/portfolio">Portfolio</router-link></li>
                        <li><router-link to="/contacts">Contacts</router-link></li>
                    </ul>
                </div>`
});

Vue.component('menu-container', {
    template: `<div class="menu-container"><div class="background-menu"><header-menu></header-menu></div></div>`
})
Vue.component('submit-form', Form)
/*
Vue.component('hello-page', Hello)
Vue.component('services-page', Services)
*/
new Vue({
  el: '#app',
    data: {
        
    },
    
  render: h => h(App),
  router: router
})
