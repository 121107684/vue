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
                        <div class="media" v-for="(data,key) in msg">
                            <div class='list-options'>
                                <a class="btn btn-sm" title="编辑">
                                    <span class="icon">&#61952;</span>
                                    <span class="icon" @click="editthis(data,key)">编辑</span>
                                </a>
                                <a class="btn btn-sm" title="删除">
                                    <i class="fa fa-trash-o"></i>
                                    <span class="icon">删除</span>
                                </a>
                            </div>
                            <h4>{{key+1}}.{{data.q}}
                                <span class="label label-default">{{data.typeof=='only'?'单选':'多选'}}</span>
                            </h4>
                            <div class="clearfix">
                                <h5 v-for="(value,key,index) in data.an" class="col-md-3">{{String.fromCharCode(65+key)}}.{{value}}</h5>
                            </div>
                            <h5 class="">
                                当前题目如果选择：
                                <b>{{data.quesif}}</b> ， 提示：{{data.placeques}}
                            </h5>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="tile">
                    <h2 class="tile-title">编辑问题</h2>
                    <div class="listview p-15">
                        <h2 class="block-title">问题</h2>
                        <input v-model="ansedit.q" class="form-control input-lg p-10" type="text" placeholder="魔镜啊魔镜，谁是世界上最美的人？" />
                        <div class="clearfix">
                            <h2 class="block-title">输入问题选项</h2>
                            <button @click="addans" class="btn m-r-5 btn-sm pull-right m-10 m-b-0">添加选项</button>
                        </div>
                        <div class="input-group  m-b-10" v-for="(value,key,index) in ansedit.an">
                            <div class="form-control p-0 b-0">
                                <input v-model="ansedit.an[key]" class="form-control" type="text" placeholder="是老子！还用问？？？" />
                            </div>
                            <div class="input-group-btn p-0 m-0">
                                <button class="btn btn-alt" @click="delthis(key,ansedit.an)">删除</button>
                            </div>
                        </div>
                        <p class="m-t-20">题目类型</p>
                        <div class="m-b-15">
                            <el-radio v-model="ansedit.typeof" label="only">单选</el-radio>
                            <el-radio v-model="ansedit.typeof" label="more">多选</el-radio>
                        </div>
                        <p class="m-t-20">当前题目如果选择：{{ansedit.quesif}}</p>
                        <div class="m-b-15">
                            <el-radio v-for="data in radioarr" :key="data" v-model="ansedit.quesif" v-bind:label="data">
                                <b class="strong">{{data}}</b>
                            </el-radio>
                        </div>
                        <p class="m-t-20">则需要填写文本框，提示语为：</p>
                        <input v-model="ansedit.placeques" class="form-control p-10 m-b-10" type="text" placeholder="自定义答案提示语" />

                        <button class="btn m-r-5" @click="savedata">保存</button>
                        <button class="btn m-r-5">取消</button>
                        <button @click="clearthis" class="btn m-r-5">清空</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scope>
@media (min-width: 1200px) {
  .sortable.todo-list .media {
    background-position: 8px 16px;
  }
}
</style>
<script>
export default {
  name: "editque",
  data() {
    return {
      msg: [],
      ansedit: {
        q: "",
        an: ["", "", "", ""],
        typeof: "",
        quesif: "",
        placeques: ""
      },
      indin: ""
    };
  },
  created: function() {
    this.msg = [
      {
        q: "谁是世界上最可爱的人？",
        an: ["哪吒！", "哪吒！", "哪吒！", "哪吒！"],
        typeof: "only",
        quesif: "C",
        placeques: "请输入提示"
      },
      {
        q: "谁是世界上最可爱的人？",
        an: ["哪吒！", "哪吒！", "哪吒！", "哪吒！"],
        typeof: "only",
        quesif: "C",
        placeques: "请输入提示"
      },
      {
        q: "谁是世界上最可爱的人？",
        an: ["哪吒！", "哪吒！", "哪吒！", "哪吒！"],
        typeof: "only",
        quesif: "C",
        placeques: "请输入提示"
      }
    ];
    this.radioarr = [];
    for (let i in this.ansedit.an) {
      this.radioarr.push(String.fromCharCode(65 + Number(i)));
    }
  },
  watch: {
    "ansedit.an": function(newv, oldv) {
      this.radioarr = [];
      for (let i in newv) {
        this.radioarr.push(String.fromCharCode(65 + Number(i)));
      }
    }
  },
  methods: {
    editthis(data, key) {
      this.indin = key;
      this.ansedit = data;
    },
    clearthis() {
      this.ansedit = {
        q: "",
        an: ["", "", "", ""],
        typeof: "",
        quesif: "",
        placeques: ""
      };
    },
    addans() {
      this.ansedit.an.push("");
    },
    delthis(index, data) {
      data.splice(index, 1);
    },
    savedata() {
      console.log(this.indin);
      if (this.indin < 0) {
        this.$http.post("/user/loign", this.ansedit).then(function(res) {
          this.msg.push(this.clone(this.ansedit));
        });
        
      } else {
        this.$http.post("/user/loign", this.ansedit).then(function(res) {
          this.msg.splice(this.clone(this.ansedit), this.indin);
          this.clearthis();
          this.indin = "";
        });
      }
    }
  }
};
</script>

