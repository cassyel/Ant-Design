import { HeaderContainer } from './styles';

import { Image, Popover, Space, Typography } from 'antd';
import {
  ClockCircleTwoTone,
  EnvironmentTwoTone,
  MailTwoTone,
  PhoneTwoTone
} from '@ant-design/icons';

export default function Header() {
  const body = (content: string) => (
    <Typography.Text style={{ color: '#a4a4a4', fontSize: 12 }}>
      {content}
    </Typography.Text>
  );

  return (
    <HeaderContainer>

      <Image
        src='https://ultracarweb.com/Imagens/logo_ultracar.png'
        width={40}
      />

      <Typography.Title>Ultracar Dashboard</Typography.Title>

      <Space size={20}>

        <Popover title="Localização" content={body('BELO HORIZON - MG')}>
          <EnvironmentTwoTone twoToneColor='#ff2a1e' className='icon'/>
        </Popover>

        <Popover title="Telefone" content={body('(31) 3213-2354')}>
          <PhoneTwoTone twoToneColor='#90bf34' className='icon'/>
        </Popover>

        <Popover title="E-Mail" content={body('ULTRACAR@ULTRACAR.COM.BR')}>
          <MailTwoTone twoToneColor='#4bb4ba' className='icon'/>
        </Popover>

        <Popover title="Horário" content={body('SEG. SEX. 8:00 - 18:00')}>
          <ClockCircleTwoTone twoToneColor='#ffbb42' className='icon'/>
        </Popover>

      </Space>

    </HeaderContainer>
  );
}
