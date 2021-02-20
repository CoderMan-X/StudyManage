<template>
  <div id="app">
    <form method="POST">
      <ul>
        <li>
          <label for="t_name">姓名：</label
          ><input type="text" id="t_name" placeholder="姓名" v-model="dataTeacher.t_name" />
        </li>
        <li>
          <label for="t_code">账号：</label
          ><input type="text" id="t_code" placeholder="账号" v-model="dataTeacher.t_code" />
        </li>
        <li>
          <label for="t_password">密码：</label
          ><input
            type="password"
            id="t_password"
            placeholder="密码"
            v-model="dataTeacher.t_password"
          />
        </li>
        <li>
          <label for="t_state">状态：</label
          ><input
            type="text"
            id="t_state"
            placeholder="状态"
            v-model="dataTeacher.t_state"
          />
        </li>
        <li>
          <label for="male">
            <input
              type="radio"
              name="t_sex"
              id="male"
              value="男"
              v-model="dataTeacher.t_sex"
            />男
          </label>
          <label for="female">
            <input
              type="radio"
              name="t_sex"
              id="female"
              value="女"
              v-model="dataTeacher.t_sex"
            />女
          </label>
        </li>
        <li>
          <label for="t_birthday">出生日期：</label
          ><input
            type="text"
            id="t_birthday"
            placeholder="出生日期"
            v-model="dataTeacher.t_birthday"
          />
        </li>
        <li>
          <label for="t_createtime">创建日期：</label
          ><input
            type="text"
            id="t_createtime"
            placeholder="创建日期"
            v-model="dataTeacher.t_createtime"
          />
        </li>
        <li>
          <label for="t_degree">学历：</label
          ><input
            type="text"
            id="t_degree"
            placeholder="学历"
            v-model="dataTeacher.t_degree"
          />
        </li>
        <li>
          <label for="t_major">专业：</label
          ><input
            type="text"
            id="t_major"
            placeholder="专业"
            v-model="dataTeacher.t_major"
          />
        </li>
        <li>
          <p>{{ this.dataTeacher.t_sex }}</p>
        </li>
      </ul>
      <input type="button" value="提交" @click="sendPost()" />
    </form>
  </div>
</template>

<script>
import { getTeacherMultidata } from "./network/teacher.js";
import { insertTeacherMultidata } from "./network/teacher.js";
export default {
  name: "App",
  data() {
    return {
      TeacherList: [],
      dataTeacher: {
        t_name: "",
        t_code: "",
        t_password: "",
        t_state: "可用",
        t_sex:"",
        t_birthday: "2021-2-19",
        t_createtime: "2021-2-19",
        t_degree: "",
        t_major: "",
      },
    };
  },
  mounted() {
    getTeacherMultidata().then((res) => {
      this.TeacherList = res;
      console.log(res);
    });
  },
  methods: {
    sendPost:function(){
      insertTeacherMultidata(this.dataTeacher).then((res)=>{
        console.log(res);
      })
    }
  },
};
</script>

<style>
</style>
