<template>
    <div class="portfolio">
        <div class="portfolio-element" v-for="(item, index) of items" v-on:mouseover="func1(index)">
            <div class="element">
                <img :src=item.src>
                <transition name="fade">
                    <div :class="varriable == index ? 'active':'none'">{{ item.title }}</div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                varriable: '',
                items: [
                    {src: '/dist/portfolio1.jpg', title: 'TITLE 1'},
                    {src: '/dist/portfolio2.jpg', title: 'TITLE 2'},  
                    {src: '/dist/portfolio3.jpg', title: 'TITLE 3'},  
                    {src: '/dist/portfolio4.jpg', title: 'TITLE 4'},  
                    {src: '/dist/portfolio5.jpg', title: 'TITLE 5'},  
                    {src: '/dist/portfolio6.jpg', title: 'TITLE 6'},  
                    {src: '/dist/portfolio7.jpg', title: 'TITLE 7'},  
                    {src: '/dist/portfolio8.jpg', title: 'TITLE 8'},  
                    {src: '/dist/portfolio9.jpg', title: 'TITLE 9'},  
                    {src: '/dist/portfolio10.jpg', title: 'TITLE 10'},  
                    {src: '/dist/portfolio11.jpg', title: 'TITLE 11'},  
                    {src: '/dist/portfolio12.jpg', title: 'TITLE 12'} 
                ]
            }
        },
        methods: {
            func1: function(index) {
                console.log(index)
                this.varriable = index
            }
        }
    }
</script>
