<template>
    <div class="prod-card">
        <div class="prod-card-inner">
        <div class="prod-card-img" v-bind:style="{'background-image': 'url(' + require('@/assets/'+imgurl)+')'}">
        <router-link :to="'/product/'+slug">
            &nbsp;    
        </router-link>
        </div>
        <div class="prod-card-cnt">
            <h3 class="prod-name">{{name}}</h3>
            <p>{{sdesc}}</p>
            <div class="price">{{currency}}{{price}}</div>
            <div class="d-flex">
            <input class="prod-qty" type="number" v-model.number="qty" min="1">
            <a class="add-to-cart ml-2" v-on:click="addToCart">
                Add to cart
            </a>
            </div>
        </div>
        <a class="add-to-wishlist">
                <b-icon-heart></b-icon-heart>
        </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            qty: 1
        }
    },
    props: {
      pid: Number,
      imgurl: String,
      name: String,
      sdesc: String,
      price: Number,
      currency: String,
      slug: String,
      tagcolor: String
    },
    methods: {
        addToCart(){
            this.$emit('addedToCart',
            {
                id: this.pid,
                qty: this.qty,
                img: this.imgurl,
                name: this.name,
                price: this.price,
                slug: this.slug
            })
        }
    }
}
</script>

<style>
    .prod-card{
        margin-bottom: 20px;
    }
    .prod-card-inner{
        width: 100%;
        background-color: #343A40;
        border-radius: 20px;
        height: 100%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        color: #ADB5BD;
        text-align: left;
        position: relative;
    }
    .prod-qty{
        width: 60px;
        background-color: #212529;
        border: 0;
        border-radius: 10px;
        padding-left: 5px;
        color: #ADB5BD;
    }
    .prod-qty:focus{
        outline: none;
    }
    .prod-name{
        font-size: 20px;
        font-weight: 600;
    }
    .add-to-cart{
        padding: 5px 10px;
        background-color: #212529;
        border-radius: 20px;
        color: #ADB5BD;
        text-decoration: none;
    }
    .add-to-cart:hover{
        color: #F44657;
        background-color: #495057;
        text-decoration: none;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.11);
    }
    .add-to-wishlist{
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: rgba(33, 37, 41, 0.733);
        color: #ADB5BD;
        position: absolute;
        top: 5px;
        right: 5px;
    }
    .add-to-wishlist:hover{
        background-color: #212529;
        color: #F44657;
    }
    .prod-card-img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    min-height: 170px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    }
    .prod-card-img a {
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
}
    .price{
        color: #5FD2D0;
        margin-bottom: 10px;
    }
    .prod-card-cnt{
        padding: 20px;
    }
</style>