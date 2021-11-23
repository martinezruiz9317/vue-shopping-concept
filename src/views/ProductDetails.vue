<template>
        <section class="product">
            
            <div class="product-details">
                <div class="row">
                    <div class="col-sm-6">
                    <img :src="require(`@/assets/${product.image}`)" :alt="product.name">
                    </div>
                    <div class="col-sm-6 text-left">
                        <h1 class="product-name">{{product.name}}</h1>
                        <div class="single-product-price">${{product.price}}</div>
                        <p class="single-product-description">{{product.description}}</p>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import productsdb from "@/products.js"
export default {
    data(){
        return{
            productSlug: this.$route.params.slug
        };
    },
    computed:{
        product(){
            return productsdb.products.find(
                product => product.slug === this.productSlug
            )
        }
    }
}
</script>
<style scoped>
    .product-name, .single-product-description{
        color: #ADB5BD;
    }
    .single-product-price{
        color:#5FD2D0;
        font-size: 26px;
    }
</style>