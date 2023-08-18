<template>
  <header>
    <nav class="container d-flex align-items-center justify-content-between">
      <router-link to="/"><img src="@/assets/img/logo.png" alt="logo"></router-link>
      <div class="d-flex gap-4">
        <div v-for="item in navigations" :key="item.name">
          <router-link :to="item.href">{{ item.name }}</router-link>
        </div>
      </div>
    </nav>
  </header>
  <router-view />
  <footer>
    <div>
      <router-link to="/">
        <img src="@/assets/img/footerLogo.png" alt="/" >
      </router-link>
      <div>
        <ul>
          <li>상호명 : SAFEBIKE</li>
          <li>대표전화 : 1544-0000</li>
          <li>FAX : 123-1234-5678</li>
          <li>주소 : 서울특별시 서울 강남구</li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        navigations: [
          {
            name: '나의계약',
            href: '/contract'
          },
          {
            name: '사고/보상',
            href: '/accidentCompensation'
          },
          {
            name: '알림',
            href: '/notification'
          },
          {
            name: '인증센터',
            href: '/certificationCenter'
          }
        ]
      }
    }
  }
</script>
