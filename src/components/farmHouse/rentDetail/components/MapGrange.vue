<template>
  <div>
    <div class="grange">
      <div class="top">
        <div class="left">
          <p>{{village.villageName}}</p>
          <div>{{village.beautifulCountry==1?"美丽乡村":""}}</div>
        </div>

        <div class="right">
          <p>了解详情</p>
          <div class="iconfont icon-gengduo1"  @click="villageDetail(village)"  ></div>
        </div>
      </div>
      <div class="content">
        <div class="left">
          <div class="price">
            <p>本村年租价</p>
            <p>{{village.rentingAverage}}万元</p>
            <p>/年</p>
          </div>
          <div class="location">
            <p>所在区域</p>
            <p>{{village.fareaName}}-{{village.fstreetName}}</p>
          </div>
          <div class="rent">
            <p>在租房源</p>
            <p>{{village.rentFarmhouse}}套</p>
          </div>
        </div>
        <div class="right">
          <div v-if="village.logo"
              :style="'background:url(' + village.logo + ');width: 100%;height: 100%;background-size:cover;background-position: center center'">
          </div>
          <img v-else src="../../../../assets/noimg.jpg" alt>
        </div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  import url from "../../../../assets/noimg.jpg"
  import RouterLink from "vant/packages/mixins/router-link";

  export default {
    name: "Price",
    components: {RouterLink},
    props:{
      village:{
        type:String,
        required:true
      }
    },
    data() {
      return {
        cun: "张家冲村",
        beautiful: "美丽乡村",
        price: "1.2",
        location: "黄陂区 - 长岭街道",
        rent: "100",
        url: url,
        village:village
      }
    },
    methods:{
      villageDetail(){
        console.log();
        this.$router.push({
          name:'villageDetail',
          params:{id:this.village.villageNumber}
        })
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .grange {
    padding: 0.36rem 0.3rem 0.3rem 0.3rem;
    .top {
      height: 0.72rem;
      .bt();
      .left {
        p:nth-child(1) {
          .tt()
        }
        div {
          padding: 0.1rem 0.23rem;
          background-color: #ebf8ee;
          color: #5fc476;
          font-size: 0.22rem;
          text-align: center;
          float: left;
          margin-left: 0.36rem;
          border-radius: 0.2rem;
        }
      }
      .right {
        float: right;
        p {
          float: left;
          font-size: 0.25rem;
          color: #b3b2b7;
        }
        .iconfont {
          float: left;
          font-size: 0.28rem;
          .hc();
          margin-top: 0.05rem;
          margin-left: 0.2rem;
        }
      }
    }
    .content {
      height: 1.8rem;
      margin-top: 0.3rem;
      font-size: 0.26rem;
      .left {
        float: left;
        width: 4.15rem;
        .price, .location, .rent {
          margin-bottom: 0.3rem;

          p:nth-child(1) {
            width: 1.66rem;
            .hc();
            margin-right: 0.29rem;
            float: left;
          }
        }
        .rent {
          margin-bottom: 0;
          p:nth-child(2) {
            text-decoration: underline;
            color: @mr;
          }
        }
        .price {
          p:nth-child(2) {
            .rc();
            float: left;
            font-weight: 600;
          }
          p:nth-child(3) {
            .hc()
          }
        }
      }
      .right {
        float: right;
        width: 2.12rem;
        height: 1.72rem;
        div {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .blank {
    .jg();
  }
</style>
