import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { faqs } from "../constant";
export default function AccordionSection() {
  return (
    <div className=" mt-[7rem]  mb-14">
      {faqs.map((data, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{ color: "#228be6", textAlign:"left"}}
          
          >
            {data.question}
          </AccordionSummary>
          <AccordionDetails sx={{textAlign:'left',color:'#868e96'}}>{data.answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
