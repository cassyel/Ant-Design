import { Typography } from 'antd';
import { FooterContainer } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <Typography.Text type='secondary'>
        © {new Date().getFullYear()} Cassyel Oliveira,
        Todos os direitos reservados.
      </Typography.Text>
      <Typography.Text type='secondary'>
        Criado com Ant Design
      </Typography.Text>
    </FooterContainer>
  );
}
