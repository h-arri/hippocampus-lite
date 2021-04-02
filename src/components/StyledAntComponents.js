import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Modal,
} from 'antd';
import styled from 'styled-components';

export const StyledInput = styled(Input)`
  border: none;
  background-color: #e1ffff;
  font-size: 25px;
  color: #237673;

  &:active,
  &:focus,
  &:hover,
  .textarea.ant-input:focus {
    border: none;
    background-color: #e1ffff;
  }

  .ant-input:placeholder-shown {
    color: #237673;
  }
`;

const CheckboxGroup = Checkbox.Group;

export const StyledCheckboxGroup = styled(CheckboxGroup)`
  .ant-checkbox-group {
    height: 62px;
    display: flex;
    align-items: center;
  }

  .ant-checkbox-inner {
    height: 25px;
    width: 25px;
  }

  .ant-checkbox-checked,
  .ant-checkbox-inner,
  .ant-checkbox:hover,
  .ant-checkbox:focus,
  .ant-checkbox-input:focus {
    background-color: #e1ffff;
    border-color: #237673;
  }

  .ant-checkbox-checked > .ant-checkbox-inner {
    background-color: #237673;
    border-color: #237673;
  }
`;

export const StyledCard = styled(Card)`
  .ant-card {
    height: 317px;
    border-radius: 2%;
  }

  .ant-card-actions {
    background: none;
    border: none;
    padding-bottom: 10px;
  }

  .ant-card-actions {
    flex: 0 0 20%;
  }

  .ant-card-meta-title {
    color: #237673;
  }

  .ant-card-actions > li > span > .anticon {
    font-size: 30px;
  }

  .ant-card-head {
    font-size: 25px;
    border: none rgba(0, 0, 0, 0.65);
  }
`;

export const StyledButton = styled(Button)`
  .ant-btn {
    border: none;
    border-radius: 5%;
  }
`;

export const StyledModal = styled(Modal)`
  .ant-modal,
  .ant-modal-body {
    padding: 0;
  }

  .ant-modal {
    border-radius: 10px;
  }

  .ant-modal-content {
    background-color: #e1ffff;
  }

  .ant-modal-footer > button {
    font-size: 20px;
    height: 100%;
  }

  .ant-modal-footer > .ant-btn-primary {
    background: #237673;
    color: #e1ffff;
  }

  .ant-modal-footer > .ant-btn-primary:hover {
    background: #237673;
  }

  .ant-modal-footer > .ant-btn-dangerous:hover {
    background: #ff4d4f;
    color: #e1ffff;
  }
`;

const FormItem = Form.Item;

export const StyledFormItem = styled(FormItem)`
  .ant-form-item-label > label {
    font-size: 22px;
  }

  .ant-form-item {
    align-items: center;
    padding: 11px 30px;
    margin-bottom: 0;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  .ant-picker-panel-container .ant-picker-panel {
    background-color: #e1ffff;
  }

  .ant-picker-cell-in-view.ant-picker-cell-selected,
  .ant-picker-cell-inner,
  .ant-picker-cell-inner:hover {
    background: #237673 !important;
  }

  .ant-picker-cell-in-view.ant-picker-cell-today,
  .ant-picker-cell-inner::before {
    border-color: #237673;
  }

  .ant-picker-today-btn,
  .ant-picker-today-btn:hover {
    color: #237673;
  }

  .ant-picker-suffix,
  .ant-picker-input {
    color: rgba(0, 0, 0, 0.65);
  }

  .ant-picker-input > input {
    text-align: end;
    margin-right: 2%;
    color: rgba(0, 0, 0, 0.65);
  }

  .ant-picker-clear {
    background: none;
    top: 55%;
    right: 185px;
  }

  .ant-picker-now-btn {
    color: #237673;
  }

  .ant-picker-ok > .ant-btn {
    background: #237673;
  }

  .ant-picker-time-panel-column,
  > li.ant-picker-time-panel-cell-selected,
  > .ant-picker-time-panel-cell-inner {
    background: #237673;
  }

  .ant-picker.ant-picker-borderless {
    width: 100%;
  }

  .ant-picker-input {
    font-size: 25px;
    color: #237673;
  }

  .ant-picker-large .ant-picker-input > input {
    text-align: left;
    font-size: 25px;
  }

  .ant-picker-dropdown {
    top: 295px !important;
    left: 770px !important;
  }
`;
