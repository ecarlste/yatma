type IconVerticalEllipsisProps = {
  className?: string;
};

export default function IconVerticalEllipsis({
  className,
}: IconVerticalEllipsisProps) {
  return (
    <svg
      width="5"
      height="20"
      viewBox="0 0 5 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3" />
      <circle cx="2.30769" cy="10" r="2.30769" fill="#828FA3" />
      <circle cx="2.30769" cy="17.6923" r="2.30769" fill="#828FA3" />
    </svg>
  );
}
