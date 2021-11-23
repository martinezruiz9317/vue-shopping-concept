<template>
  <div class="cart">
      <div class="row">
        <div class="col-sm-8">
        <b-list-group class="bg-dark">
          <b-list-group-item class="d-flex align-items-center bg-dark" v-for="item in cartdata.items" :key="item.id">
              <div class="mr-2">
                <a class="cart-item-del" v-on:click="deleteItem(item)"><b-icon-trash></b-icon-trash></a>
              </div>
              <div class="cart-item-img" v-bind:style="{'background-image': 'url(' + require('@/assets/'+item.img)+')'}"></div>
              <div class="px-2">
                <h3 class="cart-item-name">{{item.name}}</h3>
                <div class="cart-item-price">Price: <span class="price">${{item.price}}</span></div>
              </div>
              <div class="cart-item-qty"><input min="1" @input="updateTotals" type="number" v-model.number="item.qty"></div>
          </b-list-group-item>
        </b-list-group>
        </div>
        <div class="col-sm-4">
          <div class="cart-totals">
              <h2>Total:</h2>
              <div class="cart-total-cost">${{cartdata.totalcost | tableCurrency}}</div>
              <div><router-link class="btn pay-link btn-block" to="/pay">Pay</router-link></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props:{
    cartdata: Object
  },
  data(){
    return{

    };
  },
  methods:{
    deleteItem(x){
      // this.data.splice(this.data.indexOf(x),1)
      this.$emit('removeCartItem',x)
    },
    updateTotals(){
      this.$emit('updateTotals')
    }
  }
}
</script>

<style scoped>
  .cart-item-img{
    width: 80px;
    height: 80px;
    border-radius: 6px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .cart-total-cost{
    color: #5FD2D0;
    font-size: 22px;
    font-weight: 700;
  }
  .pay-link{
    background-color: #F44657;
    color: #ffffff;
    font-size: 30px;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 25px;
    padding: 6px 20px 4px;
  }
  .cart-item-qty input{
    background-color: #212529;
    font-size: 20px;
    width: 60px;
    color: #ADB5BD;
    border: 0;
    border-radius: 10px;
    padding: 5px;
  }
  .cart-item-qty input:focus{
    outline: none;
  }
  .cart-totals{
    color: #ADB5BD;
  }
  .cart-item-name{
    color: #ADB5BD;
  }
  .cart-item-qty{
    color: #ADB5BD;
    margin-left: auto;
  }
  .cart-totals{
    background-color: #343A40;
    padding: 20px;
    border-radius: 10px;
  }
  .cart-item-del{
    background-color: #212529;
    color: #F44657;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cart-item-price{
    color: #ADB5BD;
    text-align: left;
  }
  .cart-item-price .price{
    color: #5FD2D0;
  }
</style>