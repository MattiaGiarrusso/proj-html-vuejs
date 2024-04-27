<script>

export default {
    name: 'AppFooter',
    data () {
        return {
            links: ['Characters','Comics','Movies','TV','Games','Videos'],
            blog: [
           {
            title: 'Our main target is to "Developing Yourself as a Leader"',
            subtitle: '- August 9, 2018',
            image: 'photo-1517520287167-4bbf64a00d66-69x69.jpeg',
           },
           {
            title: "Those Other College Expenses You Aren't Thinking About",
            subtitle: '- June 3, 2015',
            image: 'photo-1490376840453-5f616fbebe5b-69x69.jpeg',
           },
          ]
        }
    },
    methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/${name}`, import.meta.url).href;
            }
    }
}

</script>

<template>
    <div class="ms-bg ms-container">
        <div class="row">

            <div class="col-3">
                <h6>About</h6>
                <div class="ms-fs-10 mb-2 mt-4">
                    <p class="mb-0"><a class="text-primary" href="">Masterstudy</a> is Education WordPrese theme featured by Learning Management System LMS for online education.</p>
                    <span>Development by <a class="text-primary" href="">StylemixThemes</a>.</span>
                </div>
                <div class="ms-fs-12 text-secondary">
                    <a class="text-secondary" href=""><i class="fa-brands fa-facebook pe-2"></i></a>
                    <a class="text-secondary" href=""><i class="fa-brands fa-x-twitter pe-2"></i></a>
                    <a class="text-secondary" href=""><i class="fa-brands fa-instagram pe-2"></i></a>
                </div>
            </div>

            <div class="col-3">
                <h6>Contact</h6>
                <div class="ms-fs-10 mb-2 mt-4">
                    <span>USA, California 20, First Avenue, California</span>
                    <div class="d-flex flex-column pt-2">
                        <span>Tel: + 1 212 458 300 32</span>
                        <span>Fax: + 1 212 375 24 14</span>                
                    </div>
                </div>
                <div class="ms-fs-10">
                    <a class="text-secondary" href="">info@masterstudy.com</a>                   
                </div>                
            </div>
            
            <div class="col-3">
                <h6>Pages</h6>
                <div class="mt-4">
                    <ul class="d-flex flex-column flex-wrap ms-height ps-3">
                        <li v-for="link in links" class="ms-fs-12 pb-2">
                            <a class="text-dark" href="#">{{ link }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-3 ms-blog-height">
                <h6 class="mb-4">Blog</h6>

                <div v-for="bar in blog" class="row mb-3 border-0">
                    <div class="col-4">
                        <img :src="getImageUrl(bar.image)" class="img-fluid" alt="">
                    </div>
                    <div class="col-8 ms-fs-12">
                        <h5 class="card-title ms-fs-12">{{ bar.title }}</h5>
                        <p class="card-text"><small class="text-body-secondary">{{ bar.subtitle }}</small></p>
                    </div>                    
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">

.ms-height {
    height: 80px;
}

.col-4 {
    padding-bottom: 0px;
}

</style>