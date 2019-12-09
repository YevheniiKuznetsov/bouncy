<template>
    <div class="head-wrapper">
                    <a class="logo-item" v-on:click="fun()">BOUNCY</a>
                    <ul class="home-page-menu-item">
                        <li><router-link to="/" exact class-active="active"><div class="hello"><div>Hello</div></div></router-link></li>
                        <li><router-link to="/services">Services</router-link></li>
                        <li><router-link to="/portfolio">Portfolio</router-link></li>
                        <li><router-link to="/contacts">Contacts</router-link></li>
                    </ul>
                    <div class="mobile-menu">
                        <div class="menu-icon" v-on:click="show = !show">
                            <div class="menu-line"></div>
                            <div class="menu-line"></div>
                            <div class="menu-line"></div>
                        </div>
                        <transition name="fade">
                        <div class="menu" v-if="show">
                            <ul class="">
                                <li><router-link to="/" exact class-active="active"><div class="hello"><div>Hello</div></div></router-link></li>
                                <li><router-link to="/services">Services</router-link></li>
                                <li><router-link to="/portfolio">Portfolio</router-link></li>
                                <li><router-link to="/contacts">Contacts</router-link></li>
                            </ul>
                        </div>
                        </transition>
                    </div>
                </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>
