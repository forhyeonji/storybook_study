interface ITagButtonProps {
  children: string;
  isChecked: boolean;
  onClick: () => void;
}

export default function TagButton({
  children,
  isChecked,
  onClick
}: ITagButtonProps) {
  const buttonStyles = isChecked
    ? 'bg-white text-primary'
    : ' text-white bg-dark-opacity';

  return (
    <button
      onClick={onClick}
      className={`
      px-[10px]
      h-[33px]
      text-sm
      font-medium
      border
      rounded-tag-button
      border-white
      ${buttonStyles}
      `}
    >
      {children}
    </button>
  );
}
