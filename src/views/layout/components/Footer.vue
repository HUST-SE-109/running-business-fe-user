<template>
  <el-footer>
    <el-row :gutter="10">
      <el-col :md="4">
        <div class="grid-content bg-purple">
          <h4>关于我们</h4>
          <ul>
            <li>跑腿介绍</li>
            <li>媒体报道</li>
            <li>联系跑腿</li>
          </ul>
        </div>
      </el-col>
      <el-col :md="4">
        <div class="grid-content bg-purple-light">
          <h4>意见反馈</h4>
          <ul>
            <li>常见问题</li>
            <li>如何下单</li>
            <li>如何付费</li>
            <li>如何开具发票</li>
          </ul>
        </div>
      </el-col>
      <el-col :md="4">
        <div class="grid-content bg-purple">
          <h4>网站导航</h4>
          <ul>
            <li>在线下单</li>
            <li>招商加盟</li>
            <li>加入跑男</li>
            <li>开放平台</li>
            <li>外卖助手</li>
          </ul>
        </div>
      </el-col>
      <el-col :md="4">
        <div class="grid-content bg-purple-light">
          <h4>7x24小时客服电话</h4>
          <h3>400-6997-990</h3>
          <h4>电子邮箱</h4>
          <h4>paotui@outlook.com</h4>
        </div>
      </el-col>
      <el-col :md="4">
        <div class="grid-content bg-purple">
          <h4>官方微信</h4>
          <img class="weixinImg" src="@/assets/weixin.jpg" alt="微信图片">
          <div>
            <img class="weixinIcon" src="@/assets/weixinimg.jpg" alt="微信图标">
            <span>关注微信</span>
          </div>
        </div>
      </el-col>
      <el-col :md="4">
        <div class="grid-content bg-purple-light">
          <h4>官方微博</h4>
          <img class="weiboImg" src="@/assets/weibo.jpg" alt="微博图片">
          <div>
            <img class="weiboIcon" src="@/assets/weiboimg.jpg" alt="微博图标">
            <span>关注微博</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="copyright">
      <el-col :md="24">
        <div class="grid-content bg-purple-light">
          <p>跑腿 www.paotui.com 版权所有：哈尔滨CDIO技术实验室@2015-2018 黑ICP备150099674-7</p>
        </div>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
<style lang="less">
.el-footer {
  padding: 0;
  text-align: center;
  line-height: 50px;
  .grid-content {
    width: 100%;
    min-height: 36px;
    .weixinImg,
    .weiboImg {
      width: 100px;
      height: 100px;
    }
    .weixinIcon,
    .weiboIcon {
      width: 30px;
      height: 30px;
    }
    span {
      font-size: 10px;
    }
  }
  h4 {
    color: #303133;
  }
  ul {
    padding-left: 0;
    list-style: none;
  }
  li {
    color: #909399;
    cursor: pointer;
  }
  li:hover{
      color: #303133;
  }
  h3 {
    color: #303133;
  }
  .copyright {
    width: 100%;
    background: #ddd;
  }
}
</style>
