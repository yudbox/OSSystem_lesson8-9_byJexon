import getTaskDescriptionRenderer from '../../taskDescription';
//import raw from 'raw.macro';

import EventsTask1 from './events/1';
import EventsTask2 from './events/2';
import EventsTask3 from './events/3';

import ListsTask1 from './lists/1';
import ListsTask2 from './lists/2';
import ListsTask3 from './lists/3';
import ListsTask4 from './lists/4';

import FormsTask1  from './forms/1';
import FormsTask2  from './forms/2';
import FormsTask3  from './forms/3';

const inProgress = 'development is in progress';

const listsTask1Description = inProgress/*raw('./lists/1/README.md')*/;
const listsTask2Description = inProgress/*raw('./lists/2/README.md')*/;
const listsTask3Description = inProgress/*raw('./lists/3/README.md')*/;
const listsTask4Description = inProgress/*raw('./lists/4/README.md')*/;

const getDescriptionComponent = getTaskDescriptionRenderer;

//map tasks to topics names
export default {
  events: [
    {task: EventsTask1, description: undefined},
    {task: EventsTask2, description: undefined},
    {task: EventsTask3, description: undefined},
  ],
  lists: [
    {task: ListsTask1, description: getDescriptionComponent(listsTask1Description)},
    {task: ListsTask2, description: getDescriptionComponent(listsTask2Description)},
    {task: ListsTask3, description: getDescriptionComponent(listsTask3Description)},
    {task: ListsTask4, description: getDescriptionComponent(listsTask4Description)},
  ],
  forms: [
    {task: FormsTask1, description: undefined},
    {task: FormsTask2, description: undefined},
    {task: FormsTask3, description: undefined},
  ],
};
