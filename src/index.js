import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import regex from "./modules/regex";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

menu();
modal();
timer('15 march 2022');
regex();
tabs();
slider();
calc(100);
sendForm({
  formId1: '#form1',
  formId2: '#form2',
  formId3: '#form3',
  someElem: [{
    type: 'block',
    id: 'total',
  }]
});