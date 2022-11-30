var CreatePost = {
    template: `
    <div class="root container mt-3">
        <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title..." v-model="title">
        </div>
        <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Message..." v-model="info"></textarea>
        </div>
        <div class="mb-3">
            <input class="form-control" type="file" id="formFile" @change="selectFile($event )">
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-success" type="button" @click="sendData">Send!</button>
        </div>
    </div>
    `,
    data() {
        return {
            title: '',
            info: '',
            image: null,
        }
    },
    methods: {
        selectFile(event) {
            this.image = event.target.files[0];
        },
        sendData() {

            var form = new FormData();

            form.append('title', this.title);
            form.append('info', this.info);
            form.append('image', this.image);

            fetch('https://getty.uz/store-post', {
                method: 'post',
                body: form,
            })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
        }
    }
}


{/* <div class="form">
        <input type="text" name="" id="text" v-model="title">
        <textarea name="" id="message" cols="30" rows="10" v-model="info"></textarea>
        <input type="file" name="" id="file" @change="selectFile($event )">
        <button @click="sendData">Send</button>
</div> */}