import {
  createReminder,
  filterReminders,
} from '../store/actions/reminders';
import { Form, message } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  StyledButton,
  StyledDatePicker,
  StyledFormItem,
  StyledInput,
  StyledModal,
} from './StyledAntComponents';

const CreateButton = styled(StyledButton)`
  width: 10vw;
  max-width: 90px;
  height: 5vw;
  max-height: 62px;
  background-color: ${(props) => props.theme.shinyShamrock};
  border-color: ${(props) => props.theme.shinyShamrock};

  &:hover,
  &:active,
  &:focus,
  &:visited {
    background: ${(props) => props.theme.shinyShamrock};
    border-color: ${(props) => props.theme.shinyShamrock};
    color: ${(props) => props.theme.gainsboro};
  }

  > h1 {
    color: ${(props) => props.theme.gainsboro};
    font-size: 2vw;
    line-height: 0.6;
    margin: 4%;
  }
`;

const CreateModal = styled(StyledModal)`
  border: none;
`;

const CreateInput = styled(StyledInput)`
  border: none;
  background: none;
  color: ${(props) => props.theme.gainsboro};

  &:active,
  &:focus,
  &:hover {
    border: none;
    box-shadow: none;
  }
`;

const TextArea = CreateInput.TextArea;

const CreateTextArea = styled(TextArea)`
  color: ${(props) => props.theme.gainsboro};
  border: none;
  background: none;

  &:focus {
    border: none;
    box-shadow: none;
  }
`;

const DatePickerFormItem = styled(StyledFormItem)`
  text-align: right;
`;

const Create = () => {
  const dispatch = useDispatch();
  const modalRef = useRef(true);
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const reminders = useSelector((state) => state.reminders.reminders);
  const reminder = useSelector((state) => state.reminders.reminder);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    if (
      modalRef.current &&
      reminder.id &&
      reminders.find((r) => r.id === reminder.id) === undefined
    ) {
      message.success('Reminder created successfully!');
      dispatch(filterReminders(filter));
    }
  }, [reminder]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = (e) => {
    form.validateFields().then((values) => {
      form.resetFields();
      dispatch(
        createReminder({
          id: uuidv4(),
          description: values.desc,
          extra: values.extra,
          remindAt: moment(values.when.toLocaleString()).format(
            'YYYY-MM-DD hh:mm:ss'
          ),
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          isDone: false,
        })
      );
      dispatch(filterReminders(filter));
      setOpen(false);
    });
  };

  return (
    <>
      <CreateButton type="primary" size="large" onClick={handleOpen}>
        <PlusOutlined />
      </CreateButton>
      <CreateModal
        closable={false}
        centered
        visible={open}
        okText="Create"
        onOk={handleCreate}
        onCancel={handleClose}
        cancelButtonProps={{ danger: true }}
      >
        <Form
          form={form}
          name="reminder"
          layout={{ labelCol: { span: 4 }, wrapperCol: { span: 14 } }}
          initialValues={{ remember: true }}
          onFinish={handleCreate}
        >
          <StyledFormItem
            name="desc"
            rules={[
              {
                required: true,
                message: 'What you would like to do?',
              },
            ]}
          >
            <CreateInput placeholder="Description" size="large" />
          </StyledFormItem>
          <DatePickerFormItem
            name="when"
            rules={[
              {
                required: true,
                message: 'When you would like to do?',
              },
            ]}
          >
            <StyledDatePicker
              bordered={false}
              format="DD.MM.YYYY HH:mm"
              showTime={{
                defaultValue: moment('00:00:00', 'HH:mm:ss'),
              }}
              size="large"
            />
          </DatePickerFormItem>
          <StyledFormItem name="extra">
            <CreateTextArea placeholder="Any tips?" />
          </StyledFormItem>
        </Form>
      </CreateModal>
    </>
  );
};

export default Create;
