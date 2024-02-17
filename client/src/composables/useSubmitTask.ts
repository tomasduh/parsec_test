import api from '../utils/axios';
import type { InputTask } from '../utils/types';

export const useSubmitTask = (task : InputTask) => {

  const submitTask = (task: InputTask) => {
    api.post('/task/store', task)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      })
  }

  submitTask(task);
  
};
