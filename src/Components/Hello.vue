<template>
  <div>
    <header>
        <div class="image-header">
            <div class="inside">
                <header-menu></header-menu>
                <div class="header-content">
                    <div>WE ARE CODE CAFE</div>
                    <span>At vero eos accusamus et iusto odio dignissimos ducimus qui blanditiis praesentioum voluptatum</span>
                </div>
                <div class="header-button" v-on:click="downArrow"><img src="../assets/images/button.png" alt=""/></div>
            </div>
        </div>
    </header>
    <div ref="hello" class="home-page-content">
        <div class="is-bouncy">
            <h3>THIS IS BOUNCY</h3>
            <div class="content-text">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </div>
            <router-link to="/readmore"><div class="read-more-button"><div>Read More</div></div></router-link>
            <img src="../assets/images/ipad.png" alt=""/>
            </div>
            <div class="bouncy-details">
                <H3>DETAILS ABOUT BOUNCY</H3>
                <div class="som-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                <div class="content-buttons-wrapper">
                    <div class="content-button"><img src="../assets/images/heartbutton.png" alt=""/></div>
                    <div class="content-button"><img src="../assets/images/mousebutton.png" alt=""/></div>
                    <div class="content-button"><img src="../assets/images/ligthbutton.png" alt=""/></div>
                </div>
                <div class="text-wrapper">
                    <h4>Creative Ideas</h4>
                    <div class="left-text">
                        At <span>vero</span> eos et accusamus et iusto odio dignissimos ducimus qui blanditiis     praesentium voluptatum deleniti atque corrupti quos dolores 
                    </div>
                    <div class="right-text">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias <span>excepturi</span> sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r
                    </div>
                </div>
                
            </div>
            <div class="featured-prpgects">
                    <h3>FEATURED PROJECTS</h3>
                    <div>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
            </div>
            <div class="images">
                <div><img src="../assets/images/envato.jpg" alt=""/></div>
                <div><img src="../assets/images/whiskey.jpg" alt=""/></div>
                <div><img src="../assets/images/boock.jpg" alt=""/></div>
            </div>
            <div class="submit-block">
                <div class="text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</div>
                <router-link to="/contacts"><div class="button"><div>Submit Now</div></div></router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            downArrow: function() {
                let top = this.$refs['hello'].offsetTop - 50;
                window.scrollTo({
                    top: top,
                    behavior: "smooth"
                })
            }
  
        }
    }
</script>
