<template>
    <div class="tool-style">
        <div @click="foldChange">
            <div class="el-icon-s-fold" style="color:#fff;font-size: 30px;" v-if="isFold"></div>
            <div class="el-icon-s-unfold" style="color:#fff;font-size: 30px;" v-else></div>
        </div>
        <el-avatar :size="40" :src="circleUrl"></el-avatar>
    </div>
</template>
<script>
    export default{
        name:"Tool",
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                isFold:true
            };
        },
        methods: {
            foldChange(){
                this.isFold = !this.isFold
                this.$emit('foldChange', this.isFold);
            }
        }
    }
</script>
<style>
    .tool-style{
        width: 100%;
        height: 50px;
        background-color:#001f3f;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;


    }
</style>