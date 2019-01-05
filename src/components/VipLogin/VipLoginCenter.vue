<template>
  <!--VipLogin-center-->
  <div class="VipLogin-center">
    <div class="VipLogin-center-01">
      <label for="mobile">登录名</label>
      <input name="mobile" type="tel" placeholder="请输入手机号或邮箱" maxlength="11" class="VipLogin-center-mobile">
    </div>
    <div class="VipLogin-center-02">
      <label for="authcode">密码</label>
      <input class="VipLogin-center-authcode" maxlength="10" name="authcode" type="password" placeholder="请输入密码">
      <a href="javascript:;" class="VipLogin-center-02-show"></a>
    </div>
    <div class="VipLogin-center-03">
      <a href="javascript:;" class="VipLogin-center-submit">登录</a>
      <p class="VipLogin-center-03-tips">忘记密码？</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VipLoginCenter"
    }
</script>

<style scoped>

</style>
