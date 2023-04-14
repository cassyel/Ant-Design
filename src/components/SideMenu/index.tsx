import { SideMenuContainer } from './styles';

import { Menu } from 'antd';

import {
  ControlOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

import { useNavigate } from 'react-router';

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <SideMenuContainer>
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: 'Dashboard',
            icon: <ControlOutlined />,
            key: '/'
          },
          {
            label: 'Inventário',
            icon: <ShopOutlined />,
            key: '/inventario'
          },
          {
            label: 'Pedidos',
            icon: <ShoppingCartOutlined />,
            key: '/pedidos'
          },
          {
            label: 'Clientes',
            icon: <UsergroupAddOutlined />,
            key: '/clientes'
          }
        ]}
      >

      </Menu>
    </SideMenuContainer>
  );
}
