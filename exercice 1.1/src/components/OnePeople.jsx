import BirthdayDate from "../utils/BirthdayDate";

function OnePeople({ name, age, image }) {
  return (
    <>
      <li className='container my-3'>
        <img src={image} alt={name} />
        <p className='text-2x1'>Prénom : {name}</p>
        <p>Année de naissance : {BirthdayDate(age)}</p>
      </li>
    </>
  );
}

export default OnePeople;
