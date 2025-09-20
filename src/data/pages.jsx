import PortraitIcon from '@mui/icons-material/Portrait';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupsIcon from '@mui/icons-material/Groups';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const pages = [
    {
      'id': 'panel1',
      'heading': 'User Profile',
      'content': 'Overview',
      'expandeable': true ,
      'icon' : <PortraitIcon/ >,
      'selected': true
    },
    {
      'id': 'panel2',
      'heading': 'Account',
      'content': 'ascas' ,
      'expandeable': true,
      'icon' : <BadgeIcon/ >,
      'selected': false
    },
    {
      'id': 'panel3',
      'heading': 'Corporate',
      'content': 'ProjectABC' ,
      'expandeable': true,
      'icon' : <GroupsIcon/ >,
      'selected': false
    },
    {
      'id': 'panel4',
      'heading': 'Blog',
      'content': 'CourseABC' ,
      'expandeable': true,
      'icon' : <FeaturedPlayListIcon/ >,
      'selected': false
    },
    {
      'id': 'panel5',
      'heading': 'Social',
      'content': 'CourseABC' ,
      'expandeable': true,
      'icon' : <QuestionAnswerIcon/ >,
      'selected': false
    }
  ]

  export default pages;