import { Avatar, Modal, Rate, Space, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { formatCurrency, getOrders } from '../../API';


type Available = {
  available_quantity: number
}

export default function Inventory() {
  const [ dataSource, setDataSource ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    getOrders().then((res) => {
      setDataSource(res.results);
      setLoading(false);
    });
  }, []);
  return (
    <Space size={20} direction='vertical'>

      <Typography.Title level={4}>Inventário</Typography.Title>

      <Table
        columns={[
          {
            title: 'Foto',
            dataIndex: 'thumbnail',
            render: (value) => <Avatar src={value} size={50} />,
          },
          {
            title: 'Item',
            dataIndex: 'title',
          },
          {
            title: 'Valor',
            dataIndex: 'price',
            render: (value) => <span>{formatCurrency(value)}</span>,
          },
          {
            title: 'Avaliação',
            dataIndex: 'installments',
            render: (value) => {
              return <Rate
                value={value.rate > 0 ? value.rate : 1 }
                allowHalf={true}
                disabled
              />;
            }
          },
          {
            title: 'Estoque',
            dataIndex: 'available_quantity',
            defaultSortOrder: 'descend',
            sorter: (record1: Available, record2: Available) => {
              return record1.available_quantity - record2.available_quantity;
            },
          }
        ]}
        dataSource={dataSource}
        loading={loading}
        pagination={{ position: [ 'bottomCenter' ], pageSize: 4 }}
        bordered
      />

    </Space>
  );
}
