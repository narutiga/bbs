import { Comment } from "src/component/Comment";
import { Form } from "src/component/Form";

const Home = () => {
  return (
    <div>
      <Form />
      <Comment gestName="kino" postedAt="2022-11-19" title="テストですよー！" />
    </div>
  );
};

export default Home;
