<template>
  <section class="container">
    <div class="d-flex row justify-content-between">
      <div id="carouselExampleDark" class="banner carousel carousel-dark slide col-5" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"
            ></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h1 class="font lh-base">이륜차 운전자를 위한 <span class="blue">SAFEBIKE</span> 이륜차보험</h1>
            <img src="@/assets/img/autobike1.png" class="d-block" alt="오토바이사진">
          </div>
          <div class="carousel-item">
            <h1 class="font lh-base"><span class="blue"> 실시간으로</span> 비교하고 <br> <span class="blue"> 빠르게</span>가입하세요!</h1>
            <img src="@/assets/img/autobike2.png" class="d-block" alt="오토바이사진">
          </div>
        </div>
      </div>

      <div class="form col-7 row justify-content-center">
        <h2>이륜차보험 견적 문의</h2>
        <form action="POST">
          <div>
            <fieldset class="col-sm-5">
              <label for="">고객명</label>
              <input type="text" required>
            </fieldset>
            <fieldset class="col-sm-5">
              <label for=""  >휴대폰번호</label>
              <input type="tel" class="col-sm-5" maxlength="11" minlength="11" required>
            </fieldset>
          </div>
          <div>
            <fieldset  class="col-sm-5">
              <label for=""  class="col-sm-5">생년월일</label>
              <input type="text"  class="col-sm-5" placeholder="예)910307" maxlength="6" minlength="6" required>
            </fieldset>
            <fieldset  class="col-sm-5">
              <label for=""  >성별</label>
              <select name="" required>
                <option value="" disabled>선택</option>
                <option value="male">남</option>
                <option value="female">여</option>
              </select>
            </fieldset>
          </div>
          <div>
            <fieldset class="col-sm-5">
              <label for="" >배기량</label>
              <select name="" required>
                <option value="" disabled>선택</option>
                <option value="소형A/50cc 미만">소형A/50cc 미만</option>
                <option value="소형B/50cc~100cc">소형B/50cc~100cc</option>
                <option value="중형/101cc~260cc">중형/101cc~260cc</option>
                <option value="대형/260cc초과">대형/260cc초과</option>
              </select>
            </fieldset>
            <fieldset class="col-sm-5">
              <label for="" >대물배상</label>
              <select name="" required>
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
              <label for="" >용도구분</label>
              <select name="" required>
                <option value="" disabled>선택</option>
                <option value="가정용">가정용</option>
                <option value="배달용">배달용</option>
                <option value="퀵">퀵</option>
              </select>
            </fieldset>
            <fieldset class="col-sm-5">
              <label for="" >할인할증</label>
              <select name=""  required>
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
              <label for="" >가입경력</label>
              <select name=""  required>
                <option value="" disabled>선택</option>
                <option value="1년 미만">1년 미만</option>
                <option value="2년 미만">2년 미만</option>
                <option value="3년 미만">3년 미만</option>
                <option value="3년 이상">3년 이상</option>
              </select>
            </fieldset>
            <fieldset class="col-sm-5">
              <label for="" >법규위반</label>
              <select name="" required>
                <option value="" disabled>선택</option>
                <option value="할인적용">할인적용</option>
              </select>
            </fieldset>
          </div>
          <div>
            <fieldset class="col-sm-5">
              <label for="">전연령</label>
              <select name="" required>
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
              <label for="">운전자한정<span class="sprite question"></span></label>
              <select name="" required>
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
              <label for="">물적사고할증</label>
              <select name="" required>
                <option value="" disabled>선택</option>
                <option value="50만원">50만원</option>
                <option value="200만원">200만원</option>
              </select>
            </fieldset>
            <fieldset class="agree col-sm-5 justify-content-start">
              <label for="agree">이용약관동의</label>
              <input type="checkbox" name="" id="agree" required>
            </fieldset>
          </div>
        </form>
        <button type="button" class="agree col-sm-10 " @click="create()">견적 문의하기</button>
      </div>
    </div>
  </section>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    const form = ref({
      email: '',
      name: '',
      food: null,
      checked: []
    });
    const foods = ref([{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn']);
    const show = ref(true);

  function onSubmit(event) {
    event.preventDefault()
    alert(JSON.stringify(form.value))
  }
  function onReset(event) {
    event.preventDefault()
    // Reset our form values
    form.value.email = ''
    form.value.name = ''
    form.value.food = null
    form.value.checked = []
    // Trick to reset/clear native browser form validation state
    show.value = false
    // this.$nextTick(() => {
    //   show = true
    // })
  }
    return {
      form,
      foods,
      show,
      onSubmit,
      onReset
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
