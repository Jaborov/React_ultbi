import MyInput from "./UI/button/input/MyInput";
import MySelect from "./UI/button/select/MySelect";
const PostFiltr = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Поиск"
        value={filter.query}
        onChange={(search) =>
          setFilter({ ...filter, query: search.target.value })
        }
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Cортировка"
        options={[
          { value: "title", name: "По называнию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default PostFiltr;
