export default function BirthdayDate(age) {
  const date = new Date().getFullYear();
  return date - age;
}
