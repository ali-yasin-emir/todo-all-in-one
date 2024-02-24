import Todo1 from "./Todo1";
import Todo2 from "./Todo2";
import Todo3 from "./Todo3";
import Todo4 from "./Todo4";
import TodoContextProvider from "./store/contexts/todo-context";

const Home = () => {
  return (
    <TodoContextProvider>
      <div className="flex flex-col justify-center items-center pt-24 pb-40">
        <div className="max-md:flex max-md:flex-col max-md:items-center max-md:w-fit flex flex-1 flex-wrap w-[1140px] justify-between gap-12">
          <Todo1 />
          <hr className="h-[240px] w-[1px] bg-white max-md:h-[1px] max-md:w-[120px]" />
          <Todo2 />
          <hr className="h-[240px] w-[1px] bg-white max-md:h-[1px] max-md:w-[120px]" />
          <Todo3 />
          <hr className="h-[240px] w-[1px] bg-white max-md:h-[1px] max-md:w-[120px]" />
          <Todo4 />
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default Home;
