export const MyComp = ({ a, b }) => {
  return <h1>{a + b}</h1>;
};

export function Multiply(a, b) {
  return a * b;
}

export function Divide(a, b) {
  return a / b;
}

export function MyDefault(name) {
  return <h2>Hello {name}</h2>;
}

export const Files = [
  { id: "1", name: "Almaty" },
  { id: "2", name: "Астана" },
  { id: "3", name: "Актау" },
];

export const MyCompList = ({ count }) => {
  var arr = [];
  for (let i = 0; i < count; i++) {
    var ob = {};
    ob.id = i;
    ob.name = i.toString();
    arr.push(ob);
  }
  return (
    <select>
      {arr.map((z) => (
        <option value={z.id}>{z.name}</option>
      ))}
    </select>
  );
};

export const MyCompList2 = () => {
  var arr = [];
  for (let i = 0; i < Files.length; i++) {
    var ob = {};
    ob.id = Files[i].id;
    ob.name = Files[i].name;
    arr.push(ob);
  }
  return (
    <>
      {arr.map((z) => (
        <li>
          {z.id} - {z.name}
        </li>
      ))}
    </>
  );
};
