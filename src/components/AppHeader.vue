<script>
export default {
    name: 'AppHeader',
    data() {
        return {
        links: [
        {
            text: 'Courses',
            badge: null

        },
        {
            text: 'Zoom',
            badge: true
        },
        {
            text: 'Pages',
            badge: null
        },
        {
            text: 'Bundles',
            badge: null
        },
        {
            text: 'Course Formats',
            badge: null
        },
        {
            text: 'Add Course',
            badge: true
        },
        {
            text: 'Demos',
            badge: null
        },
        ],

        icons: [
        {
            icon: '<i class="fa-brands fa-x-twitter"></i>',
        },
        {
            icon: '<i class="fa-brands fa-facebook"></i>',
        },
        {
            icon: '<i class="fa-brands fa-behance"></i>',
        },
        {
            icon: '<i class="fa-brands fa-pinterest"></i>',
        },
        {
            icon: '<i class="fa-solid fa-basketball"></i>',
        },
        {
            icon: '<i class="fa-brands fa-git"></i>',
        },
        {
            icon: '<i class="fa-solid fa-dice-two"></i>',
        },
        {
            icon: '<i class="fa-brands fa-linkedin"></i>',
        },
        ],
    }

    }
    
}
</script>

<template>
 <header>
    <!-------------- TOP HEADER ------------------>
    <div class="ms-top-header ms-fs-10 d-flex justify-content-between align-items-center">

        <div class="dropdown ms-dropdown">
            <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                English
            </a>

            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Italian</a></li>
            </ul>
        </div>

        <div class="d-flex align-items-center">

            <nav class="navbar navbar-expand-lg">                
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li v-for="link in links" class="nav-item position-relative me-2">
                            <a class="nav-link ms-link-header" href="#">{{ link.text }}</a>
                            <span v-if="link.badge" class="badge ms-radius-none ms-badge bg-danger ms-fs-6">NEW</span>    
                        </li>
                    </ul>
                </div>
            </nav>

            <nav class="navbar navbar-expand-lg">
            <div class="container px-0">
                <button class="navbar-toggler btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link ms-icon-header" href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-icon-header" href="#"><i class="fa-brands fa-facebook"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-icon-header" href="#"><i class="fa-brands fa-behance"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-icon-header" href="#"><i class="fa-brands fa-pinterest"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-icon-header" href="#"><i class="fa-brands fa-dribbble"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-icon-header" href="#"><i class="fa-brands fa-git"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-icon-header" href="#"><i class="fa-brands fa-flickr"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-icon-header" href="#"><i class="fa-brands fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        </div>


    </div>

    <!-------------- BOTTOM HEADER ------------------>

    <div class="container d-flex align-items-center justify-content-between pt-1">

        <div class="row d-flex">
            <div class="col-4">
                <img src="../assets/img/MasterStudy_logo.svg" class="ms-logo" alt="MasterStudy.alt">
            </div>

            <div class="col-8 d-flex align-items-center">
                <div class="pe-2">
                    <a class="navbar-brand ms-fs-10"><i class="fa-solid fa-bars"></i> CATEGORY</a>
                </div>
    
                <input type="search" class="form-control ms-radius-none ms-bg-gray ms-fs-12" placeholder="Search courses">
                <button class="btn ms-radius-none ms-btn-blue ms-fs-12" type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>

        </div>

        <div class="d-flex">

            <nav class="navbar">
                <div class="pe-2">
                    <a class="navbar-brand ms-fs-12" href="#"><i class="fa-solid fa-bullhorn ms-text-blue me-1"></i> Became an instructor</a>
                </div>
            
                <div class="pe-2">
                    <a class="navbar-brand ms-fs-12" href="#"><i class="fa-solid fa-briefcase ms-text-blue me-1"></i> For Enterprise</a>
                </div>
            </nav>
    
            <div class="ms-btn-group d-flex gap-3">
                <button class="btn ms-btn-white ms-fs-12" type="button"><i class="fa-regular fa-user"></i> Log in</button>
                <button class="btn ms-btn-blue rounded-pill ms-fs-12" type="button">SIGN UP</button>
                <button class="btn ms-btn-white ms-fs-12" type="button"><i class="fa-regular fa-bookmark"></i></button>
            </div>

        </div>

    
    </div>

 </header>

</template>

<style scoped lang="scss">

@use '../style/generic';

header {
    height: 100px;

    .ms-top-header {
        height: 40%;
        border-bottom: 1px solid #d1d1d1 ;

        .ms-dropdown {
            
            a {
                font-size: 10px;
                color: #d1d1d1;  
            }

        }

        .ms-link-header {
            color: #d1d1d1;
        }

        .navbar-toggler {
            width: 45px;
            font-size: small;
        }

    }

    .ms-bottom-header {
        width: 100%;

        
    }    
    
    .ms-btn-group {

        button {
            padding: 0px 14px;
        }
    }
}

</style>