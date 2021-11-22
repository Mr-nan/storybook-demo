<template>
    <div style="display: flex;flex-direction: row;">
        <el-menu default-active="2" class="el-menu-vertical-demo"  :collapse="isCollapse"
            background-color="#001f3f" text-color="#fff" active-text-color="#ff851b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-shop"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
        <Tool @foldChange="foldChange">
            <div>测试</div>
        </Tool>
    </div>
</template>

<script>
    import Tool from '@/components/Tool'
    export default {
        name: 'NavMenu',
        components: {
            Tool
        },
        data() {
            return {
                isCollapse: true,
            };
        },
        methods: {
            foldChange(isFold){
                this.isCollapse = isFold
            }
        }
    }
</script>
<style>
    .el-menu-vertical-demo{
        width: 200px;
        height: 1000px;
        border-right-width: 0;
    }
</style>