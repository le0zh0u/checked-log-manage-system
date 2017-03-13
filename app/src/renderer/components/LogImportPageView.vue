<template>
<div>
    <el-steps :space="150" :active="active" finish-status="success">
        <el-step title="日志列表"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
    </el-steps>

    <div class="step1" v-if="active === 0">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="日志列表Json">
                <el-input type="textarea" v-model="form.logListJson"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="next">开始解析</el-button>
            </el-form-item>
        </el-form>
    </div>

    <div class="step2" v-if="active === 1">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动形式2">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>

    <div class="step3" v-if="active === 2">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动形式3">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>

    <!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button> -->

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
            if (this.active++ > 2) this.active = 0;
        },
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style>

</style>
