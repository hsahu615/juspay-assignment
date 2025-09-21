import PieChartIcon from '@mui/icons-material/PieChart'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import FolderIcon from '@mui/icons-material/Folder'
import MenuBookIcon from '@mui/icons-material/MenuBook'

const dashboards = [
  {
    'id': 'panel1',
    'heading': 'eCommerce',
    'content': 'Himanshu',
    'expandeable': false,
    'icon': <PieChartIcon/>,
    'selected': true,
    'path': '/'
  },
  {
    'id': 'panel2',
    'heading': 'Orders',
    'content': 'ascas',
    'expandeable': true,
    'icon': <ShoppingBagIcon/>,
    'selected': false,
    'path': '/orders'
  },
  {
    'id': 'panel3',
    'heading': 'Projects',
    'content': 'ProjectABC',
    'expandeable': true,
    'icon': <FolderIcon/>,
    'selected': false,
    'path': '/projects'
  },
  {
    'id': 'panel4',
    'heading': 'Online Courses',
    'content': 'CourseABC',
    'expandeable': true,
    'icon': <MenuBookIcon/>,
    'selected': false,
    'path': '/courses'
  }
]

export default dashboards