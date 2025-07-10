import {
  ID_DEFAULT_FORM,
  ID_INPUT_VARIANT_FORM,
  ID_ORDINARY_FORM,
} from '@datas/pages/formLayout/config';
import { SectionContent } from '@datas/pages/config/_types';
import {
  ordinaryForm,
  inputVariantFrom,
  defaultForm,
  basicHeadertForm,
  disbaledForm,
  leftIconForm,
  rightIconForm,
} from '@datas/pages/formLayout';
import { createTabs } from '@datas/pages/helpers/tabHelpers';
import {
  ID_BASIC_HEADER_FORM,
  ID_DISABLED_FORM,
  ID_FORM_LEFT_ICON,
  ID_FORM_RIGHT_ICON,
} from '../formLayout/types';

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
      {
        variant: 'default',
        type: 'columnGroup',
        config: {
          id: ID_DEFAULT_FORM,
          ...config,
        },
        title: 'Default Form',
        col: 'col-1',
        tabData: createTabs(ID_DEFAULT_FORM, defaultForm(ID_DEFAULT_FORM)),
      },
      {
        variant: 'default',
        type: 'columnGroup',
        config: {
          id: ID_BASIC_HEADER_FORM,
          ...config,
        },
        title: 'Default Form',
        col: 'col-1',
        tabData: createTabs(
          ID_BASIC_HEADER_FORM,
          basicHeadertForm(ID_BASIC_HEADER_FORM)
        ),
      },
      {
        variant: 'default',
        type: 'columnGroup',
        config: {
          id: ID_DISABLED_FORM,
          ...config,
        },
        title: 'Disabled Form',
        col: 'col-1',
        tabData: createTabs(ID_DISABLED_FORM, disbaledForm(ID_DISABLED_FORM)),
      },
      {
        variant: 'default',
        // type: 'columnGroup',
        config: {
          headerLine: true,
          border: 'border-none',
          padding: 'px-5 py-2 gap-5',
          usePaddingInContent: true,
        },
        // title: 'Form Icons',
        col: 'col-2',
        childOptions: {
          type: 'columnGroup',
        },
        data: [
          {
            variant: 'default',
            type: 'columnGroup',
            config: {
              id: ID_FORM_LEFT_ICON,
              ...config,
            },
            title: 'Form With Left Icon',
            col: 'col-1',
            tabData: createTabs(
              ID_FORM_LEFT_ICON,
              leftIconForm(ID_FORM_LEFT_ICON)
            ),
          },
          {
            variant: 'default',
            type: 'columnGroup',
            config: {
              id: ID_FORM_RIGHT_ICON,
              ...config,
            },
            title: 'Form With Right Icon',
            col: 'col-1',
            tabData: createTabs(
              ID_FORM_RIGHT_ICON,
              rightIconForm(ID_FORM_RIGHT_ICON)
            ),
          },
        ],
      },
    ],
  },
];

export { formLayout };
