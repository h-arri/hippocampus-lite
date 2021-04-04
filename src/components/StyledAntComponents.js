import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Modal,
  Popconfirm,
} from 'antd';
import styled from 'styled-components';

const StyledInput = styled(Input)`
  font-size: 2vw;

  .ant-input:placeholder-shown {
    color: ${(props) => props.theme.darkJungleGreen};
  }
`;

const CheckboxGroup = Checkbox.Group;

const StyledCheckboxGroup = styled(CheckboxGroup)`
  .ant-checkbox-inner {
    height: 25px;
    width: 25px;
  }

  .ant-checkbox-checked,
  .ant-checkbox-inner,
  .ant-checkbox:hover,
  .ant-checkbox:focus,
  .ant-checkbox-input:focus {
    background-color: ${(props) => props.theme.shinyShamrock};
    border-color: ${(props) => props.theme.shinyShamrock};
  }

  .ant-checkbox-checked > .ant-checkbox-inner {
    background-color: ${(props) => props.theme.shinyShamrock};
    border-color: ${(props) => props.theme.shinyShamrock};
  }
`;

const StyledCard = styled(Card)`
  height: 317px;
  border-radius: 2%;
  background: ${(props) => props.theme.shinyShamrock};

  .ant-card-cover {
    padding: 24px;
    font-size: 2em;
  }

  .ant-card-actions {
    background: none;
    border: none;
    padding-bottom: 10px;
  }

  .ant-card-actions > li:not(:last-child) {
    border: none;
  }

  .ant-card-head {
    font-size: 25px;
    border: none;
  }
`;

const StyledButton = styled(Button)`
  .ant-btn {
    border: none;
    border-radius: 5%;
  }
`;

const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding: 15px;
    background-color: ${(props) => props.theme.shinyShamrock};
  }

  .ant-modal {
    border-radius: 100px;
  }

  .ant-modal-footer {
    background-color: ${(props) => props.theme.shinyShamrock};
    > button {
      font-size: 20px;
      height: 100%;
    }
  }

  .ant-modal-footer > .ant-btn-primary {
    color: ${(props) => props.theme.skobeloff};
    background-color: ${(props) => props.theme.gainsboro};
    border: none;

    &:hover {
      color: ${(props) => props.theme.gainsboro};
      background-color: ${(props) => props.theme.skobeloff};
    }
  }

  .ant-btn-dangerous {
    border: none;
    background-color: ${(props) => props.theme.gainsboro};

    &:hover {
      background: ${(props) => props.theme.tartOrange};
      color: ${(props) => props.theme.gainsboro};
    }
  }
`;

const FormItem = Form.Item;

const StyledFormItem = styled(FormItem)`
  .ant-form-item-label > label {
    font-size: 22px;
  }

  .ant-form-item {
    align-items: center;
    padding: 11px 30px;
    margin-bottom: 0;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  .ant-picker-panel-container {
    > .ant-picker-panel {
      background-color: #e1ffff;
    }
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
    ${(props) => props.theme.independence};
  }

  .ant-picker-input > input {
    text-align: end;
    color: ${(props) => props.theme.gainsboro};
    height: 45px;
    margin-right: 5%;
    padding: 15px;
    font-size: 20px;
  }

  .ant-picker-clear {
    background: none;
    top: 55%;
    right: 88%;
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
    background-color: ${(props) => props.theme.independence};
  }
`;

const StyledPopconfirm = styled(Popconfirm)`
  .ant-popover .ant-popover-content {
    .ant-popover-inner-content > .ant-popover-buttons button {
      background-color: ${(props) => props.theme.independence};
      .ant-btn-dangerous {
        &:hover {
          background-color: red;
        }
      }
    }
  }

  .ant-popover-buttons > .ant-btn-primary {
    background: #237673;
  }

  .ant-popover-buttons > .ant-btn-primary:hover {
    background: #237673;
  }

  .ant-popover-buttons > .ant-btn-dangerous {
    color: ${(props) => props.theme.tartOrange};
  }

  .ant-popover-buttons > .ant-btn-dangerous:hover {
    background: ${(props) => props.theme.tartOrange};
    color: #e1ffff;
  }
`;

export {
  StyledInput,
  StyledCheckboxGroup,
  StyledCard,
  StyledButton,
  StyledModal,
  StyledFormItem,
  StyledDatePicker,
  StyledPopconfirm,
};
