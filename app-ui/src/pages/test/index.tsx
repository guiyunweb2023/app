// @ts-ignore
import {BetaSchemaForm, ProTable} from "@ant-design/pro-components";
// @ts-ignore
import {Button, message} from "antd";


export default function () {

    const columns: any = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            key: 'option',
            width: 80,
            valueType: 'option',
            render: () => [
                <Button type="link" key={1}>
                    编辑
                </Button>,
                <Button type="link" key={2} danger>
                    删除
                </Button>,
            ],
        },
    ]
    const columnForm: any = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '文件',
            dataIndex: 'update',
            render: () => [
                <Button type="link" key={1}>
                    编辑
                </Button>,
            ],
        },
    ]
    const dataSource: any = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];

    return (
        <ProTable
            toolBarRender={() => [
                <BetaSchemaForm
                    columns={columnForm}
                    title={'新建表单'}
                    rowProps={{
                        gutter: [16, 16],
                    }}
                    colProps={{
                        span: 12,
                    }}
                    grid={true}
                    trigger={<Button type="primary"> 新建 </Button>}
                    onFinish={async (values:any) => {
                        console.log(values.name);
                        message.success('提交成功');
                        return true;
                    }}
                    key={1} layoutType='ModalForm'>
                </BetaSchemaForm>
            ]}
            dataSource={dataSource}
            columns={columns}
            headerTitle="查询表格"></ProTable>
    )
}