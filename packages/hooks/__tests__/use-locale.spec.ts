import { inject, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Chinese from '@element-plus/locale/lang/zh-cn'
import English from '@element-plus/locale/lang/en'
import { useLocale, useLocaleProps, LocaleInjectionKey } from '../use-locale'

const TestComp = {
  setup() {
    const locale = inject(LocaleInjectionKey)
    return () => {
      return h('div', { class: 'locale-manifest' }, locale.t('el.popconfirm.confirmButtonText'))
    }
  },
}

describe('use-locale', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount({
      props: useLocaleProps,
      components: {
        'el-test': TestComp,
      },
      setup(_, { slots }) {
        useLocale()
        return () => slots.default()
      },
    },
    {
      props: {
        locale: Chinese,
      },
      slots: {
        default: () => h(TestComp),
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should provide locale correctly', async () => {
    await nextTick()
    expect(wrapper.find('.locale-manifest').text()).toBe(
      Chinese.el.popconfirm.confirmButtonText,
    )
  })

  it('should update the text reactively', async () => {
    await nextTick()
    expect(wrapper.find('.locale-manifest').text()).toBe(
      Chinese.el.popconfirm.confirmButtonText,
    )
    await wrapper.setProps({
      locale: English,
    })

    expect(wrapper.find('.locale-manifest').text()).toBe(
      English.el.popconfirm.confirmButtonText,
    )
  })

  it('should be able to use external translator', async () => {
    await nextTick()
    expect(wrapper.find('.locale-manifest').text()).toBe(
      Chinese.el.popconfirm.confirmButtonText,
    )

    const translator = jest.fn().mockImplementation(k => k)
    await wrapper.setProps({
      i18n: translator,
    })

    expect(wrapper.find('.locale-manifest').text()).toBe(
      'el.popconfirm.confirmButtonText',
    )
    expect(translator).toHaveBeenCalled()
  })
})