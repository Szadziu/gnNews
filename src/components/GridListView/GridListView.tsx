import {List} from 'antd';
import {useSelector} from 'react-redux';
import CardItem from './CardItem';
import ListItem from './ListItem';
import {Article, ViewMode} from '../../types/types';
import {RootState} from '../../store/store';

interface GridListViewProps {
    data: Article[];
}

const GridListView: React.FC<GridListViewProps> = ({data}) => {
    const view = useSelector(({viewMode}: RootState) => viewMode.value);
    const isList = view === ViewMode.List;
    const ListComponent = isList ? CardItem : ListItem;
    const grid = isList ? gridConfig : undefined;

    return <List bordered={!isList} grid={grid} dataSource={data} renderItem={(item: Article) => <ListComponent item={item} />} />;
};

export default GridListView;

const gridConfig = {
    xs: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
    xxl: 6,
};
