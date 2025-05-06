import request from '@/utils/request'
const base_api='/admin/system/sysUser'

// 分页查询角色数据
export const GetSysUserListByPage = (current,limit,queryDto) => {
    return request({
        url: `${base_api}/findByPage/${current}/${limit}` ,
        method: 'get',
        params: queryDto,
    })
}
// 添加角色请求方法
export const SaveSysUser = (sysUser) => {
    return request({
        url: `${base_api}/saveSysUser`,
        method: 'post',
        data: sysUser,
    })
}
// 修改
export const UpdateSysUser = (sysUser) => {
    return request({
        url: `${base_api}/updateSysUser`,
        method: 'put',
        data: sysUser,
    })
}
//删除
export const DeleteSysUser = (userId) => {
    return request({
        url: `${base_api}/deleteById/${userId}`,
        method: 'delete',
    })
}
//给用户分配角色请求
export const DoAssignRoleToUser = (assginRoleVo) => {
    return request({
        url: `${base_api}/doAssgin`,
        method: 'post',
        data: assginRoleVo
    })
}