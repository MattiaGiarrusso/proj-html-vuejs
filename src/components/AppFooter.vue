<script>

export default {
    name: 'AppFooter',
    data () {
        return {
            links: ['Characters','Comics','Movies','TV','Games','Videos'],
            blog: [
        {
            text: 'Courses',
            badge: null
        },
        {
            text: 'Zoom',
            badge: true
        },
        ]
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
                    <i class="fa-brands fa-facebook pe-2"></i>
                    <i class="fa-brands fa-x-twitter pe-2"></i>
                    <i class="fa-brands fa-instagram pe-2"></i>
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
                <div class="ms-fs-10 text-secondary">
                    <span>info@masterstudy.com</span>                    
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

            <div class="col-3">
                <h6>Blog</h6>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">

.ms-height {
    height: 80px;
}






</style>