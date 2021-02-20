import { request } from "./request"
import qs from 'qs'

export function getAllTeacherMultidata() {
  return request({
    url: "/teacher/getAllTeacher"
  })
}

export function getTeacherMultidata() {
  return request({
    url: "/teacher/getTeacher",
    method: "get",
    params: {
      id: 1
    }
  })
}

export function insertTeacherMultidata(teacher) {
  return request({
    url: "/teacher/insertTeacher",
    method: "post",
    data: qs.stringify(teacher),
  })
}