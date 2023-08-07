<template>
  <section class="top">
    <div class="banner d_flex f1">
      <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay0" @mouseenter="autoplay = false"
        @mouseleave="autoplay = true" control-color="black" control-color-active="black" height="600px" color="white"
        class="slides f1">
        <q-carousel-slide :name="1" class="maintt1 base row">
          <h2 class="">
            라이더라면<span class="maintt2"> 꼭 </span>
            챙겨야하는<br><span class="maintt2">디지털GA 이륜차보험</span>
          </h2>
          <img src="@/assets/img/autobike1.png" alt="autobike1">
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="maintt2 row">
          <h2 class="f7">
            모든 이륜차는<br><span class="Yellow">
              의무적으로 보험가입이</span><br>
            필요합니다.
          </h2>
          <img src="@/assets/img/autobike2.png" alt="autobike2">
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="pc_form">
      <span class="maintt1">
        <em>실시간으로</em> 비교하고 <em>빠르게</em> 가입하세요.
      </span>
      <form action="POST" class="left">
        <div>
          <fieldset>
            <label for="">고객명</label>
            <input type="text" placeholder="고객명"  required>
          </fieldset>
          <fieldset>
            <label for="">휴대폰번호</label>
            <input type="tel" placeholder="휴대폰번호" maxlength="11" minlength="11"
              required>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <label for="">생년월일</label>
            <input type="text" placeholder="예)910307" maxlength="6" minlength="6"
              required>
          </fieldset>
          <fieldset>
            <label for="">성별</label>
            <select name="" id=""  required>
              <option value="" disabled>선택</option>
              <option value="male">남</option>
              <option value="female">여</option>
            </select>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <label for="">배기량</label>
            <select name="" id="" class="" required>
              <option value="" disabled>선택</option>
              <option value="소형A/50cc 미만">소형A/50cc 미만</option>
              <option value="소형B/50cc~100cc">소형B/50cc~100cc</option>
              <option value="중형/101cc~260cc">중형/101cc~260cc</option>
              <option value="대형/260cc초과">대형/260cc초과</option>
            </select>
          </fieldset>
          <fieldset>
            <label for="">대물배상</label>
            <select name="" id="" class=""  required>
              <option value="" disabled>선택</option>
              <option value="2천만원 (책임보험)">2천만원 (책임보험)</option>
              <option value="3천만원">3천만원</option>
              <option value="6천만원">6천만원</option>
              <option value="1억원 (최대금액)">1억원 (최대금액)</option>
            </select>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <label for="">용도구분</label>
            <select name="" id="" class="" required>
              <option value="" disabled>선택</option>
              <option value="가정용">가정용</option>
              <option value="배달용">배달용</option>
              <option value="퀵">퀵</option>
            </select>
          </fieldset>
          <fieldset>
            <label for="">할인할증</label>
            <select name="" id="" class=""  required>
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
          <fieldset>
            <label for="">가입경력<span class="sprite question"></span></label>
            <select name="" id="" class="" required>
              <option value="" disabled>선택</option>
              <option value="1년 미만">1년 미만</option> 
              <option value="2년 미만">2년 미만</option>
              <option value="3년 미만">3년 미만</option>
              <option value="3년 이상">3년 이상</option>
            </select>
          </fieldset>
          <fieldset>
            <label for="">법규위반<span class="sprite question"></span></label>
            <select name="" id="" class="" required>
              <option value="" disabled>선택</option>
              <option value="할인적용">할인적용</option>
            </select>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <label for="">운전연령<span class="sprite question"></span></label>
            <select name="" id="" class="" required>
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
          <fieldset>
            <label for="">운전자한정<span class="sprite question"></span></label>
            <select name="" id="" class="" required>
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
          <fieldset>
            <label for="">물적사고할증<span class="sprite question"></span></label>
            <select name="" id="" class="" required>
              <option value="" disabled>선택</option>
              <option value="50만원">50만원</option>
              <option value="200만원">200만원</option>
            </select>
          </fieldset>
          <div class="agree">
            <label for="agree">이용약관동의
              <span class="sprite question"></span>
            </label>
            <input type="checkbox" name="" id="agree" required>
          </div>
        </div>
        <textarea name="" id="" placeholder="상담 내용을 적어주세요" style="resize: none" ></textarea>
      </form>
      <q-btn class="base" @click="create()">견적문의</q-btn>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
