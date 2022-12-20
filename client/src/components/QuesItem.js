import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
const QuesItem = (props) => {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="w-50 m-1">
      <div className="row">
        <div className="col-sm-12">
          <form>
            <Accordion flush open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">
                  {props.question.quest}
                </AccordionHeader>
                <AccordionBody accordionId="1" className="border">
                  {props.question.a &&
                    <div>
                      <p> A.{props.question.a} </p>
                      <p> B.{props.question.b}</p>

                      <p> C.{props.question.c}</p>
                      <p>D.{props.question.d}</p>

                      <p> Correct.{props.question.cans}</p>
                    </div>
                  }
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuesItem;
