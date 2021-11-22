<template>
    <div class="container">
        <div class="grid">
            <div v-for="(item,index) in columns" :key="index">
                <div class="item" @click="itemClick(index)" :style="{background: item.isCheck?item.checkColor:''}"
                    @mousedown="mousedown(index)" @mousemove="mousemove(index)" @mouseup="mouseup(index)">
                </div>
            </div>
        </div>
        <div class="scope-div" v-if="isTouch" :style="getScopeStyle" @click="scopeClick" v-contextmenu="contextmenu">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SeatControl',

        data() {
            return {
                columns: [],
                checkArray: [],
                isTouch: false,
                startIndex: 0,
                endIndex: 0,
                isMove: false,
                contextmenu: [{
                        text: '荧幕',
                        handler: this.handleClick
                    },
                    {
                        text: '舞台',
                        handler: this.handleClick
                    },
                    {
                        text: '座位',
                        handler: this.handleClick
                    }
                ]

            };
        },
        computed: {
            getScopeStyle() {
                let startX = this.startIndex % 40
                let startY = parseInt(this.startIndex / 40)
                let endX = this.endIndex % 40 + 1
                let endY = parseInt(this.endIndex / 40) + 1
                let minX = Math.min(startX, endX)
                let minY = Math.min(startY, endY)
                let maxX = Math.max(startX, endX)
                let maxY = Math.max(startY, endY)
                let width = (maxX - minX) * 30 + (maxX - minX) * 1
                let height = (maxY - minY) * 30 + (maxY - minY) * 1
                return `left:${minX*30+(minX-1)*1}px;top:${minY*30+(minY-1)*1}px;width:${width}px;height:${height}px;`
            }
        },
        created() {
            for (let index = 0; index < 1600; index++) {
                let element = {
                    isCheck: false
                };
                this.columns.push(element)
            }
        },
        methods: {
            itemClick(index) {
                let element = this.columns[index]
                this.columns[index].isCheck = !element.isCheck
            },
            mousedown(index) {
                let element = this.columns[index]
                if (element.isCheck) {
                    this.isTouch = false

                    return
                }
                this.isTouch = true
                this.startIndex = index
                this.endIndex = index
                this.isMove = true
            },
            mousemove(index) {
                if (this.isMove && this.endIndex != index) {
                    // this.columns[index].isCheck = true
                    this.endIndex = index
                }
            },
            mouseup(index) {
                this.isMove = false
                // this.scopeCheck()
                console.log('mouseup', index)
            },

            scopeClick() {
                this.isMove = false
                this.isTouch = false

                // this.scopeCheck()
            },
            scopeCheck(color) {
                let startX = this.startIndex % 40
                let startY = parseInt(this.startIndex / 40)
                let endX = this.endIndex % 40 + 1
                let endY = parseInt(this.endIndex / 40) + 1
                let minX = Math.min(startX, endX)
                let minY = Math.min(startY, endY)
                let maxX = Math.max(startX, endX)
                let maxY = Math.max(startY, endY)

                for (let xIndex = minX; xIndex < maxX; xIndex++) {
                    for (let yIndex = minY; yIndex < maxY; yIndex++) {
                        let index = xIndex + yIndex * 40
                        this.columns[index].isCheck = true
                        this.columns[index].checkColor = color
                        // console.log(xIndex, yIndex)
                    }
                }
            },
            handleClick(menuClick, menuIndex) {
                this.isMove = false
                this.isTouch = false
                console.log(menuIndex)
                switch (menuIndex) {

                    case 0:
                    this.scopeCheck('red')
                        break;
                    case 1:
                    this.scopeCheck('green')
                        break;
                    case 2:
                    this.scopeCheck('orange')
                        break;

                    default:
                        break;
                }
            }

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .container {
        /* position: fixed; */
        width: 1239px;
        height: 1239px;
        position: relative;
    }

    .grid {
        display: inline-grid;
        grid-template-columns: repeat(40, 30px);
        grid-template-rows: repeat(40, 30px);
        grid-column-gap: 1px;
        grid-row-gap: 1px;
        background: #eeee;
    }

    .item {
        text-align: center;
        border: 1px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;

        /* color:#fff; */
        /* font-weight: bold; */
        /* line-height: 150px; */
    }

    .scope-div {
        border: 2px solid green;
       

        position: absolute;
        /* top: 100px;
        left: 100px;
        width: 500px;
        height: 500px; */
        /* z-index: 2; */
    }
</style>