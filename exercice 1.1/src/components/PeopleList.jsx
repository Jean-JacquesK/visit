import OnePeople from "./onePeople";

function PeopleList({ data }) {
  return (
    <ul className="flex">
      {data.map((people) => (
        <OnePeople key={people.id} {...people} />
      ))}
    </ul>
  );
}

export default PeopleList;
