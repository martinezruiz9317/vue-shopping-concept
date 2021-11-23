<template>
  <div class="Shop">
    <div class="products row">
    <!-- <div v-for="product in products" :key="product.name">
      <router-link :to="{name: 'ProductDetails', params: {slug: product.slug}}">
        <h2>{{product.name}}</h2>
      </router-link>
      <figure>
        <router-link :to="{name: 'ProductDetails',params: {slug: product.slug}}">
          <img :src="require(`@/assets/${product.image}`)" :alt="product.name">
        </router-link>
      </figure>
    </div> -->
    <product-card class="col-lg-3 col-md-6" v-for="product in products"
    :pid="product.id" 
    :key="product.name" 
    :name="product.name"
    :slug="product.slug"
    :sdesc="product.shortdesc"
    :imgurl="product.image"
    :price="product.price"
    :currency="product.currency"
    @addedToCart="onAddToCar">
    </product-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import productsdb from "@/products.js"
import ProductCard from '@/components/ProductCard.vue';
export default {
  name: "Shop",
  components: {
    ProductCard
  },
  data(){
    return{
      products: productsdb.products
      // cartdata: Null
    };
  },
  // watch: {
  //   total: function() {
  //     // Emit this information to the parents component
  //     this.$emit("cartTotal", this.cartdata);
  //     // console.log('Hellow')
  //   }
  // },
  methods: {
    // Triggered when `childToParent` event is emitted by the child.
    onAddToCar (value) {
      this.$emit("cartTotal", value)
    }
  }
};
</script>
<style scoped>
  .home{
    max-width: 1400px;
    margin: 0 auto;
  }
  img{
    max-width: 200px;
  }
</style>
