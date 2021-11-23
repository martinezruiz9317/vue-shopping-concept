<template>
  <div id="app">
     <TopBar />
    <div class="content-wrap">
      <TheNavigation :carttotal="cartt" />
      <div class="the-content">
        <div class="container-fluid pt-3">
        <router-view 
          :key="$route.path"
          @cartTotal="onAddedToCart"
          :cartdata="cart"
          @removeCartItem="removeThisItem"
          @updateTotals="updateTotals" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from "@/components/TopBar"
import TheNavigation from "@/components/TheNavigation"
export default {
    components: {
      TopBar,
      TheNavigation
    },
    data(){
      return{
        cartt: 0,
        cart: {
          items:[],
          totalcost: 0
          },
        luid: 0,
      };
    },
    methods: {
      // Triggered when `childToParent` event is emitted by the child.
      onAddedToCart (value) {
        // console.log(value);
        // found = null
        var found = this.cart.items.findIndex((element) => element.id === value.id);
        // console.log(found);
        if(found !== -1){
          // console.log(value.qty);
          // var nqty = this.cart[found].qty += value.qty;
          // console.log(nqty);
          // this.$set(this.cart, found, nqty)
          this.cart.items[found].qty += value.qty;
        }
        else{
          this.cart.items.push(value);
        }
        this.cartt += value.qty
        this.cart.totalcost += (value.price*value.qty)
        console.log(this.cart.totalcost)
        // this.cart[this.luid].push(value)
        // console.log(this.cart.length)
        // this.cart.push(value)
        // this.cartt += value.qty
      },
      removeThisItem(value){
        this.cart.items.splice(this.cart.items.indexOf(value),1)
        // this.cartt -= value.qty
        this.updateTotals()
      },
      updateTotals(){
        this.cart.totalcost = this.cart.items.reduce(function(sum, current) {
          return sum + (current.qty*current.price);
        }, 0);
        this.cartt = this.cart.items.reduce(function(sum, current) {
          return sum + current.qty
        }, 0);
      }
    }
    // watch: {
    //   cart: function() {
    //     // Emit this information to the parents component
    //     // this.$emit("cartTotal", this.cartdata);
    //     // console.log(this.cart)
    //     var tt = 0;
    //     for(var j = 0; j<this.cart.length; j++){
    //         // console.log(this.cart[j].qty),
    //         tt += this.cart[j].qty
    //     }
    //     this.cartt = tt;
    //     // this.cartt = this.cart.length
    //     // console.log('Hellow')
    //   }
    // }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #212529;
}
img{
  max-width: 100%;
}
</style>
