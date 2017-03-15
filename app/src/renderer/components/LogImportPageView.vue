<template>
<div>
    <el-steps :space="150" :active="active" finish-status="success">
        <el-step title="日志列表"></el-step>
        <el-step title="下载并解压"></el-step>
        <el-step title="录入数据"></el-step>
    </el-steps>

    <div class="step1 step-contain" v-if="active === 0">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="日志列表Json">
                <el-input class="json-input" type="textarea" v-model="form.logListJson"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="next">开始解析</el-button>
            </el-form-item>
        </el-form>
    </div>

    <div class="step2 step-contain" v-if="active === 1">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="下载并解压">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="next">开始下载</el-button>
            </el-form-item>
        </el-form>
    </div>

    <div class="step3 step-contain" v-if="active === 2">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="录入数据">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="next">开始录入</el-button>
            </el-form-item>
        </el-form>
    </div>

    <div class="step3 step-contain" v-if="active === 3">
      <el-button style="margin-top: 12px;" @click="next">完成</el-button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            form: {
                logListJson: '',
                desc: ''
            }
        };
    },

    methods: {
        next() {
          if (this.active === 0) {
            //step 1
            //parse json

          }
          if (this.active++ > 2) this.active = 0;
        },
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style lang="scss">
.step-contain{
  margin: 10px 20px 0px 20px;
}

.step1 {
  .json-input{
    >textarea{
      height: 350px;
    }
  }
}

</style>
