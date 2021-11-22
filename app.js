const app = Vue.createApp({
   
    data(){
        return{
         firstName: 'Stone', 
         lastName: 'Righa' ,
         email: 'stoneriga@gmail.com',
         gender: 'male',
         picture: 'https://randomuser.https://stonified.files.wordpress.com/2017/02/cropped-14691999_1773951312845332_2456144402320254848_o.jpg?w=200/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser(){

            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            //console.log(results)


         this.firstName = results[0].name.first
         this.lastName =  results[0].name.last
         this.email = results[0].email
         this.gender = results[0].gender
         this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')