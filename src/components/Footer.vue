<template>
  <div class="footer">
    <el-divider></el-divider>
    <div class="wrapper">
      <span><a href="#/feedback">遇到问题，我要反馈</a></span>
      <span>
        <a href="https://shimo.im/docs/vVAXVYrz96cK8pqm/" target="_blank">网站使用说明<i class="el-icon-question"></i></a>
      </span>
      <span>
        <a href="http://www.beian.miit.gov.cn/" target="_blank">京ICP备19056350号-1</a>
      </span>
      <span><a href="/#/devlog" target="_blank">开发日志</a></span>
      <span>
        <a href="http://welishi.cn/" target="_blank">友情链接</a>
      </span>
      <span>©2019-{{(new Date()).getFullYear()}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  color: gray;
  margin-bottom: 15px;
  font-size: 13px;
}

.footer:not(:hover) {
  opacity: 0.7;
}

.footer a {
  color: gray;
  text-decoration: none;
}

.footer a:hover {
  color: #303133;
}

.footer span {
  margin: 0 10px;
  line-height: 1;
}

.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
