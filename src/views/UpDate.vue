<template>
  <div class="container">
    <div class="main">
      <div class="form">
        <label for="#ti">title</label>
        <input id="ti" type="text" v-model="title" />
        <label for="#pr">ImgUrl</label>
        <input id="pr" type="text" v-model="imgURL" />
        <label for="#im">Price</label>
        <input id="im" type="text" v-model="price" />
        <button @click="Update(product.id)">Update</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      imgURLarry: [],
      imgURL: "",
      price: "",
    };
  },
  props: ["products"],
  created() {
    // استرجاع البيانات عند تحميل المكون
    const productId = this.$route.params.productid;

    // قم بإجراء استدعاء API اللازم هنا باستخدام معرف المنتج واحفظ البيانات في الخاصية `product`
    this.product = this.products.find((p) => p.id === parseInt(productId));
    //هنا بيقوم بفحص اذا كان ال id تاذى بداخل ال products مطابق لل id الذى عثر عليه اثناء تمريره فى ال router ويخزنه داخل product.
  },
  methods: {
    Update(productID) {
      if (this.price && this.title) {
        this.imgURLarry.push(this.imgURL);
        axios
          .put(`http://localhost:3000/products/${productID}`, {
            title: this.title,
            price: this.price,
            images: [...this.imgURLarry],
          })
          .then(() => {
            this.$emit("fetchdata");
            console.log(`تم تعديل العنصر:${this.title}`);
            this.price = "";
            this.title = "";
            this.imgURL = "";
          })
          .catch((error) => {
            console.error(
              `حدث خطأ أثناءتعديل المنتج ذو الهوية ${this.title}:`,
              error
            );
          });
      } else {
        console.log("لا يمكن اضافه حقول فارغه");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  background-color: #f6f6f6;
  padding: 50px;

  .main {
    justify-content: center;
    text-align: center;
    border-radius: 20px;

    .form {
      background-color: rgb(250, 248, 248);

      border: 2px solid rgb(199, 199, 204);
      justify-content: center;
      border-radius: 6px;
      height: 80%;
      margin-left: 40%;
      padding: 30px;
      width: 300px;
      input {
        display: block;
        width: 250px;
        height: 40px;
        outline: transparent;
        border-radius: 6px;
        border: 2px solid rgb(199, 199, 204);
        margin-top: 15px;
      }
      label {
        margin-top: 10px;
        margin-bottom: -13px;
        font-weight: 550;
        font-size: 20px;
        letter-spacing: -1px;
        font-style: italic;
        display: block;
        text-align: left;
      }
      button {
        display: block;
        padding: 4px 15px;
        font-size: 20px;
        margin-top: 20px;
        margin-left: 100px;
        border-radius: 3px;
        background-color: #2f76ac;
        color: #f6f6f6;
      }
    }
  }
}
</style>
