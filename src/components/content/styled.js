import styled from 'styled-components';
import {
  Accordion as BareAccordion,
  AccordionItem as BareAccordionItem,
  AccordionItemHeading as BareAccordionItemHeading,
  AccordionItemButton as BareAccordionItemButton,
  AccordionItemPanel as BareAccordionItemPanel,
} from 'react-accessible-accordion';

export const Accordion = styled(BareAccordion)`
  margin-top: 32px;
`;

export const AccordionItem = styled(BareAccordionItem)`  
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  :last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
export const AccordionItemHeading = styled(BareAccordionItemHeading)`  
  font-weight: bold;
`;

export const AccordionItemButton = styled(BareAccordionItemButton)`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  padding-left: 24px;
  
  text-align: left;
  border: none;
  cursor: pointer;
  :hover {}
  :after {
    display: inline-block;
    content: '';
    height: 7px;
    width: 7px;
    margin-top: 36px;
    margin-right: 40px;
    border-bottom: 2px solid #92E0FF;
    border-right: 2px solid #92E0FF;
    transform: rotate(45deg);
  }
  &[aria-expanded='true']::after, &[aria-selected='true']::after {
    transform: rotate(225deg);
  }
  
  outline: none;
`;
export const AccordionItemPanel = styled(BareAccordionItemPanel)`
  margin-left: 24px;
  margin-right: 48px;
  margin-bottom: 28px;
  font-style: italic;
  padding-left: 30px;
  animation: fadein 0.35s ease-in;
  border-left: 2px solid #92E0FF;
  /*background-color: #006196;*/
`;
