<template>
  <header>
    <nav class="inner flex justify-between">
      <router-link to="/"><img src="@/assets/img/logo.png" alt="logo"></router-link>
      <ul class="">
        <li><router-link to="/">나의계약</router-link></li>
        <li><router-link to="/about">사고/보상</router-link></li>
        <li><router-link to="/about">알림</router-link></li>
        <li><router-link to="/about">인증센터</router-link></li>
      </ul>
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
