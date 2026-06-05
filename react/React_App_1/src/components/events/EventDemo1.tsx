export default function EventDemo1() {
  const clickHandler = (e: any) => {
    console.log(e);
  };
  const onKeyUpHandler = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <h3 className="text-center">Let's Learn React Events</h3>

      <button onClick={clickHandler} className="mx-2">Click me</button>

      <input type="text" onKeyUp={onKeyUpHandler}></input>
    </>
  );
}
