<template>
    <div class="col-lg d-flex justify-content-center p-5 landing" v-if="!loginStatus">
        <div class="login-form align-self-center ">
            <form class="p-3" @submit.prevent="login">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                    v-model="loginForm.email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                    v-model="loginForm.password">
                </div>
                <div class="form-group">
                    <p><a href="#" data-target="#signupModal" data-toggle="modal">don't have an account?</a></p>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <!-- register modal -->
        <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Sign Up</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" placeholder="Enter email" v-model="registerForm.email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label>Username</label>
                        <input type="email" class="form-control" placeholder="Enter email" v-model="registerForm.username">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password" v-model="registerForm.password">
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="register">Sign Up</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['loginStatus'],
    data: function() {
        return {
            registerForm: {
                username: '',
                email: '',
                password: ''
            },
            loginForm: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        register() {
            this.$emit('register', this.registerForm)
        },
        login() {
            this.$emit('login', this.loginForm)
        }
    }
}
</script>

<style scoped>
    div.landing {
        background: #DBDBDB;
    }
</style>
