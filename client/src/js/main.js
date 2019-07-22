import Vue from 'vue';
import App from '../App.vue';

new Vue(App).$mount('#app');


// const app =  new Vue({
//     el: '#app',
//     data: {
//         articles: '',//all articles
//         article_edit: '', // edit article
//         query: '',//serarch
//         title:'',
//         content: '',
//         article_id: '',
//         dispForm: false,
//         dispListArticles: true,
//         isEdit: false
//     },
//     methods: {
//         getArticles(){
//             axios.get(`${baseUrl}`)
//             .then(({data}) => {
//                 data = data.filter(article => article.title.includes(this.query))
//                 console.log(data)
//                 this.articles = data
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//         },
//         createArticle(){
//             axios.post(`${baseUrl}`,{title: this.title, content: this.content})
//                 .then(({data}) => {
//                     console.log(data)
//                     this.getArticles()
//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })
//             this.title = '';
//             this.content = '';
//         },
//         deleteArticle(id){
//             axios.delete(`${baseUrl}/${id}`)
//                 .then(({data}) => {
//                     console.log(data)
//                     this.getArticles()
//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })
//         },
//         editArticleGet(id) {
//             axios.get(`${baseUrl}/${id}`)
//                 .then(({data}) => {
//                     this.article_edit = data
//                     this.isEdit = true
//                     this.dispForm =true
//                     this.dispListArticles =false
//                     this.title = data.title
//                     this.content = data.content
//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })
//         },
//         editArticlePut() {
//             const {_id, content, title} = this.article_edit
//             console.log(content)
//             axios.put(`${baseUrl}/${_id}`, {content, title})
//                 .then(msg => {
//                     console.log(msg)
//                     this.getArticles()
//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })
//         }
//     },
//     watch: {
//         query(){
//             this.getArticles()
//         }
//     },
//     created: function() {
//         this.getArticles()
//     }
// })