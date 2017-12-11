
<template>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/card">Card</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
            }
        },
        mounted: function() {
        },
        beforeDestroy: function() {
        },
        methods: {
        }
    }
</script>