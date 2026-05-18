import "./categoryItem.css";

/* export default function CategoryItem(props:any) {
  const { img_url, label } = props.categoryObj; // props destructuring
   
   return <>
      <img src={img_url} alt="" />
      <div>{label}</div>
    </>
} */
type CategoryProps = {
    categoryObj : {
        img_url:string,
        label:string
    }
}

export default function CategoryItem({categoryObj:{img_url,label}} : CategoryProps) {
   return <>
      <img src={img_url} alt="" />
      <div>{label}</div>
    </>
}