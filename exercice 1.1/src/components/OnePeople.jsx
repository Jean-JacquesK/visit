function OnePeople({ name, age, image }) {
  function BirthdayDate() {
    const date = new Date().getFullYear();
    return date - age;
  }
  return (
    <>
      <li className='container '>
        <img src={image} alt={name} />
        <p className='text-2x1'>Prénom : {name}</p>
        <p>Année de naissance : {BirthdayDate}.</p>
      </li>
    </>
  );
}

export default OnePeople;
