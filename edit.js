var Edit = {
    template: `
    <div class="root container mt-3">
        <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title..." v-model="title">
        </div>
        <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Message..." v-model="info"></textarea>
        </div>
        <div class="mb-3">
            <input class="form-control" type="file" id="formFile" @change="selectFile">
        </div>
        <div class="d-flex justify-content-center align-items-center mb-3"><img :src="'https://getty.uz/'+image" style="width: 50%"></div>
        <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-success" type="button" @click="send_upd">Update!</button>
        </div>
    </div>
    `,
    data() {
        return {
            id: null,
            title: '',
            info: '',
            image: null,
        }
    },
    mounted() {
        var form = new FormData()
        form.append('id', this.$route.params.numb)
        fetch('https://getty.uz/get-post',{
            method: 'post',
            body: form
        })
        .then(response => response.json())
        .then(result => {
            console.log(result); 
            this.title = result.data.title;
            this.info = result.data.info;
            this.image = result.data.image;
        })
    },
    methods: {
        send_upd() {
            var form = new FormData()
            form.append('id', this.$route.params.numb)
            form.append('title', this.title)
            form.append('info', this.info)
            form.append('image', this.image)
            fetch('https://getty.uz/update-post',{
                method: 'post',
                body: form
            })
            .then(response => response.json())
            .then(result => {
                console.log(result); 
                this.title = result.data.title;
                this.info = result.data.info;
                this.image = result.data.image;
            })
        },
        selectFile(event){
            this.image =event.target.files[0];
        },
    }
}


{/* <div class="form">
        <input type="text" name="" id="text"  v-model="title">
        <textarea name="" id="message" cols="30" rows="10" v-model="info"></textarea>
        <input type="file" name="" id="file"" @change="selectFile">
        <div class="divimage"><img :src="'https://getty.uz/'+image" class="edimage"></div>
        <button @click="send_upd">Edit</button>
</div> */}