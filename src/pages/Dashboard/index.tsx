import { Space, Table, Typography } from 'antd';

import { RecentOrdersContainer } from './styles';
import { DashboardCard } from '../../components';

import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { useEffect, useState } from 'react';
import { formatCurrency, getOrders } from '../../API';

interface IRecentOrdersProps {
  dataSource: [];
  loading: boolean
}

export type Sold = {
  sold_quantity: number;
}

function RecentOrders({ dataSource, loading }: IRecentOrdersProps) {
  return (
    <RecentOrdersContainer>
      <Typography.Text>Mais vendidos</Typography.Text>
      <Table
        columns={[
          {
            title: 'Item',
            dataIndex: 'title',
            width: 505
          },
          {
            title: 'Itens Vendido',
            dataIndex: 'sold_quantity',
            defaultSortOrder: 'descend',
            sorter: (record1: Sold, record2: Sold) => {
              return record1.sold_quantity - record2.sold_quantity;
            },
          },
          {
            title: 'Valor',
            dataIndex: 'price',
            render: (value) => <span>{formatCurrency(value)} p/unidade</span>,
            width: 100
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={{ position: [ 'bottomCenter' ], pageSize: 2 }}
        bordered
      />
    </RecentOrdersContainer>
  );
}

export default function Dashboard() {
  const [ dataSource, setDataSource ] = useState<[]>([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    getOrders().then((response) => {
      setDataSource(response.results);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction='vertical'>

      <Typography.Title level={4}>Dashboard</Typography.Title>

      <Space direction='horizontal'>
        <DashboardCard
          title='Pedidos'
          value={dataSource
            .reduce((acc: number, object: {sold_quantity: number}) => {
              return acc + object.sold_quantity;
            }, 0)}
          iconProps={{
            icon: <ShoppingCartOutlined />,
            background: 'rgba(0, 255, 0, 0.25)',
            color: 'green',
          }}
        />
        <DashboardCard
          title='Inventário'
          value={dataSource
            .reduce((acc: number, object: {available_quantity: number}) => {
              return acc + object.available_quantity;
            }, 0)}
          iconProps={{
            icon: <ShoppingOutlined />,
            background: 'rgba(0,0, 255, 0.25)',
            color: 'blue',
          }}
        />
        <DashboardCard
          title='Clientes'
          value={30}
          iconProps={{
            icon: <UserOutlined />,
            background: 'rgba(0, 255, 255, 0.25)',
            color: 'purple',
          }}
        />
        <DashboardCard
          title='Faturamento'
          value={formatCurrency(dataSource
            .reduce((acc: number, obj: { price: number }) => {
              return acc +  obj.price * 20;
            }, 0))}
          iconProps={{
            icon: <DollarCircleOutlined />,
            background: 'rgba(255, 0, 0, 0.25)',
            color: 'red',
          }}
        />
      </Space>

      <Space>
        <RecentOrders dataSource={dataSource} loading={loading}  />
      </Space>

    </Space>
  );
}
