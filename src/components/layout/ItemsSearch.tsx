import { Link } from "react-router-dom";

import { DataItem } from "../../models";

interface Props {
  item: DataItem;
}

export const ItemsSearch: React.FC<Props> = ({ item }) => {
  const pathName = item.title.toLowerCase().replace(/ /g, "-");
  const pathCategory = item.category.toLowerCase().replace(/ /g, "-");
  return (
    <Link
      to={`/product/${pathName}/${pathCategory}/?=${item.id}`}
      className="item-search"
    >
      <span>{item.title}</span>
    </Link>
  );
};
