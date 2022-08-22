import { watchPostEffect } from 'vue';

const useTest = (refElement) => {
  watchPostEffect(() => {
    if (refElement.value) {
      console.log(window.getComputedStyle(refElement.value).getPropertyValue('color'));
    }
  });
}

export default useTest;
