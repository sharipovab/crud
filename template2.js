Vue.component('post', {
    template: `
    <div>
    <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-success p-4">
        <a class="navbar-brand text-light fs-3" href="#/posts">Posts</a>
        <br>
        <a class="navbar-brand text-light fs-3" href="#/create">Create posts</a>
    </div>
</div>
<nav class="navbar navbar-success bg-success">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>
    </div>
    `
});