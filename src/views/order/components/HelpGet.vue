<template>
  <div class="help-get-con">
    <el-form :model="userForm" :rules="userRules" label-width="80px">
      <el-form-item label="物品类型">
        <el-radio-group v-show="isGoodsLoading" v-model="userForm.goods">
          <el-radio-button v-for="good in goods" :label="good" :key="good"></el-radio-button>
        </el-radio-group>
        <i v-show="!isGoodsLoading" class="el-icon-loading"></i>
      </el-form-item>
      <el-form-item label="取货地址" prop="sourceAddress">
        <el-input v-model="userForm.sourceAddress" placeholder="请通过定位选择取货地址">
          <el-button
            slot="append"
            icon="el-icon-location-outline"
            @click="userDialogVisible = true"
          >定位
          </el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="备注地址">
        <el-input v-model="userForm.sourceRemarkAddress" placeholder="请填写具体楼号及门牌号"></el-input>
      </el-form-item>
      <el-form-item label="取货电话" prop="sourcePhone">
        <el-col :span="8">
          <el-input v-model="userForm.sourcePhone" placeholder="请输入联系人手机号码"></el-input>
        </el-col>
      </el-form-item>
    </el-form>

    <el-form :model="rmForm" :rules="rmRules" ref="rmForm" label-width="80px">
      <el-form-item label="收货地址" prop="targetAddress">
        <el-input v-model="rmForm.targetAddress" placeholder="请通过定位选择收货地址">
          <el-button
            slot="append"
            icon="el-icon-location-outline"
            @click="rmDialogVisible = true"
          >定位
          </el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="备注地址">
        <el-input v-model="rmForm.targetRemarkAddress" placeholder="请填写具体楼号及门牌号"></el-input>
      </el-form-item>
      <el-form-item label="收货电话" prop="sourcePhone">
        <el-col :span="8">
          <el-input v-model="rmForm.sourcePhone" placeholder="请输入联系人手机号码"></el-input>
        </el-col>
      </el-form-item>
    </el-form>
    <el-form>
      <el-form-item label="备注信息">
        <el-input
          :rows="5"
          type="textarea"
          v-model="rmForm.remark"
          placeholder="请输入需要取货的商品的名称和数量">
        </el-input>

      </el-form-item>
      <el-form-item label="取货时间">
        <el-col :span="6">
          <el-select v-model="rmForm.isImmediately">
            <el-option label="立即取货" value="immediately"></el-option>
            <el-option label="预约时间" value="order"></el-option>
          </el-select>
        </el-col>
        <el-col v-show="hasTime" class="warn-message" :span="6" :offset="1">*跑男接单后立即取货</el-col>
        <el-col v-show="!hasTime" :span="6" :offset="1">
          <el-date-picker
            v-model="rmForm.requireTime"
            type="datetime"
            placeholder="选择预约时间"
            value-format="timestamp">
          </el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="小费">
        <el-col :span="6">
          <el-input v-model="rmForm.fee" placeholder="小费">
            <template slot="append">元</template>
          </el-input>
        </el-col>
        <el-col class="warn-message" :span="6" :offset="1">* 如不填写默认为0元</el-col>
      </el-form-item>
    </el-form>
    <el-form :model="orderForm" label-width="80px">
      <el-form-item label="订单距离">
        {{ orderForm.distance }} 公里
      </el-form-item>
      <el-form-item label="跑腿费">
        {{ orderForm.amount }} 元
      </el-form-item>
      <el-form-item label="预计时间">
        {{ orderForm.predictTime }} 分钟
      </el-form-item>
      <el-form-item label="付款方式">
        <el-radio-group v-model="orderForm.payType">
          <el-radio label="2" border size="medium">货到付款</el-radio>
          <el-radio label="1" border size="medium">在线付款</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleCountAmount" :loading="hasCount">计算费用</el-button>
        <el-button type="primary" @click="handleSubmit" :disabled="!canOrder">确认订单</el-button>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="userDialogVisible" :show-close=false width="50%">
      <div>
        <el-input
          size="mini"
          placeholder="请输入关键字"
          v-model="buyKeyword">
          <el-button
            class="confirm-address"
            slot="append"
            @click="handleUserMap"
          >确认
          </el-button>
        </el-input>
        <baidu-map center="北京">
          <bm-view class="map"></bm-view>
          <bm-local-search
            :keyword="buyKeyword"
            :auto-viewport="true"
            @infohtmlset="handleUserMapSuccess"
          ></bm-local-search>
        </baidu-map>
      </div>
    </el-dialog>
    <el-dialog
      :visible.sync="rmDialogVisible"
      :show-close=false
      width="50%">
      <div>
        <el-input
          size="mini"
          placeholder="请输入关键字"
          v-model="rmKeyword">
          <el-button
            class="confirm-address"
            slot="append"
            @click="handleRmMap"
          >确认
          </el-button>
        </el-input>
        <baidu-map center="北京">
          <bm-view class="map"></bm-view>
          <bm-local-search
            :keyword="rmKeyword"
            :auto-viewport="true"
            @infohtmlset="handleRmMapSuccess"
          ></bm-local-search>
        </baidu-map>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { fetchHelpGetGoodsList, getDistanceAndMoney, placeOrder } from '@/api/order';
import { isMobile } from '@/utils/util';

export default {
  name: 'HelpGet',
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!isMobile(value)) {
        callback(new Error('请输入正确格式手机号码'));
      } else {
        callback();
      }
    };
    return {
      goods: ['购买内容加载错误'],
      isGoodsLoading: false,
      // 用户表单状态
      userForm: {
        goods: '随意购',
        sourceAddress: '',
        sourceRemarkAddress: '',
        sourcePhone: '',
      },
      rmForm: {
        targetAddress: '',
        sourceRemarkAddress: '',
        sourcePhone: '',
        payAmount: '',
        fee: '',
        remark: '',
        isImmediately: 'immediately',
        requireTime: '',
      },
      userRules: {
        sourceAddress: [
          { required: true, message: '请通过定位选择收货地址', trigger: 'blur' },
        ],
        sourcePhone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' },
        ],
      },
      rmRules: {
        targetAddress: [
          { required: true, message: '请通过定位选择收货地址', trigger: 'blur' },
        ],
        sourcePhone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' },
        ],
      },
      // 订单表单状态
      orderForm: {
        distance: '0',
        amount: '0',
        predictTime: '0',
        payType: '2',
      },
      // 用户表单中商品类别列表
      hasCount: false,
      canOrder: false,
      userDialogVisible: false,
      rmDialogVisible: false,
      buyKeyword: '',
      rmKeyword: '',
      address: '',
      // 收货地址经纬度
      sourceLongitude: '',
      sourceLatitude: '',
      // 购买地址经纬度
      recvLongitude: '',
      recvLatitude: '',
    };
  },
  computed: {
    /**
       * 是否展示日期选择
       *
       * 如果为立即下单，不显示日期选择
       * @returns {boolean}
       */
    hasTime() {
      return this.rmForm.isImmediately === 'immediately';
    },
  },
  methods: {
    handleUserMapSuccess({ address, point }) {
      this.buyKeyword = address;
      this.sourceLongitude = point.lng;
      this.sourceLatitude = point.lat;
    },
    /**
       * 地图模态框中，点击输入框后的确认触发事件处理
       */
    handleUserMap() {
      this.userForm.sourceAddress = this.buyKeyword;
      this.userDialogVisible = false;
    },
    handleRmMapSuccess({ address, point }) {
      this.rmKeyword = address;
      this.recvLongitude = point.lng;
      this.recvLatitude = point.lat;
    },
    handleRmMap() {
      this.rmForm.targetAddress = this.rmKeyword;
      this.rmDialogVisible = false;
    },
    /**
       * 计算费用按钮事件处理
       *
       * 在收货与购买经纬度存在的情况下发起计算请求，
       * 否则提示相关错误信息
       */
    handleCountAmount() {
      if (this.sourceLongitude && this.recvLongitude) {
        this.countDistanceAndMoney();
      } else {
        this.$message.error('请通过定位选择收货或购买地址');
      }
    },
    /**
       * 确认下单处理
       *
       * TODO: 对于表单的验证
       */
    handleSubmit() {
      this.$confirm('确认下单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.placeOrder();
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消',
        });
      });
    },
    countDistanceAndMoney() {
      const params = {
        sourceLng: this.sourceLongitude,
        sourceLat: this.sourceLatitude,
        targetLng: this.recvLongitude,
        targetLat: this.recvLatitude,
      };
      this.hasCount = true;
      getDistanceAndMoney(params)
        .then(({ data: { code, data } }) => {
          const { distance, money, minutes } = data;
          if (code === '200') {
            this.orderForm.distance = distance;
            this.orderForm.amount = money;
            this.orderForm.predictTime = minutes;
            this.hasCount = false;
            this.canOrder = true;
          }
        })
        .catch(() => {
          this.$message.error('计算失败');
        });
    },
    /**
       * 下单
       *
       * TODO: 线上支付
       */
    placeOrder() {
      const { goods, sourceAddress, sourceRemarkAddress, sourcePhone } = this.userForm;
      const {
        targetAddress,
        targetRemarkAddress,
        payAmount,
        fee,
        remark,
        requireTime,
        isImmediately,
      } = this.rmForm;
      const { distance, amount, payType } = this.orderForm;
      const nowTime = new Date().getTime();
      const params = {
        type: 3,
        goods,
        sourceAddress,
        sourceRemarkAddress,
        sourcePhone,
        targetAddress,
        targetRemarkAddress,
        payAmount,
        fee,
        remark,
        payType,
        distance,
        amount,
        sourceLongitude: this.sourceLongitude,
        sourceLatitude: this.sourceLatitude,
        recvLongitude: this.recvLongitude,
        recvLatitude: this.recvLatitude,
        timeLong: this.getTimelong(isImmediately, nowTime, requireTime),
        requireTime: this.getRequireTime(isImmediately, nowTime, requireTime),
      };
      placeOrder(3, params).then(({ data }) => {
        if (data.code === '200') {
          if (this.orderForm.payType === '2') {
            this.offlinePayOrder();
          } else if (this.orderForm.payType === '1') {
            this.onlinePayOrder();
          }
        }
      }).catch(() => {
        this.$message.error('下单失败');
        this.hasCount = false;
      });
    },
    getTimelong(isImm, nowTime, requireTime) {
      if (isImm === 'immediately') return '0';
      return requireTime - nowTime;
    },
    getRequireTime(isImm, nowTime, requireTime) {
      if (isImm === 'immediately') return nowTime;
      return requireTime;
    },
    /**
       * 货到付款处理
       */
    offlinePayOrder() {
      const money = this.rmForm.payAmount + this.rmForm.fee + this.orderForm.amount;
      this.$alert(`请您送达时支付：${money}元`, '订单支付', {
        confirmButtonText: '确定',
        callback: () => {
          this.$message({
            type: 'success',
            message: '请您耐心等待送达',
          });
        },
      });
    },
    /**
       * 在线支付处理
       */
    onlinePayOrder() {

    },
  },
  created() {
    this.isGoodsLoading = false;
    // 加载用户表单商品列表
    fetchHelpGetGoodsList()
      .then(({ data }) => {
        if (data.code === '200'
        ) {
          this.isGoodsLoading = true;
          this.goods = data.data;
        }
      })
      .catch(() => {
        this.isGoodsLoading = true;
      })
    ;
  },
};
</script>

<style lang="less">
  .help-get-con {
    .el-form {
      background-color: #fff;
      margin-bottom: 20px;
      padding: 20px 20px 1px 20px;
      .warn-message {
        color: #ff4d51;
      }
    }
    .el-form:last-child {
      margin-bottom: 0;
    }
    .el-dialog {
      .el-dialog__header {
        padding: 0;
      }
      .el-dialog__body {
        padding: 20px;
      }
      .el-dialog__footer {
        padding: 0;
      }
      .confirm-address {
        cursor: pointer;
      }
    }
    .map {
      width: 100%;
      height: 400px;
    }
  }
</style>
