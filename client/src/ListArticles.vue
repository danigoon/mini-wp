<template>
    <div id="card-list-articles" v-if="dispArticleStatus && loginStatus">
        <div class="card border-dark mt-3 d-flex flex-row" v-for="article in listArticles" :key="article.id">
            <div class="col-lg card-body text-dark">
                <h5 class="card-title">{{article.title}}</h5>
                <p class="card-text">{{article.content}}</p>
            </div>
            <div class="card-btn d-flex flex-column justify-content-between p-1">
                <button class="btn btn-sm btn-danger" @click.prevent="deleteArticle(article._id)"><i class="material-icons align-self-center">delete</i></button>
                <button class="btn btn-sm btn-secondary" @click.prevent="editArticleGet(article._id)"><i class="material-icons">edit</i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['dispArticleStatus', 'listArticles', 'loginStatus'],
    data: function() {
        return {

        }
    },
    methods: {
        deleteArticle(id) {
            this.$emit('deleteArticle', id)
        },
        editArticleGet(id){
            this.$emit('editArticleGet', id)
        }
    }
}
</script>

<style>

</style>
