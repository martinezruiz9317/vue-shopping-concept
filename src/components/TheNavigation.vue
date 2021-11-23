<template>
    <div id="SideBar">
        <b-nav vertical class="navitems">
          <li class="nav-item">
            <router-link to="/">
              <span class="icon-wrap"><b-icon-shop></b-icon-shop></span> Shop
            </router-link>
            </li>
            <li class="nav-item">
            <router-link to="/cart">
              <span class="icon-wrap"><b-icon-cart2></b-icon-cart2></span> Cart <span class="menucart-total">{{carttotal}}</span>
            </router-link>
            </li>
            <li class="nav-item">
            <router-link to="/pay">
              <span class="icon-wrap"><b-icon-credit-card></b-icon-credit-card></span> Pay
            </router-link>
            </li>
          <!-- <li v-for="destination in destinations" :key="destination.name">
             <router-link :to="{name: 'DestinationDetails', params:{slug:destination.slug}}">
            {{destination.name}}
          </router-link>
          </li> -->
        </b-nav>
        <div class="separator"></div>
        <b-nav vertical class="navitems">
          <li class="nav-item">
            <router-link to="/account">
              <span class="icon-wrap"><b-icon-person></b-icon-person></span> Account
            </router-link>
            </li>
            <li class="nav-item">
            <router-link to="/wishlist">
              <span class="icon-wrap"><b-icon-folder-plus></b-icon-folder-plus></span> Wishlist
            </router-link>
            </li>
            <li class="nav-item">
            <router-link to="/support">
              <span class="icon-wrap"><b-icon-headset></b-icon-headset></span> Support
            </router-link>
            </li>
          <!-- <li v-for="destination in destinations" :key="destination.name">
             <router-link :to="{name: 'DestinationDetails', params:{slug:destination.slug}}">
            {{destination.name}}
          </router-link>
          </li> -->
        </b-nav>
    </div>
</template>

<script>
// import store from "@/store.js"
export default {
  data(){
    return {
    
    };
  },
  props:{
    carttotal: Number,
  }
}
</script>

<style scoped>
#SideBar{
  width: 300px;
  position: fixed;
  z-index: 10;
  top: 69px;
  height: calc(100% - 69px);
  scrollbar-color: rgba(0,0,0,0.2) #f5f5f5;
  scrollbar-width: thin;
  transition: transform 0.35s ease-in-out;
  padding: 0 10px;
}
.navitems{
  padding: 10px 0;
}
.nav-item a{
  background-color: #343A40;
  border-radius: 10px;
  display: block;
  text-align: left;
  padding: 10px;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #ADB5BD;
  text-decoration: none;
}
.nav-item{
  margin: 5px 0;
}
.menucart-total{
  margin-left: auto;
  width: 30px;
  background-color: #212529;
  color: #F44657;
  border-radius: 50%;
  height: 30px;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
}
.icon-wrap{
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #212529;
    border-radius: 50%;
    margin-right: 10px;
    color: #495057;
}

#SideBar a.router-link-exact-active {
  color: #5FD2D0;
}
#SideBar a.router-link-exact-active .icon-wrap{
  color: #5FD2D0;
}
</style>