<template>
    <div class="portfolio">
        <div  v-for="item in items"><img v-bind:src="item.src" alt="eff"/></div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                items: [
                    {src: '/dist/portfolio2.jpg'},
                    {src: '/dist/portfolio1.jpg'},
                    {src: '/dist/portfolio1.jpg'},
                    {src: '/dist/portfolio1.jpg'},
                    {src: '/dist/portfolio1.jpg'},
                    {src: '/dist/portfolio1.jpg'},
                    {src: '/dist/portfolio1.jpg'},
                    {src: '/dist/portfolio1.jpg'},
                    {src: '/dist/portfolio1.jpg'},
                    {src: '/dist/portfolio1.jpg'},
                    {src: '/dist/portfolio1.jpg'},
                    {src: '/dist/portfolio1.jpg'}  
                ]
            }
        }
    }
</script>
