import { Space, Typography } from 'antd';

import { DashboardContainer } from './styles';
import { DashboardCard } from '../../components';

import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';



export default function Dashboard() {
  return (
    <DashboardContainer>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction='horizontal'>
        <DashboardCard
          title='Orders'
          value={1234}
          iconProps={{
            icon: <ShoppingCartOutlined />,
            background: 'rgba(0, 255, 0, 0.25)',
            color: 'green',
          }}
        />
        <DashboardCard
          title='Inventory'
          value={1234}
          iconProps={{
            icon: <ShoppingOutlined />,
            background: 'rgba(0,0, 255, 0.25)',
            color: 'blue',
          }}
        />
        <DashboardCard
          title='Customer'
          value={1234}
          iconProps={{
            icon: <UserOutlined />,
            background: 'rgba(0, 255, 255, 0.25)',
            color: 'purple',
          }}
        />
        <DashboardCard
          title='Revenue'
          value={1234}
          iconProps={{
            icon: <DollarCircleOutlined />,
            background: 'rgba(255, 0, 0, 0.25)',
            color: 'red',
          }}
        />
      </Space>
    </DashboardContainer>
  );
}
