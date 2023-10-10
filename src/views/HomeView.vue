<template>
  <div class="container">
    <div class="add">
      <router-link to="/Add" class="ad"
        >New<span
          style="
            font-size: 20px;
            font-weight: 400;
            padding-bottom: 1px;
            padding: 3px;
            display: inline-block;
          "
          >+</span
        ></router-link
      >
    </div>
    <div class="bod">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Imge</th>
            <th>Device Name</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, indx) in products" :key="indx">
            <td class="id">{{ indx + 1 }}</td>
            <td><img :src="product.images[0]" alt="Not Found" /></td>
            <td>{{ product.title }}</td>
            <td>{{ product.price }}$</td>
            <td class="del">
              <button @click="del(product.id)">Delete</button>
            </td>
            <td class="update">
              <router-link :to="`/Update/${product.id}`" class="upd"
                >Edit</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
// import HomeC from "@/components/HomeV.vue";

export default {
  name: "HomeView",
  props: ["products"],
  // data() {
  //   return {
  //     localProducts: [...this.products], // Copy the 'products' prop to a local data property
  //   };
  // },
  methods: {
    del(productId) {
      axios
        .delete(`http://localhost:3000/products/${productId}`)
        .then(() => {
          // تحديث القائمة بعد حذف المنتج
          this.$emit("fetchdata");
          console.log(`تم حذف المنتج ذو الهوية: ${productId}`);
        })
        .catch((error) => {
          console.error(
            `حدث خطأ أثناء حذف المنتج ذو الهوية ${productId}:`,
            error
          );
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  display: flex;
  padding: 40px;
  padding-top: 150px;
  background-color: #fefefe;
  .ad {
    color: aliceblue;
    font-size: medium;
    text-decoration: none;
    background-color: #2f73b0;
    position: absolute;
    top: 5.6%;

    padding: 6px 15px;
    border-radius: 4px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  table {
    overflow: hidden;
    max-height: 500px;
    width: 700px;
    border: 1px solid rgb(80, 33, 33);
    td {
      border: 1px solid rgb(15, 14, 14);
      padding: 0px 0px;
      margin-top: 0px;
      background-color: rgb(240, 241, 241);
    }
    .id {
      background-color: black;
      color: aliceblue;
    }
    .del {
      background-color: rgb(238, 234, 234);
      button {
        background-color: rgb(80, 33, 33);
        color: azure;
        outline: none;
        border-radius: 4px;
        border: transparent;
        padding: 3px 6px;
        transition: 0.7s ease-in;
        &:hover {
          transform: scale(1.1);
          background-color: rgb(172, 97, 97);
        }
      }
    }

    .update {
      background-color: rgb(252, 253, 253);
      .upd {
        align-items: center;
        text-align: center;

        text-decoration: none;
        display: block;
        background-color: #48af5c;
        color: azure;
        outline: none;
        border-radius: 4px;
        border: transparent;
        padding: 3px 0px;
        transition: 0.7s ease-in;
        &:hover {
          transform: scale(1.01);
          background-color: rgb(102, 163, 74);
        }
      }
    }
    th {
      font-size: 15px;
      background-color: azure;
    }
  }
}
</style>
