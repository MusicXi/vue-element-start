<template>
    <div style="background-color: #EBEBEB;min-height:800px">
        <div style="width:100%;background-color: #636363; overflow: hidden">
            <span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%">
                网站首页
            </span>
            <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:15%">
                <el-input
                        placeholder="请输入"
                        icon="search"
                        v-model="searchCriteria"
                        :on-icon-click="handleIconClick">
                </el-input>
            </span>
          <span>      <el-button type="text" @click="testAjax">测试ajax</el-button></span>
            <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </span>
        </div>

        <div style="margin-top:5px">
            <el-row :gutter="10">
                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                    <div>
                        <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:800px">
                            <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
                            <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                            <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :xs="20" :sm="20" :md="20" :lg="20">
                    <div>
                        <!-- <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
                            <el-breadcrumb separator="/">
                                <el-breadcrumb-item v-bind="item in breadcrumbItems">{{item}}</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div> -->
                         <el-main>
                         <el-table :data="tableData">
                            <el-table-column prop="createDate" label="日期" width="140">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名" width="120">
                            </el-table-column>
                            <el-table-column prop="email" label="地址">
                            </el-table-column>
                        </el-table>
                        </el-main>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    const item = {
      createDate: "2016-05-02",
      name: "王小虎",
      email: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      searchCriteria: "",
      breadcrumbItems: ["导航一"],
      tableData: Array(20).fill(item)
    };
  },

  methods: {
    handleIconClick(ev) {
      console.log(ev);
    },

    testAjax() {
        // this.$ajax({
        //   method: "post",
        //   url: "http://127.0.0.1:8080/test/test/loadPermission",
        //   data: {
        //     name: "wise",
        //     info: "wrong"
        //   }
        // });

      //测试登入
    //   this.$ajax
    //     .get("http://localhost:8080/login?username=ims&password=ims")
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(response) {
    //       console.log(response);
    //     });

      this.$ajax.get("http://localhost:8080/test/userInfo", {
          username: "Fred",
          name: "Flintstone"
        })
        .then(function(response) {
            this.tableData = response;
          console.log(response);
        })
        .catch(function(response) {
          console.log(response);
        });
    }
  }
};
</script>