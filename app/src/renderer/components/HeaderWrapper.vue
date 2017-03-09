<template>
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="首页" name="home"></el-tab-pane>
    <el-tab-pane label="日志导入" name="import"></el-tab-pane>
    <el-tab-pane label="日志查看" name="overview"></el-tab-pane>
    <el-tab-pane label="日志报表" name="report"></el-tab-pane>
</el-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'home'
        };
    },
    created: function() {
      if (this.$route.name === 'landing-page') {
        this.activeName = 'home'
      }else if(this.$route.name === 'log-import-page'){
        this.activeName = 'import'
      }else {
        this.activeName = 'overview'
      }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
            if (this.activeName === 'home') {
                this.$router.push({
                    name: 'landing-page'
                })
            } else if (this.activeName === 'import') {
                this.$router.push({
                    name: 'log-import-page'
                })
            } else {
                this.$router.push({
                    name: 'test-page'
                })
            }

        }
    }
};
</script>

<style>

</style>
