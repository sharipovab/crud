var Posts = {
    template: `     
    <div class="d-flex flex-wrap align-items-center justify-content-center gap-3 mt-3">
        <div class="card border border-0 shadow-lg bg-body rounded" style="width: 18rem;" v-for="post of posts">
            <img :src="'https://getty.uz/'+post.image" class="card-img-top" style="width: 100%; height: 170px">
            <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <p class="card-text">{{post.info}}</p>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <a type="button" class="btn btn-success" :href="'#/edit/'+post.id">Edit <img src="pencil.svg" alt="" class="mb-1"></a>
                    <button type="button" class="btn btn-danger" @click="del_post(post.id)">Delete <img src="trash.svg" alt="" class="mb-1"></button>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            posts: [],
        }
    },
    mounted() {
        fetch('https://getty.uz/get-posts') 
            .then(response => response.json())
            .then(result => {
                console.log(this.posts);
                this.posts = result.data;
                console.log(this.posts);
            })
    },
    methods: {
        del_post(id) {
          
            if(confirm('Are you sure?')){
                var form = new FormData()
            form.append('id', id)
                
            fetch('https://getty.uz/delete-post',{
                method: 'post',
                body: form 
            })
            .then(response => response.json())
            .then(result =>{
                 console.log(result); 
                 var data3 = result.data;                
                
                 alert(data3);
            })
            }          
        }
    }
};

{/* <div class="cardcont">
<div class="card" v-for="post of posts">
<img :src="'https://getty.uz/'+post.image">
<h2>{{post.title}}</h2>
<p>{{post.info}}</p>
<div>
    <a :href="'#/edit/'+post.id" class="btn_1">
        <img src="pencil.svg">
    </a>
    <button @click="del_post(post.id)" class="btn_1">
        <img src="trash.svg">
    </button>
</div>
</div>
</div> */}