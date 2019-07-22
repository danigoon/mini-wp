<template>
    <nav class="fixed-top">
        <div class="d-flex bg-dark justify-content-between fixed-top">
            <div class="d-flex bg-dark">
                <div class="d-flex flex-row align-items-center p-2">
                    <img width="28" height="28" class="rounded-circle"  src="http://pngimg.com/uploads/wordpress/wordpress_PNG26.png" alt="shortpress-logo">
                    <div class="d-flex align-items-center title">
                        <h4>Shortpress</h4>
                    </div>
                </div>
            </div>
            <div class="d-flex bg-dark">
                <div class="d-flex flex-row align-items-center p-2">
                    <button id="btn-create-article" class="btn btn-primary btn-sm" @click.prevent="editDisplayForm" v-if="loginStatus"><i class="btn material-icons">create</i></button>
                </div>
                <div class="d-flex flex-row align-items-center p-2">
                    <button id="btn-show-articles" class="btn btn-light btn-sm" @click.prevent="editDisplayArticles" v-if="loginStatus">My Articles</button>
                </div>
                <div class="d-flex flex-row align-items-center p-2">
                    <div class="dropdown" v-if="loginStatus">
                        <a href="#" class="dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click.prevent="signOut">
                            <img class="rounded-circle" src="https://static.vecteezy.com/system/resources/previews/000/149/808/non_2x/portrait-of-a-beautiful-asian-woman-vector.jpg" width="28" height="28"  alt="">
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Log Out</a>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row align-items-center p-2">
                    <a href="#" ><i class="material-icons">notifications_active</i></a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['dispFormStatus', 'dispArticleStatus', 'loginStatus'],
    methods: {
        editDisplayForm() {
            this.$emit('editDispForm')
        },
        editDisplayArticles() {
            this.$emit('editDispArticle')
        },
        signOut() {
            let message = 'Logged Out.'
            this.$emit('signOut', message)
        }

    }
}
</script>

<style>

</style>
