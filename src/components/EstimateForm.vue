<template>
  <div class="form col-7 row justify-content-center">
    <h2>이륜차보험 견적 문의</h2>
    <form action="POST">
      <div>
        <fieldset class="col-sm-5">
          <label for="customerName">고객명</label>
          <input type="text" name="customerName" id="customerName" v-model="createForm.customerName" required>
        </fieldset>
        <fieldset class="col-sm-5">
          <label for="customerPhoneNumber">휴대폰번호</label>
          <input type="tel" name="customerPhoneNumber" id="customerPhoneNumber" v-model="createForm.customerPhoneNumber"
            maxlength="11" minlength="11" required>
        </fieldset>
      </div>
      <div>
        <fieldset class="col-sm-5">
          <label for="customerBirthDay" class="col-sm-5">생년월일</label>
          <input type="text" name="customerBirthDay" id="customerBirthDay" v-model="createForm.customerBirthDay"
            placeholder="예)910307" maxlength="6" minlength="6" required>
        </fieldset>
        <fieldset class="col-sm-5">
          <label for="customerGender">성별</label>
          <select name="customerGender" v-model="createForm.customerGender" required>
            <option value="" disabled>선택</option>
            <option value="male">남</option>
            <option value="female">여</option>
          </select>
        </fieldset>
      </div>
      <div>
        <fieldset class="col-sm-5">
          <label for="displacement">배기량</label>
          <select name="displacement" v-model="createForm.displacement" required>
            <option value="" disabled>선택</option>
            <option value="소형A/50cc 미만">소형A/50cc 미만</option>
            <option value="소형B/50cc~100cc">소형B/50cc~100cc</option>
            <option value="중형/101cc~260cc">중형/101cc~260cc</option>
            <option value="대형/260cc초과">대형/260cc초과</option>
          </select>
        </fieldset>
        <fieldset class="col-sm-5">
          <label for="indemnity">대물배상</label>
          <select name="indemnity" v-model="createForm.indemnity" required>
            <option value="" disabled>선택</option>
            <option value="2천만원 (책임보험)">2천만원 (책임보험)</option>
            <option value="3천만원">3천만원</option>
            <option value="6천만원">6천만원</option>
            <option value="1억원 (최대금액)">1억원 (최대금액)</option>
          </select>
        </fieldset>
      </div>
      <div>
        <fieldset class="col-sm-5">
          <label for="classification">용도구분</label>
          <select name="classification" v-model="createForm.classification" required>
            <option value="" disabled>선택</option>
            <option value="가정용">가정용</option>
            <option value="배달용">배달용</option>
            <option value="퀵">퀵</option>
          </select>
        </fieldset>
        <fieldset class="col-sm-5">
          <label for="discountSurcharge">할인할증</label>
          <select name="discountSurcharge" v-model="createForm.discountSurcharge" required>
            <option value="" disabled>선택</option>
            <option value="11Z (신규 번호판등록시)">
              11Z (신규 번호판등록시)
            </option>
            <option value="12Z (1년이상 무사고갱신)">
              12Z (1년이상 무사고갱신)
            </option>
            <option value="13Z (2년이상 무사고갱신)">
              13Z (2년이상 무사고갱신)
            </option>
            <option value="14Z (3년이상 무사고갱신)">
              14Z (3년이상 무사고갱신)
            </option>
            <option value="15Z (4년이상 무사고갱신)">
              15Z (4년이상 무사고갱신)
            </option>
            <option value="16Z (5년이상 무사고갱신)">
              16Z (5년이상 무사고갱신)
            </option>
            <option value="17Z">17Z</option>
            <option value="18Z">18Z</option>
            <option value="19Z">19Z</option>
            <option value="20Z">20Z</option>
            <option value="21Z">21Z</option>
            <option value="22Z">22Z</option>
            <option value="23Z">23Z</option>
            <option value="24Z">24Z</option>
          </select>
        </fieldset>
      </div>
      <div>
        <fieldset class="col-sm-5">
          <label for="subscriptionHistory">가입경력</label>
          <select name="subscriptionHistory" v-model="createForm.subscriptionHistory" required>
            <option value="" disabled>선택</option>
            <option value="1년 미만">1년 미만</option>
            <option value="2년 미만">2년 미만</option>
            <option value="3년 미만">3년 미만</option>
            <option value="3년 이상">3년 이상</option>
          </select>
        </fieldset>
        <fieldset class="col-sm-5">
          <label for="law">법규위반</label>
          <select name="law" v-model="createForm.law" required>
            <option value="할인적용">할인적용</option>
          </select>
        </fieldset>
      </div>
      <div>
        <fieldset class="col-sm-5">
          <label for="age">전연령</label>
          <select name="age" v-model="createForm.age" required>
            <option value="" disabled>선택</option>
            <option value="전연령">전연령</option>
            <option value="만19세이상">만19세이상</option>
            <option value="만21세이상">만21세이상</option>
            <option value="만24세이상">만24세이상</option>
            <option value="만26세이상">만26세이상</option>
            <option value="만30세이상">만30세이상</option>
            <option value="만35세이상">만35세이상</option>
            <option value="만43세이상">만43세이상</option>
            <option value="만48세이상">만48세이상</option>
          </select>
        </fieldset>
        <fieldset class="col-sm-5">
          <label for="driverOnly">운전자한정</label>
          <select name="driverOnly" v-model="createForm.driverOnly" required>
            <option value="" disabled>선택</option>
            <option value="누구나">누구나</option>
            <option value="가족한정">가족한정</option>
            <option value="기명피보험자1인한정">
              기명피보험자1인한정
            </option>
          </select>
        </fieldset>
      </div>
      <div>
        <fieldset class="col-sm-5">
          <label for="accidentSurcharge">물적사고할증</label>
          <select name="accidentSurcharge" v-model="createForm.accidentSurcharge" required>
            <option value="" disabled>선택</option>
            <option value="50만원">50만원</option>
            <option value="200만원">200만원</option>
          </select>
        </fieldset>
        <fieldset class="agree col-sm-5 justify-content-start">
          <label for="agree">이용약관동의</label>
          <input type="checkbox" name="agree" id="agree" v-model="createForm.agree" required>
        </fieldset>
      </div>
    </form>
    <button type="button" class="bg-primary agree col-sm-10 " @click="create()">견적 문의하기</button>
    <b-alert :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown = 0">
    </b-alert>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'EstimateForm',
  
  components: {},
  data() {
    return {
      sampleData: ''
    };
  },
  setup() {
    const createForm = ref({
      customerName: "",
      customerPhoneNumber: "",
      customerBirthDay: "",
      customerGender: "",
      agree: "",
      indemnity: "",
      classification: "",
      displacement: "",
      discountSurcharge: "",
      subscriptionHistory: "",
      law: "",
      age: "",
      driverOnly: "",
      accidentSurcharge: "",
      memo: "",
      // date: dayjs().format("YYYY-MM-DD")
    });

    const create = () => {
      const data = createForm.value;
      console.log('data', data)
      for (let [key, value] of Object.entries(data)) {
        if (value === "" && key == "agree") {
          return;
        }
      }
      for (let [key, value] of Object.entries(data)) {
        if (key !== "memo" && value === "") {
          return;
        }
      }
      const HOST = `/customer`;
      this.$http
        .post(HOST, data, {})
        .then((result) => {
          console.log(result)
        })
        .catch((error) => {
          console.error(error);
        });
    }

    const dismissCountDown = ref(0)
    const dismissSecs = ref(5)
    function showAlert() {
      dismissCountDown.value = dismissSecs.value
    }
    return {
      createForm,
      dismissSecs,
      dismissCountDown,
      showAlert,
      create,
      // form,
      // show,
      // onSubmit,
      // onReset
    }
  },
  created() { },
  mounted() { },
  unmounted() { },
  methods: {}
}
</script>
<style scoped lang="scss"></style>
