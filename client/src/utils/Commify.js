export default function Commify(number_string) {
  const [integer, decimal] = number_string.split(".");

  return (
    integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
    (decimal ? "." + decimal : "")
  );
}
