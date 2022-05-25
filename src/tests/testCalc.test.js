import { mount } from "@vue/test-utils";
import Calc from "../components/Calc.vue";
import { expect } from "@jest/globals";


describe('Test Calculator', ()=>{
  it('test operand1', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('1')

    expect(wrapper.vm.operand1).toBe(1)
  })

  it('test operand2', ()=>{
    const wrapper = mount(Calc)

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.element.value = '1'
    operand2.trigger('input')

    expect(wrapper.vm.operand2).toBe(1)
  })

  it('test sum', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('1')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  it('test subtraction', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('5')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="-"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  it('test multi', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('3')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="*"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(6)
  })

  it('test division', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('6')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="/"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })


  it('test check virtual keyboard', async () => {
    const wrapper = mount(Calc)
    const checkbox = wrapper.find('input[type="checkbox"]')

    await checkbox.setChecked()
    
    expect(wrapper.find('#showvk').exists()).toBe(true)
  })


  it('test check virtual keyboard', async () => {
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const checkbox = wrapper.find('input[type="checkbox"]')

    await checkbox.setChecked()
    
    const checkOperand1 = wrapper.find('input[name="check1"]')
    await checkOperand1.setChecked()
    wrapper.find('button[name="3"]').trigger('click')

    expect(wrapper.vm.operand1).toBe(2)
  })


  it('test check virtual keyboard', async () => {
    const wrapper = mount(Calc)
    const operand2 = wrapper.find('input[name=operand2]')
    const checkbox = wrapper.find('input[type="checkbox"]')

    await checkbox.setChecked()
    
    const checkOperand2 = wrapper.find('input[name="check2"]')
    await checkOperand2.setChecked()
    wrapper.find('button[name="5"]').trigger('click')

    expect(wrapper.vm.operand2).toBe(4)
  })

  it('test check virtual keyboard', async () => {
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const checkbox = wrapper.find('input[type="checkbox"]')

    await checkbox.setChecked()
    
    const checkOperand1 = wrapper.find('input[name="check1"]')
    await checkOperand1.setChecked()
    wrapper.find('button[name="3"]').trigger('click')
    wrapper.find('button[name="5"]').trigger('click')
    wrapper.find('button[name="2"]').trigger('click')
    wrapper.find('button[name="erase"]').trigger('click')

    expect(wrapper.vm.operand1).toBe(24)
  })
})