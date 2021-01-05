import _ from "lodash";
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize; //开始截取数据的索引
  return _(items).slice(startIndex).take(pageSize).value();
}
