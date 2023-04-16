import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
import { Card, Space, Statistic } from 'antd';
import { ReactElement } from 'react';

type iconProps = {
  icon: ReactElement<AntdIconProps>;
  color: string;
  background: string;
}

interface IDashboardCardProps {
  title: string;
  value: number | string;
  iconProps: iconProps
}

function IconCard({ iconProps }: { iconProps: iconProps }) {
  return (
    <i style={{
      color: iconProps.color,
      backgroundColor: iconProps.background,
      borderRadius: 20,
      fontSize: 24,
      padding: 8,
    }}
    >
      {iconProps.icon}
    </i>
  );
}

export default function DashboardCard({
  title,
  value,
  iconProps,
}: IDashboardCardProps) {

  return (
    <Card>
      <Space direction='horizontal'>
        <IconCard iconProps={iconProps} />
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
