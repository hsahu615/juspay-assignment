import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={props.expandeable === true ? <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} style={{color: "var(--grey-text-active-color)"}}/> : <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} className='opacity-0'/>}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
  }),
}));

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState('panel2');
  const [data, setData] = React.useState(props.data)
  const isDark = useSelector(state => state.theme.dark)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleNavigate = (panel) => {
    const updatedData = data.map(config =>
      config.id === panel ? { ...config, selected: true } : {...config, selected: false}
    )

    setData(updatedData);
  }

  return (
    <div>
      {data.map((acc) => <Link to={acc.path} style={{textDecoration: 'none'}}>
      <Accordion
          style={{backgroundColor: acc.selected==true ? isDark ? "grey" : "var(--grey-clicked-color)" : 'unset', borderLeft: acc.selected==true ? isDark ? '3px solid white' : '3px solid black' : 'none', borderTop: 'none', borderBottom: 'none', borderRight: 'none'}} 
          className='custom-accordion' 
          expanded={expanded === acc.id} 
          onChange={handleChange(acc.id)}
          onClick={() => handleNavigate(acc.id)}
        >
        <AccordionSummary className='ps-2'  aria-controls="panel1d-content" id={acc.id + "-header"} expandeable={acc.expandeable}>
          <div className='d-flex align-items-center'><span className='me-1' style={{color: isDark ? 'white' : "grey"}}>{acc.icon}</span><span style={{color: isDark ? 'white' : "grey"}}>{acc.heading}</span></div>
        </AccordionSummary>

      </Accordion></Link>)}
    </div>
  );
}
