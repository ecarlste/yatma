type IconCheckProps = {
  className?: string;
};

export default function IconCheck({ className }: IconCheckProps) {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.27588 3.06597L4.03234 5.82243L9.03234 0.822433"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}
