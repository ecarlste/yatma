type IconCrossProps = {
  className?: string;
  onClick?: () => void;
};

function IconCross({ className, onClick }: IconCrossProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <rect
        x="12.7275"
        width="3"
        height="18"
        transform="rotate(45 12.7275 0)"
        fill="#828FA3"
      />
      <rect
        y="2.12132"
        width="3"
        height="18"
        transform="rotate(-45 0 2.12132)"
        fill="#828FA3"
      />
    </svg>
  );
}

export default IconCross;
