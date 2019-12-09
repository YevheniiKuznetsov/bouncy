<template>
    <div class="portfolio-wrapper">
        <div class="menu">
            <menu-container></menu-container>
        </div>
        <h3>THE PORTFOLIO</h3>
        <div class="description-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
        <div class="portfolio-navigation">
            <ul>
                <li><router-link :to="{name: 'works'}">All Works</router-link></li>
                <li><router-link :to="{name: 'print'}">Print</router-link></li>
                <li><router-link :to="{name: 'identity'}">Identity</router-link></li>
                <li><router-link :to="{name: 'branding'}">Branding</router-link></li>
                <li><router-link :to="{name: 'web'}">Web</router-link></li>
                <li><router-link :to="{name: 'html'}">HTML</router-link></li>
                <li><router-link :to="{name: 'wordpress'}">Wordpress</router-link></li>
            </ul>
        </div>
        <div class="portfolio-mobile-navigation">
            <div class="menu-icon"  v-on:click="show = !show">
                <div class="menu-line"></div>
                <div class="menu-line"></div>
                <div class="menu-line"></div>
            </div>
            <div class="mobile-menu" v-if="show">
                <ul>
                <li><router-link :to="{name: 'works'}">All Works</router-link></li>
                <li><router-link :to="{name: 'print'}">Print</router-link></li>
                <li><router-link :to="{name: 'identity'}">Identity</router-link></li>
                <li><router-link :to="{name: 'branding'}">Branding</router-link></li>
                <li><router-link :to="{name: 'web'}">Web</router-link></li>
                <li><router-link :to="{name: 'html'}">HTML</router-link></li>
                <li><router-link :to="{name: 'wordpress'}">Wordpress</router-link></li>
            </ul>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
            <div class="start-progect-container">
                <div class="text">At vero eos et <span>accusamus</span> et iusto odio dignissimos <span>ducimus</span> qui blanditiis</div>
                <router-link to="/contacts"><div class="button"><div>Start Progect</div></div></router-link>
            </div>
        </div>
        <div class="contact-us-block">
            <div class="text">Already Loved Us? Let's Talk!</div>
            <div class="contact-us-button">Contact Us</div>
        </div>
    </div>
</template>
<script>
    export default {
        data (){
            return {
                show: false
            }
        },
        methods: {
            
            }
        }    
</script>
