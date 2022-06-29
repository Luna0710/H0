import React,{Component} from 'react';
import { Header,Content  } from 'components/Page';
import { DataSet, Table } from 'choerodon-ui/pro';

type Props = {
  match?:any;
}

type State= {
  mode?:string 
}

export default class DetailPage extends Component<Props, State>{
  state = {
    mode: 'tree'
  }

  userDs = new DataSet({
    idField:'',
    parentField:'',
  })

  get columns(){
    return [
      { name: 'userid' },
    ]
  }

  render(){
    return (
      <div>
        <Header 
          title='菜单详情'
          backPath="/demo1/hello/menu"
        >
        </Header>
        <Content>
        <Table
          dataSet={this.userDs}
          columns={this.columns}
      />
        </Content>
      </div>
    );
  }
};

