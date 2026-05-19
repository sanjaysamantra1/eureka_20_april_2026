
interface Greeting{
  name:string; // mandatory props
  msg?:string; // optional props
  children?:any;
  f1FromBody?:any;
}
export default function PropsDemo1({ name, msg = 'good morning',children,f1FromBody}:Greeting) {
  return <>
  <h3>Hello, {name} -- {msg}</h3>
  {/* <h3>Static content-1 from Child Component</h3>
  <h3>Static content-2 from Child Component</h3> */}
  {children}

  <button className="btn btn-primary" onClick={f1FromBody}>invoke f1</button>
  </>
}


// import PropTypes from 'prop-types';

// export default function PropsDemo1(props:any) {
//   return <h3>Hello, {props.name} -- {props.msg}</h3>;
// }
// PropsDemo1.propTypes = {
//    name: PropTypes.string.isRequired,
//    msg: PropTypes.string
// };