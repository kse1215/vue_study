<template>
  <div class="card">
    <!-- 예약 폼 -->
    <form v-if="step === 'form'" @submit.prevent="goToPayment">
      <h2>🧳 예약하기</h2>
      <div class="form_group">
        <label for="name">이름</label>
        <input type="text" id="name" required placeholder="이름을 입력하세요." v-model="name" />
      </div>
      <div class="form_group">
        <label for="date">날짜</label>
        <input type="date" id="date" required v-model="date" />
      </div>
      <div class="form_group">
        <label for="message">요청사항</label>
        <textarea id="message" placeholder="요청사항을 입력하세요." v-model="message" />
      </div>
      <button type="submit" class="button primary">예약하기</button>
    </form>

    <!-- 결제하기 단계 -->
    <div class="payment" v-else-if="step === 'payment'">
      <h2>💳 결제하기</h2>
      <p>
        <strong>{{ name }}</strong
        >님, 예약 날짜는 <strong>{{ date }}</strong
        >입니다.
      </p>
      <p>결제 금액 : <strong>50,000</strong>원</p>
      <button class="button success" @click="completePayment">결제 완료</button>
      <button class="button disabled" @click="goBack">뒤로 가기</button>
    </div>

    <!-- 완료 메시지 -->
    <div class="complete" v-else-if="step === 'complete'">
      <h2>✅ 예약 및 결제 완료!</h2>
      <p>{{ name }}님, 예약이 성공적으로 완료 되었습니다. 🎉</p>
      <p>날짜 : {{ date }}</p>
      <button class="button primary" @click="resetForm">새 예약하기</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const step = ref("form");
const name = ref("");
const date = ref("");
const message = ref("");

// 예약 버튼 클릭시 => 결제 단계로 이동
const goToPayment = () => {
  if (!name.value || !date.value) {
    alert("이름과 날짜를 입력해 주세요.");
    return;
  }
  step.value = "payment";
};

// 결제 완료 버튼 클릭시 => 완료 화면으로 이동
const completePayment = () => {
  step.value = "complete";
};

// 뒤로 가기 => 다시 폼으로
const goBack = () => {
  step.value = "form";
};

// 새 예약하기 버튼 클릭시 => 초기화 폼
const resetForm = () => {
  name.value = "";
  date.value = "";
  message.value = "";
  step.value = "form";
};
</script>

<style lang="scss" scoped>
.card {
  margin: 40px auto;
  h2 {
    margin-bottom: 16px;
    color: #333;
  }
  .button{
    margin-left: 5px;
  }
  p{
    margin: 10px 0;
    color: #555;
  }
}
</style>
