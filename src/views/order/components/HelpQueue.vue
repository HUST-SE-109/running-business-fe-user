<template>
  <div class="help-que-ue">
    <el-form :model="userForm" :rules="userRules" label-width="80px">
      <el-form-item label="物品类型">
        <el-radio-group v-show="isGoodsLoading" v-model="userForm.goods">
          <el-radio-button v-for="good in goods" :label="good" :key="good"></el-radio-button>
        </el-radio-group>
        <i v-show="!isGoodsLoading" class="el-icon-loading"></i>
      </el-form-item>
      <el-form-item label="备注信息">
        <el-col :span="17">
          <el-input
            :rows="5"
            type="textarea"
            v-model="userForm.remark"
            placeholder="找人排队，托人办事儿，请填写您的备注信息">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="排队地址" prop="sourceAddress">
        <el-input v-model="userForm.sourceAddress" placeholder="请通过定位选择取排队地址">
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
      <el-form-item label="联系电话" prop="sourcePhone">
        <el-col :span="10">
          <el-input v-model="userForm.sourcePhone" placeholder="请填写联系人手机号"></el-input>
        </el-col>
      </el-form-item>
    </el-form>
    <el-form :model="rmForm" :rules="rmRules" label-width="80px">
      <el-form-item label="排队时间">
        <el-col :span="6">
          <el-select v-model="rmForm.isImmediately">
            <el-option label="立即排队" value="immediately"></el-option>
            <el-option label="预约时间" value="order"></el-option>
          </el-select>
        </el-col>
        <el-col v-show="hasTime" class="warn-message" :span="6" :offset="1">*跑男接单后立即排队</el-col>
        <el-col v-show="!hasTime" :span="6" :offset="1">
          <el-date-picker
            v-model="rmForm.requireTime"
            type="datetime"
            placeholder="选择预约时间"
            value-format="timestamp">
          </el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="排队时长" prop="timeLong">
        <el-col :span="10">
          <el-select v-model="rmForm.timeLong" placeholder="请选择排队时间">
            <el-option label="10" value="10分钟"></el-option>
            <el-option label="15" value="15分钟"></el-option>
            <el-option label="20" value="20分钟"></el-option>
            <el-option label="30" value="30分钟"></el-option>
            <el-option label="40" value="40分钟"></el-option>
            <el-option label="50" value="50分钟"></el-option>
            <el-option label="60" value="60分钟"></el-option>
            <el-option label="120" value="120分钟"></el-option>
          </el-select>
          分钟
        </el-col>
      </el-form-item>
      <el-form-item label="小费">
        <el-col :span="6">
          <el-input v-model="rmForm.fee" placeholder="小费">
            <template slot="append">元</template>
          </el-input>
        </el-col>
      </el-form-item>
    </el-form>
    <el-form :model="orderForm" label-width="80px">
      <el-form-item label="跑腿费">
        {{ orderForm.amount }} 元
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
  </div>
</template>

<script>
import { fetchHelpQueueList, getDistanceAndMoney, placeOrder } from '@/api/order';
import { isMobile } from '@/utils/util';

export default {
  name: 'HelpQueue',
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
      buyKeyword: '',
      userDialogVisible: false,
      // 收货地址经纬度
      sourceLongitude: '',
      sourceLatitude: '',
      hasCount: false,
      canOrder: false,
      // 购买地址经纬度
      recvLongitude: '',
      recvLatitude: '',
      // 用户表单状态
      userForm: {
        goods: '随意购',
        sourceAddress: '',
        sourceRemarkAddress: '',
        sourcePhone: '',
        remark: '',
      },
      rmForm: {
        // 排队所需时间
        timeLong: '',
        targetPhone: '',
        targetAddress: '',
        sourceRemarkAddress: '',
        sourcePhone: '',
        payAmount: '',
        fee: 0,
        remark: '',
        isImmediately: 'immediately',
        requireTime: '',
        targetRemarkAddress: '',
      },
      // 订单表单状态
      orderForm: {
        distance: '0',
        amount: '0',
        predictTime: '0',
        payType: '2',
      },
      userRules: {
        sourceAddress: [
          { required: true, message: '请通过定位选择排队地址', trigger: 'blur' },
        ],
        sourcePhone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' },
        ],
      },
      rmRules: {
        timeLong: [
          { required: true, message: '请填写排队时长（分钟）', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleUserMap() {
      this.userForm.sourceAddress = this.buyKeyword;
      this.userDialogVisible = false;
    },
    handleUserMapSuccess({ address, point }) {
      this.buyKeyword = address;
      this.sourceLongitude = point.lng;
      this.sourceLatitude = point.lat;
    },
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
    getRequireTime(isImm, nowTime, requireTime) {
      if (isImm === 'immediately') return nowTime;
      return requireTime;
    },
    placeOrder() {
      const { goods, sourceAddress, sourceRemarkAddress, sourcePhone } = this.userForm;
      const {
        targetPhone,
        targetAddress,
        targetRemarkAddress,
        payAmount,
        fee,
        remark,
        requireTime,
        isImmediately,
        timeLong,
      } = this.rmForm;
      const { distance, amount, payType } = this.orderForm;
      const nowTime = new Date().getTime();
      const params = {
        type: 4,
        goods,
        sourceAddress,
        sourceRemarkAddress,
        sourcePhone,
        targetPhone,
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
        timeLong,
        requireTime: this.getRequireTime(isImmediately, nowTime, requireTime),
      };
      placeOrder(4, params).then(({ data }) => {
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
    handleCountAmount() {
      if (this.sourceLongitude) {
        this.countDistanceAndMoney();
      } else {
        this.$message.error('请通过定位选择收货或购买地址');
      }
    },
    countDistanceAndMoney() {
      const params = {
        sourceLng: this.sourceLongitude,
        sourceLat: this.sourceLatitude,
        timeLong: parseInt(this.rmForm.timeLong, 10) * 60 * 1000,
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
    offlinePayOrder() {
      const money = parseInt(this.rmForm.fee, 10) + this.orderForm.amount;
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
  },
  computed: {
    hasTime() {
      return this.rmForm.isImmediately === 'immediately';
    },
  },
  created() {
    this.isGoodsLoading = false;
    // 加载用户表单商品列表
    fetchHelpQueueList()
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
  .help-que-ue {
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
