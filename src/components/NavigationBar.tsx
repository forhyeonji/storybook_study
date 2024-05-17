import IconButton from './IconButton';
import closeIcon from '../assets/icon/close.svg';
import whiteCloseIcon from '../assets/icon/close_white.svg';
import backArrowIcon from '../assets/icon/back_arrow.svg';
import whiteBackArrowIcon from '../assets/icon/back_arrow_white.svg';

interface INavigationBarProps {
  isDark: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  isDark,
  showBackButton,
  showCloseButton,
  showTitle,
  title = '',
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {}
}: INavigationBarProps) {
  return (
    <div className="w-full flex justify-between">
      {/* 뒤로가기 버튼 */}
      <div className="navigation-title-wrapper flex">
        {showBackButton && (
          <IconButton
            alt="back-arrow"
            iconPath={isDark ? backArrowIcon : whiteBackArrowIcon}
            onClick={onBackButtonClick}
          />
        )}
        {/* 페이지 이름 */}
        {showTitle && (
          <h1 className={`text-2xl ${isDark ? 'text-primary' : 'text-white'}`}>
            {title}
          </h1>
        )}
      </div>
      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          alt="close-icon"
          iconPath={isDark ? closeIcon : whiteCloseIcon}
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}
