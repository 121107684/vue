<template>
    <div class="block-area">
        <div class="row">
            <div class="col-md-8">
                <!-- Main Chart -->
                <div class="tile">
                    <h2 class="tile-title">较多问题</h2>
                    <div class="tile-config dropdown">
                        <a data-toggle="dropdown" href="" class="tile-menu"></a>
                        <ul class="dropdown-menu pull-right text-right">
                            <li>
                                <a class="tile-info-toggle" href="">Chart Information</a>
                            </li>
                            <li>
                                <a href="">Refresh</a>
                            </li>
                            <li>
                                <a href="">Settings</a>
                            </li>
                        </ul>
                    </div>
                    <div class="listview narrow todo-list sortable">
                        <div class="media" v-for="data in msg">
                            <div class='list-options'>
                                <a class="btn btn-sm" title="编辑">
                                    <span class="icon">&#61952;</span>
                                    <span class="icon">编辑</span>
                                </a>
                                <a class="btn btn-sm" title="删除">
                                    <i class="fa fa-trash-o"></i>
                                    <span class="icon">删除</span>
                                </a>
                            </div>
                            <h4>{{data.q}}</h4>
                            <h5 v-for="(value,key,index) in data.an" class="col-md-3">{{String.fromCharCode(65+key)}}.{{value}}</h5>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="tile">
                    <h2 class="tile-title">编辑问题</h2>
                    <div class="listview p-15">
                        <h2 class="block-title">问题</h2>
                        <input class="form-control input-lg p-10" type="text" placeholder="魔镜啊魔镜，谁是世界上最美的人？"/>
                        <div>
                            <h2 class="block-title">输入问题选项</h2>
                        </div>
                        <input class="form-control m-b-10" type="text" placeholder="白雪公主！"/>
                        <input class="form-control m-b-10" type="text" placeholder="选A！"/>
                        <input class="form-control m-b-10" type="text" placeholder="B说的对！"/>
                        <input class="form-control m-b-10" type="text" placeholder="以上全是！"/>
                        <p class="m-t-20">题目类型</p>
                        label 
                        <button class="btn m-r-5">保存</button>
                        <button class="btn m-r-5">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scope>
@media (min-width: 1200px) {
    .sortable.todo-list .media {
        background-position: 8px 16px
    }
}
</style>
<script>
export default {
    name: 'editque',
    data() {
        return {
            msg: [{
                q: '1.谁是世界上最可爱的人？',
                an: ['哪吒！', '哪吒！', '哪吒！', '哪吒！']
            }, {
                q: '1.谁是世界上最可爱的人？',
                an: ['哪吒！', '哪吒！', '哪吒！', '哪吒！']
            }, {
                q: '1.谁是世界上最可爱的人？',
                an: ['哪吒！', '哪吒！', '哪吒！', '哪吒！']
            }]
        }
    }
}
</script>

