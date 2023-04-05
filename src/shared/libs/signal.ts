import { shallowRef, triggerRef, computed as _computed } from 'vue';
import { computedAsync as _computedAsync } from '@vueuse/core';

import type { ComputedGetter, Ref } from 'vue';
import type { AsyncComputedOnCancel, AsyncComputedOptions } from '@vueuse/core';

export const signal = <T extends any>(initialValue: T) => {
  const $ref = shallowRef<T>(initialValue);
  const state = () => $ref.value;

  state.set = (value: T) => {
    $ref.value = value;
  };
  state.update = (updater: (value: T) => T) => {
    $ref.value = updater($ref.value);
  };
  state.mutate = (mutator: (value: T) => void) => {
    mutator($ref.value);
    triggerRef($ref);
  };

  return state;
};

export const computed = <T>(getter: ComputedGetter<T>): (() => T) => {
  const state = _computed(getter);

  return () => state.value;
};

export const computedAsync = <T>(
  getter: (onCancel: AsyncComputedOnCancel) => T | Promise<T>,
  initialState?: T,
  optionsOrRef?: Ref<boolean> | AsyncComputedOptions
): (() => T) => {
  const state = _computedAsync(getter, initialState, optionsOrRef);

  return () => state.value;
};
