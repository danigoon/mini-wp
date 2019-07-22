<template>
    <div>
        <div class="mt-2" id="form-article" v-if="dispFormStatus && loginStatus">
            <!-- form create article -->
            <form @submit.prevent="createArticle" v-if="!editStatus">
                <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input v-model="form.title" type="text" class="form-control" id="article-title" placeholder="title">
                </div>
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Content</label>
                <editor api-key="3g2jzmsiwmt5x5litq9yza46vpmudju2x5w5irflv9os905d" :init="{plugins: 'wordcount'}" v-model="form.content"></editor>
                </div>
                <div class="form-group">
                    <button class="btn btn-md btn-block btn-primary" type="submit">Submit</button>
                </div>
            </form>
            <!-- form edit article -->
            <form @submit.prevent="editArticlePut" v-else-if="editStatus && loginStatus">
                <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input v-model="editArticleData.title" type="text" class="form-control" id="article-title" placeholder="title">
                </div>
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Content</label>
                <editor api-key="3g2jzmsiwmt5x5litq9yza46vpmudju2x5w5irflv9os905d" :init="{plugins: 'wordcount'}" v-model="editArticleData.content"></editor>
                </div>
                <div class="form-group">
                    <button class="btn btn-md btn-block btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
    props: ['dispFormStatus', 'editStatus', 'editArticleData', 'loginStatus'],
    data: function () {
        return {
            form: {
                title:"",
                content:"",
            }
        }
    },
    methods: {
        createArticle() {
            this.$emit('createArticle',this.form)
        },
        editArticlePut() {
            this.$emit('editArticlePut', this.editArticleData)
        }
    },
    components: {
        "editor": Editor
    }
}
</script>

<style>

</style>
