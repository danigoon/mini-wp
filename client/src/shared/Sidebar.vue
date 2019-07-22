<template>
    <div class="col-lg-3 border fixed-top sidebar" v-if="loginStatus">
        <div class="d-flex flex-column m-auto">
            <div class="d-flex flex-column">
                <div class="p-2 d-flex align-items-center">
                    <input type="text" name="" id="search-bar" v-model="query" placeholder="Search..." @keyup="searchArticle"><i id="search-icon" class="material-icons">search</i>
                </div>
                <div class="p-2 d-flex align-items-center"><i class="material-icons">check_circle_outline</i><a href="">followed site</a></div>
                <div class="p-2 d-flex align-items-center"><i class="material-icons">chat</i><a href="">conversations</a></div>
                <div class="p-2 d-flex align-items-center"><i class="material-icons">star_border</i><a href="#">my favorite</a></div>
                <div class="p-2 d-flex align-items-center"><i class="material-icons">label</i><a href="">tags</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['loginStatus'],
    data: function () {
        return {
            query: ''
        }
    },
    methods: {
        searchArticle(){
            this.$emit('search', this.query)
        }
    },
}
</script>

<style>

</style>
