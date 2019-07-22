<template>
  <div>
    <navbar
      :loginStatus="isLogin"
      :dispFormStatus="dispForm"
      :dispArticleStatus="dispListArticles"
      @editDispForm="changeDisplayForm"
      @editDispArticle="changeDisplayArticles"
      @signOut="logout"
    ></navbar>
    <div div class="container-fluid">
      <div class="alert alert-success text-center" role="alert" v-if="succesAlert">
        <p>{{message}}</p>
      </div>
      <div class="alert alert-danger text-center" role="alert" v-if="dangerAlert">
        <p>{{message}}</p>
      </div>
      <div class="row">
        <landing-page :loginStatus="isLogin" @register="register" @login="login"></landing-page>
        <sidebar :loginStatus="isLogin" @search="query = $event"></sidebar>
        <div class="col-lg-9 content" v-if="isLogin">
          <form-article
            :dispFormStatus="dispForm"
            :dispArticleStatus="dispListArticles"
            :editStatus="isEdit"
            :editArticleData="articleEdit"
            :loginStatus="isLogin"
            @createArticle="createArticle"
            @editArticlePut="editArticlePut"
          ></form-article>
          <list-articles
            :dispFormStatus="dispForm"
            :dispArticleStatus="dispListArticles"
            :listArticles="articles"
            :loginStatus="isLogin"
            @deleteArticle="deleteArticle"
            @editArticleGet="editArticleGet"
          ></list-articles>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import FormArticle from "./FormArticle";
import ListArticles from "./ListArticles";
import LandingPage from "./LandingPage";
const baseUrl = "http://localhost:3000";
export default {
  data: function(event) {
    return {
      articles: [], //all articles
      query: "", //search
      articleEdit: {
        title: "",
        content: "",
        article_id: ""
      },
      dispForm: false,
      dispListArticles: true,
      isEdit: false,
      isLogin: localStorage.getItem("token"),
      succesAlert: false,
      dangerAlert: false
    };
  },
  components: {
    navbar: Navbar,
    sidebar: Sidebar,
    "form-article": FormArticle,
    "list-articles": ListArticles,
    "landing-page": LandingPage
  },
  methods: {
    getArticles() {
      let token = localStorage.getItem("token");
      axios
        .get(`${baseUrl}/articles`, {
          headers: { token }
        })
        .then(({ data }) => {
          data = data.filter(article => article.title.includes(this.query));
          data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          // console.log(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt) ))
          this.articles = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    createArticle(data) {
      let token = localStorage.getItem("token");
      axios
        .post(
          `${baseUrl}/articles`,
          {
            title: data.title,
            content: data.content
          },
          {
            headers: { token }
          }
        )
        .then(({ data }) => {
          console.log(data);
          this.succesAlert = true;
          this.message = data.message;
          setTimeout(() => {
            this.succesAlert = false;
          }, 3000);
          this.getArticles();
          this.changeDisplayArticles();
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteArticle(id) {
      let token = localStorage.getItem("token");
      axios
        .delete(`${baseUrl}/articles/${id}`, {
          headers: { token }
        })
        .then(({ data }) => {
          console.log(data);
          this.succesAlert = true;
          this.message = data.message;
          setTimeout(() => {
            this.succesAlert = false;
          }, 3000);
          this.getArticles();
        })
        .catch(err => {
          console.log(err);
        });
    },
    editArticleGet(id) {
      let token = localStorage.getItem("token");
      axios
        .get(`${baseUrl}/articles/${id}`, {
          headers: { token }
        })
        .then(({ data }) => {
          this.isEdit = true;
          this.articleEdit = data;
          this.changeDisplayForm();
        })
        .catch(err => {
          console.log(err);
        });
    },
    editArticlePut(data) {
      const { _id, content, title } = data;
      let token = localStorage.getItem("token");
      axios
        .put(
          `${baseUrl}/articles/${_id}`,
          { content, title },
          {
            headers: { token }
          }
        )
        .then(({ data }) => {
          this.succesAlert = true;
          this.message = data.message;
          setTimeout(() => {
            this.succesAlert = false;
          }, 3000);
          this.getArticles();
          this.changeDisplayArticles();
        })
        .catch(err => {
          console.log(err);
        });
    },
    register(data) {
      axios({
        method: "post",
        url: `${baseUrl}/users/register`,
        data: {
          username: data.username,
          email: data.email,
          password: data.password
        }
      })
        .then(({ data }) => {
            this.succesAlert = true
          this.message = data.message
          setTimeout(() => {
              this.succesAlert = false
          }, 3000);
        })
        .catch(err => {
          this.message = err.response.data.error.split(".").join("\n");
          this.dangerAlert = true;
          setTimeout(() => {
            this.dangerAlert = false;
          }, 4000);
        });
    },
    login(data) {
      axios({
        method: "post",
        url: `${baseUrl}/users/login`,
        data: {
          email: data.email,
          password: data.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.payload));
          this.isLogin = localStorage.getItem("token");
          this.succesAlert = true;
          this.message = "Logged In";
          setTimeout(() => {
            this.succesAlert = false;
          }, 2000);
          this.getArticles();
        })
        .catch(err => {
          console.log(err.response.data.error);
          this.dangerAlert = true;
          this.message = err.response.data.error.split(".").join("\n");
          setTimeout(() => {
            this.dangerAlert = false;
          }, 4000);
        });
    },
    logout(msg) {
      localStorage.clear();
      this.isLogin = localStorage.getItem("token");
      this.message = msg;
      this.succesAlert = true;
      setTimeout(() => {
        this.succesAlert = false;
      }, 2000);
    },
    changeDisplayForm() {
      this.dispForm = true;
      this.dispListArticles = false;
    },
    changeDisplayArticles() {
      this.dispForm = false;
      this.dispListArticles = true;
    }
  },
  watch: {
    query() {
      this.getArticles();
    }
  },
  created: function() {
    if (this.isLogin) {
      this.getArticles();
    }
  }
  // updated: function() {
  //     if (this.isLogin ) {
  //         this.getArticles()
  //     }
  // }
};
</script>

<style>
</style>
