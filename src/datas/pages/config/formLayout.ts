import {
  ID_INPUT_VARIANT_FORM,
  ID_ORDINARY_FORM,
} from '@datas/pages/formLayout/config';
import { SectionContent } from '@datas/pages/config/_types';
import { ordinaryForm, inputVariantFrom } from '@datas/pages/formLayout';
import { createTabs } from '@datas/pages/helpers/tabHelpers';

const config = {
  componentType: 'tabs',
  inputType: 'option',
  headerLine: true,
  border: 'border dark:border-gray-700',
  padding: 'px-5 py-2',
  shadow: 'shadow-none',
  margin: 'mb-5',
};

const formLayout: SectionContent[] = [
  {
    variant: 'default',
    data: [
      {
        variant: 'default',
        type: 'columnGroup',
        config: {
          id: ID_ORDINARY_FORM,
          ...config,
        },
        title: 'Ordinary Form',
        col: 'col-1',
        tabData: createTabs(ID_ORDINARY_FORM, ordinaryForm(ID_ORDINARY_FORM)),
      },
      {
        variant: 'default',
        type: 'columnGroup',
        config: {
          id: ID_INPUT_VARIANT_FORM,
          ...config,
        },
        title: 'Input Variant',
        col: 'col-1',
        tabData: createTabs(
          ID_INPUT_VARIANT_FORM,
          inputVariantFrom(ID_INPUT_VARIANT_FORM)
        ),
      },
    ],
  },
];

export { formLayout };
