import { Button } from "../components";
import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {
  return (
    <div>
      INTER MILANO
      <Button appearance="dark" arrow="down" >Кнопка</Button>
    </div>
  );
};

export default withLayout(Home);