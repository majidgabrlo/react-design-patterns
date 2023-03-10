import { ReactNode} from "react";
import SmallPersonListItem from "../people/SmallPersonListItem";

const printProps = <P extends {}>(
    component: {
        (props: P): ReactNode;
    }
): {
    (props: P): JSX.Element;
} => {
    return (props: P) => {
        console.log(props);
        return component(props) as JSX.Element;
    }
};



// Example
const UserInfoWrapped = printProps(SmallPersonListItem)
function App() {
  return <UserInfoWrapped person={{age:22,name:"S"}} />
}


export default printProps




