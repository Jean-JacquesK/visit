import OnePeople from "./onePeople";

function PeopleList({ data }) {
  return (
    <ul className='flex flex-col items-center mt-10 '>
      {data.map((people) => (
        <OnePeople key={people.id} {...people} />
      ))}
    </ul>
  );
}

export default PeopleList;
