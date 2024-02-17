<template>
  <div class="task-input">
    <input type="text" v-model="task" name="task" placeholder="Add new task..." />
        <button class="add-task" @click="submitTask">ADD</button>
      </div>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { useSubmitTask } from '../composables/useSubmitTask';
    import { defineEmits } from 'vue';

    const emits = defineEmits(['loadData']);

    type InputTask = {
      content: string;
    };

    const task = ref('');

    const submitTask = () => {
      const inputTask: InputTask = {
        content: task.value,
      };
      useSubmitTask(inputTask);
      emits('loadData');
    };
</script>

<style scoped lang="scss">
.task-input {
  color: var(--color-heading);
  font-size: var(--fs-3);
  font-weight: 500;
  box-shadow: var(--box-shadow-1);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--border-radius-1);
  display: flex; /* Add this line */
  align-items: center; /* Add this line */
}

input {
  border: none;
  width: 100%;
  font-size: var(--fs-3);
  font-weight: 500;
  color: var(--color-heading);
  outline: none;
  cursor: pointer;
}

.add-task {
  padding: var(--space-1) var(--space-2);
  border: none;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: var(--fs-3);
  font-weight: 500;
  border-radius: var(--border-radius-1);
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: var(--color-heading);
  border-radius: var(--border-radius-1);
  box-shadow: var(--box-shadow-1);
} 
</style>
