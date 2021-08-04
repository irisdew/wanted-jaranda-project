import React, { forwardRef } from 'react'
import styled from 'styled-components/macro'

const CustomCheckBox = forwardRef(
  ({ className, children, id, checked, checkHandler }, ref) => {
    return (
      <Wrapper className={className}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          checked={checked}
          tabIndex="-1"
          onChange={checkHandler}
        />
        <label htmlFor={id} tabIndex="0">
          {children}
        </label>
      </Wrapper>
    )
  }
)

export default CustomCheckBox

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    position: absolute;
    width: 1px;
    height: 1px;
    border: 0;
    padding: 0;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
  }

  input[type='checkbox'] + label {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: #4a4a4a;
    cursor: pointer;
    user-select: none;

    &::before {
      content: '';
      display: inline-block;
      width: 1.6rem;
      height: 1.6rem;
      margin-right: 0.7rem;
      border-radius: 0.4rem;
      text-align: center;
      background-color: #f1f1f3;
    }
  }

  input[type='checkbox']:checked + label:before {
    content: '\\2713';
    color: #fff;
    background-color: #55b1b2;
  }
`