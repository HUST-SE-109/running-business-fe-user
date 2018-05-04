<template>
  <el-footer>
      <el-row :gutter="10">
          <el-col :md="4" ><div class="grid-content bg-purple">
              <h5>关于我们</h5>
              <ul>
                <li>跑腿介绍</li>
                <li>媒体报道</li>
                <li>联系跑腿</li>
              </ul>
            </div></el-col>
          <el-col :md="4" ><div class="grid-content bg-purple-light">
            <h5>意见反馈</h5>
              <ul>
                <li>常见问题</li>
                <li>如何下单</li>
                <li>如何付费</li>
                <li>如何开具发票</li>
              </ul>
            </div></el-col>
          <el-col :md="4" ><div class="grid-content bg-purple">
            <h5>网站导航</h5>
              <ul>
                <li>在线下单</li>
                <li>招商加盟</li>
                <li>加入跑男</li>
                <li>开放平台</li>
                <li>外卖助手</li>
              </ul>
            </div></el-col>
          <el-col :md="4" ><div class="grid-content bg-purple-light">
            <h5>7x24小时客服电话</h5>
            <h3>400-6997-990</h3>
            <h5>电子邮箱</h5>
            <h5>paotui@outlook.com</h5>
            </div></el-col>
          <el-col :md="4" ><div class="grid-content bg-purple">
            <h5>官方微信</h5>
            <img src="../../../../src/assets/weixin.jpg" alt="">
            <div class="icon">
                <img src="../../../../src/assets/weixinimg.jpg" alt="" class="smallIcon">
                <span>关注微信</span>
            </div>
            </div></el-col>
          <el-col :md="4" ><div class="grid-content bg-purple-light">
            <h5>官方微博</h5>
            <img src="../../../../src/assets/weibo.jpg" alt="">
            <div class="icon">
              <img src="../../../../src/assets/weiboimg.jpg" alt="" class="smallIcon">
              <span>关注微博</span>
            </div>
            </div></el-col>
       </el-row>
       <el-row class="footer">
          <el-col :md="24"><div class="grid-content bg-purple-light">
            <p>跑腿 www.paotui.com 版权所有：哈尔滨CDIO技术实验室@2015-2018 黑ICP备150099674-7</p>
            </div></el-col>
       </el-row>
  </el-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
<style lang="less">
ul {
  list-style: none;
}
* {
  margin: 0;
  padding: 0;
}
li {
  cursor: pointer;
}
li:hover {
  color: #aaa;
}
p {
  color: #aaa;
}
.el-footer {
  padding: 0;
  text-align: center;
  line-height: 50px;
}
.el-col {
  // border-radius: 4px;
}
.bg-purple-dark {
  // background: #99a9bf;
}
.bg-purple {
  // background: #d3dce6;
}
.bg-purple-light {
  // background: #e5e9f2;
}
.grid-content {
  // border-radius: 4px;
  width: 100%;
  min-height: 36px;
}
.smallIcon {
  width: 30px;
  height: 30px;
}
.icon span{
  font-size: 10px;
}
.footer {
  width: 100%;
  background: #ddd;
}
</style>
