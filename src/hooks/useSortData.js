import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortConfig } from '../redux/actionCreators';

const useSortData = (items) => {
  const sortConfig = useSelector((state) => state.sortConfig);
  const dispatch = useDispatch();
  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig
      && sortConfig.key === key
      && sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    dispatch(setSortConfig({ key, direction }));
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default useSortData;
