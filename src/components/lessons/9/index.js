import getDescriptionComponent from '../../taskDescription';
import raw from 'raw.macro';

import LiftingStateUpTask1 from './liftingStateUp/1';
import LiftingStateUpTask2 from './liftingStateUp/2';


const basePath = './src/components/lessons/9/';

const liftingStateUpTask1Description = getDescriptionComponent(raw(basePath + 'liftingStateUp/1/README.md'));
const liftingStateUpTask2Description = getDescriptionComponent(raw(basePath + 'liftingStateUp/2/README.md'));

//map tasks to topics names
export default {
  liftingStateUp: [
    {task: LiftingStateUpTask1, description: liftingStateUpTask1Description},
    {task: LiftingStateUpTask2, description: liftingStateUpTask2Description},

  ],
  propTypes: [

  ],
  fragments: [

  ],
  /*common: [
    {task: CommonTask1, description: getDescriptionComponent(commonTask1Description)}
  ],*/
};
