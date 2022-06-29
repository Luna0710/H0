import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Table } from 'hzero-ui';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { routerRedux } from 'dva/router';

const HelloWorldPage = (props) => {
  const { list, dispatch, totalElements, size } = props;
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch({
      type: 'menu/getCusMenuHttp',
      payload: { page: page, size: size },
    }).then((res) => {
      console.log('res===', res);
    });
  }, [page]);

  const toDetail = (record) => {
    console.log(record);
    dispatch(
      routerRedux.push({
        pathname: `/demo1/hello/MenuDetail/${record.tenantId}`,
      })
    )
  };

  const columns = [
    {
      title: '租户名称',
      dataIndex: 'tenantName',
      key: 'tenantName',
    },
    {
      title: '租户编码',
      dataIndex: 'tenantNum',
      key: 'tenantNum',
    },
    {
      title: '包含自定义菜单',
      dataIndex: 'customMenuFlag',
      key: 'customMenuFlag',
      render: (text, record) => <div>{text ? '是' : '否'}</div>,
    },
    {
      title: '查看详情',
      render: (text, record) => <div onClick={() => toDetail(record)}>查看详情</div>,
    },
  ];

  const pageChange = (page, pageSize) => {
    setPage(page);
    console.log('pageChange', page, pageSize);
  };

  return (
    <div>
      <PageHeaderWrapper title="菜单配置">
        <Table
          dataSource={list}
          columns={columns}
          pagination={{
            defaultPageSize: 10,
            pageSize: size,
            total: totalElements,
            onChange: pageChange,
          }}
        />
      </PageHeaderWrapper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.menu.list,
    size: state.menu.size,
    totalElements: state.menu.totalElements,
  };
};

export default connect(mapStateToProps)(HelloWorldPage);
