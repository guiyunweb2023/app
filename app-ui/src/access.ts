export default (initialState: any) => {
    // 在这里按照初始化数据定义项目中的权限，统一管理
    // 参考文档 https://umijs.org/docs/max/access
    const {roleId} = initialState;
    console.log("###############", initialState)

    return {
        admin: 98<=roleId,
        root: 99<=roleId
    };
};
