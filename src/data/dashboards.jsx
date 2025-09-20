import PieChartIcon from '@mui/icons-material/PieChart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FolderIcon from '@mui/icons-material/Folder';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const dashboards = [
    {
      'id': 'panel1',
      'heading': 'Default',
      'content': 'Himanshu',
      'expandeable': false,
      'icon' : <PieChartIcon/ >,
      'selected': false
    },
    {
      'id': 'panel2',
      'heading': 'eCommerce',
      'content': 'ascas' ,
      'expandeable': true,
      'icon' : <ShoppingBagIcon/ >,
      'selected': true
    },
    {
      'id': 'panel3',
      'heading': 'Projects',
      'content': 'ProjectABC' ,
      'expandeable': true,
      'icon' : <FolderIcon/ >,
      'selected': false
    },
    {
      'id': 'panel4',
      'heading': 'Online Courses',
      'content': 'CourseABC' ,
      'expandeable': true,
      'icon' : <MenuBookIcon/ >,
      'selected': false
    }
]

export default dashboards;