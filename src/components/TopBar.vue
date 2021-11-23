<template>
    <header class="header fixed-top">
        <div class="d-flex align-items-center nav-inner">
            <div class="logo-wrap pl-2">
                <img width="220" :src="require(`@/assets/logo.svg`)" alt="Logo">
            </div>
            <div class="page-title-wrap px-2"><h2 class="page-title mb-0">{{$route.name}}</h2></div>
            <div class="flex-fill">
                <b-form-input class="nav-search" placeholder="Enter your name"></b-form-input>
            </div>
            <div class="px-4">
                <a class="profile" href=""><b-icon-person-circle></b-icon-person-circle></a>
            </div>
        </div>	    
        
    </header>
</template>

<style scoped>
    .nav-inner{
        height: 69px;
    }
    .logo-wrap{
        width: 300px;
        text-align: left;
    }
    .page-title{
        font-size: 24px;
        font-weight: 700;
        color: #ADB5BD;
        text-align: left;
    }
    .nav-search{
        background-color: #343A40;
        border: 1px solid #ADB5BD;
        color: #ADB5BD;
        border-radius: 25px;
    }
    .nav-search:focus{
        background-color: #343A40;
        color: #ADB5BD;
    }
    .page-title-wrap{
        min-width: 200px;
    }
    .profile{
        color: #ADB5BD;
        font-size: 30px;
    }
</style>