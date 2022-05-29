import { Link } from 'react-router-dom';
import ProfileIcon from '/svgs/book.svg';
import BookIcon from '/svgs/book.svg';
import MailIcon from '/svgs/mail.svg';
import * as C from './styles';

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export const SidebarItem = ({
  title,
  description,
  icon,
  path,
  active,
}: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === 'step1' && <ProfileIcon />}
          {icon === 'step2' && <BookIcon />}
          {icon === 'step3' && <MailIcon />}
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};
