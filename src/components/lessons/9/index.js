import getDescriptionComponent from '../../taskDescription';
import raw from 'raw.macro';

import LiftingStateUpTask1 from './liftingStateUp/1';


const basePath = './src/components/lessons/9/';

const liftingStateUpTask1Description = getDescriptionComponent(raw(basePath + 'liftingStateUp/1/README.md'));

//map tasks to topics names
export default {
  liftingStateUp: [
    {task: LiftingStateUpTask1, description: liftingStateUpTask1Description},

  ],
  propTypes: [

  ],
  fragments: [

  ],
  /*common: [
    {task: CommonTask1, description: getDescriptionComponent(commonTask1Description)}
  ],*/
};
