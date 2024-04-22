import IconButton from './IconButton';
import closeIcon from '../assets/icon/black_x_icon.svg';

interface INavigationBar {
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  showBackButton,
  showCloseButton,
  showTitle,
  title = '',
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {}
}: INavigationBar) {
  return (
    <div>
      {/* 뒤로가기 버튼 */}
      {showBackButton && (
        <IconButton alt="" iconPath="" onClick={onBackButtonClick} />
      )}
      {/* 페이지 이름 */}
      {showTitle && <h1>{title}</h1>}
      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          alt="close-icon"
          iconPath={closeIcon}
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}
