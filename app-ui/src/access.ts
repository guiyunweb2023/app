export default (initialState: any) => {
  // 在这里按照初始化数据定义项目中的权限，统一管理
  // 参考文档 https://umijs.org/docs/max/access
  const { userId, role } = initialState;


  return {
    canReadFoo: true,
    canUpdateFoo: role === 'admin',
    canDeleteFoo: (foo:any) => {
      return foo.ownerId === userId;
    },
    admin: true,
    root: false
  };
};
