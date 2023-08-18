<template>
  <section class="container">
    <div class="d-flex row justify-content-between">
      <div id="carouselExampleDark" class="banner carousel carousel-dark slide col-5" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h1 class="display-6 font lh-base">이륜차 운전자를 위한 <span class="blue">SAFEBIKE</span> 이륜차보험</h1>
            <img src="@/assets/img/autobike1.png" class="img-fluid d-block" alt="오토바이사진">
          </div>
          <div class="carousel-item">
            <h1 class="display-6 font lh-base"><span class="blue"> 실시간으로</span> 비교하고 <br> <span class="blue"> 빠르게 </span>가입하세요!</h1>
            <img src="@/assets/img/autobike2.png" class="img-fluid d-block" alt="오토바이사진">
          </div>
        </div>
      </div>
      <EstimateForm/>
    </div>
  </section>
</template>

<script>

import EstimateForm from '../components/EstimateForm'
export default {
  name: 'Main',
	components: {
    EstimateForm
	},
  setup() {
    // const createForm = ref({
    //   customerName: "",
    //   customerPhoneNumber: "",
    //   customerBirthDay: "",
    //   customerGender: "",
    //   agree: "",
    //   indemnity: "",
    //   classification: "",
    //   displacement: "",
    //   discountSurcharge: "",
    //   subscriptionHistory: "",
    //   law: "",
    //   age: "",
    //   driverOnly: "",
    //   accidentSurcharge: "",
    //   memo: "",
    //   // date: dayjs().format("YYYY-MM-DD")
    // });

    // const create = () => {
    //   const data = createForm.value;
    //   console.log('data', data)
    //   for (let [key, value] of Object.entries(data)) {
    //     if (value === "" && key == "agree") {
    //       return;
    //     }
    //   }
    //   for (let [key, value] of Object.entries(data)) {
    //     if (key !== "memo" && value === "") {
    //       return;
    //     }
    //   }
    //   const HOST = `/customer`;
    //   this.$http
    //     .post(HOST, data, {})
    //     .then((result) => {
    //       console.log(result)
    //     })      
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }

    // const dismissCountDown = ref(0)
    // const dismissSecs = ref(5)
    // function showAlert() {
    //   dismissCountDown.value = dismissSecs.value
    // }
    // return {
    //   createForm,
    //   dismissSecs,
    //   dismissCountDown,
    //   showAlert,
    //   create,
    //   // form,
    //   // show,
    //   // onSubmit,
    //   // onReset
    // }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
