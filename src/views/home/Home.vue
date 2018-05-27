<template>
  <div id="home">
    <div class="head">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <h1>跑腿 送的更快 做的更多</h1>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple">
            <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :span="4.8">
                <div class="grid-content bg-purple">
                  <a href="">帮我送</a>
                </div>
              </el-col>
              <el-col :span="4.8">
                <div class="grid-content bg-purple">
                  <a href="">帮我买</a>
                </div>
              </el-col>
              <el-col :span="4.8">
                <div class="grid-content bg-purple-light">
                  <a href="">帮我取</a>
                </div>
              </el-col>
              <el-col :span="4.8">
                <div class="grid-content bg-purple">
                  <a href="">带排队</a>
                </div>
              </el-col>
              <el-col :span="4.8">
                <div class="grid-content bg-purple">
                  <a class="placeAnOrder" href="">立即下单</a>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="paotuiServe">
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple">
            <h2>一呼百应，跑腿为你提供安全专业的即时同城跑腿服务</h2>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <img src="https://www.uupt.com/images/home-peo1.png" alt="代买图片">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <h4>代买</h4>
                  <h4>美食生鲜百货 想购就购</h4>
                  <h4>足不出户 轻松购遍全城</h4>
                  <p>生鲜百货，一单全搞定</p>
                  <p>名吃美食，吃遍全城大小美食</p>
                  <p>紧急药品，24小时快速救济</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <img src="https://www.uupt.com/images/home-peo2.png" alt="代送图片">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <h4>代送</h4>
                  <h4>没有时间 送货上门</h4>
                  <h4>跑腿一下 送啥都快</h4>
                  <p>鲜花蛋糕美食分分钟送达 </p>
                  <p> 安全保障 手机数码</p>
                  <p>物品紧急 快速送达</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <img src="https://www.uupt.com/images/home-peo3.png" alt="代取图片">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <h4>代取</h4>
                  <h4>文件发票钥匙 让生活更便利</h4>
                  <h4>随时随地 7X24小时服务</h4>
                  <p>合同发票取送，安全高效</p>
                  <p>商品全城配送，省心省力</p>
                  <p>紧急文件取送，及时安全可靠</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <img src="https://www.uupt.com/images/home-peo4.png" alt="带排队图片">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <h4>代排队</h4>
                  <h4>时间宝贵 怎能忍心浪费 </h4>
                  <h4>用代排队 轻松应对</h4>
                  <p>办事儿排队，高效生活</p>
                  <p>名吃美食，吃遍全城大小美食</p>
                  <p>餐厅排队占座，随到随享美味</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="solution">
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple">
            <h2>全行业定制化配送化解决方案 服务无忧 体验最优</h2>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <img src="https://www.uupt.com/images/home-send1.png" alt="美食图片">
            <img src="https://www.uupt.com/images/home-send2.png" alt="鲜花图片">
            <img src="https://www.uupt.com/images/home-send3.png" alt="数码图片">
            <img src="https://www.uupt.com/images/home-send4.png" alt="蛋糕图片">
          </div>
        </el-col>
        <el-col :span="14">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <h4>重大节日高峰，配送运力快速送达</h4>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <h4>平均10秒内接单，同城59分钟内完成配送</h4>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <h4>全程覆盖，无距离限制</h4>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <h4>实时显示配送轨迹，安全放心</h4>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <h4>一对一服务，专业高效</h4>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <h4>配送蛋糕冰袋及固定蛋糕工具</h4>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <h4>超过100000+来自不同行业的商家选择使用UU跑腿</h4>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <h4>携手顶尖智囊团 共创分享经济奇迹</h4>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <h4>中午、晚上订餐高峰期，配送运力快速调配</h4>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <h4>重要物资，一定确认亲手送达，保证安全无失误</h4>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <h4>跑男公安系统认证 / 独创的编码保温箱 / GPS全程实时追踪</h4>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <h4>军事化管理体系 / 分类跑男管理制 / 1对1专人服务</h4>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <h4>平均16秒响应 / 最快3分钟上门 / 全程59分钟搞定</h4>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <h4>跑腿服务人员实名认证，全城送取59分钟内完成</h4>
              </div>
            </el-col>
          </el-row>
           <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <h4>跑腿  全国城市合伙人计划</h4>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <h4>为您量身打造的全平台服务体系</h4>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="firend">
      <el-row>
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <img class="partnerImg" src="@/assets/weixin.jpg" alt="图片加载失败">
            <p>扫描二维码加入城市合伙人</p>
            <h4>咨询电话</h4>
            <p>400-820-440</p>
            <h4>咨询时间</h4>
            <p>周一至周六 全天</p>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="less">
#home {
  a {
    width: 50px;
    height: 50px;
    text-decoration: none;
    color: #303133;
  }
  a:hover {
    color: #909399;
  }
  .placeAnOrder {
    color: orange;
  }
  h1 {
    color: #303133;
    margin: 3em 0;
  }
  .row-bg[data-v-9521c290] {
    padding: 30px 0 0 0;
  }
  .el-row[data-v-9521c290] {
    margin-bottom: 50px;
  }
  .el-carousel__item h3 {
    color: #303133;
    font-size: 18px;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-row {
    margin-bottom: 50px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
  }
  .row-bg {
    padding: 30px 0;
    background-color: #f9fafc;
  }
  .paotuiServe {
    h4 {
      height: 10px;
    }
    p {
      height: 10px;
    }
  }
  .partnerImg {
    width: 200px;
    height: 200px;
  }
}
</style>
